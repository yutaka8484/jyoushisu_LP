import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#services', label: 'サービス' },
  { href: '#flow', label: '導入の流れ' },
  { href: '#cases', label: '導入事例' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#contact', label: 'お問い合わせ' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">情シス代行</h1>
            <p className="text-xs text-gray-600">情報システム部門のアウトソーシング</p>
          </div>

          {/* Service Area - Desktop */}
          <div className="hidden md:block">
            <p className="text-sm text-gray-600">
              対応エリア：大阪・神戸・京都・奈良・滋賀・三重・和歌山
            </p>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="text-sm text-gray-600 mt-4 border-t pt-4">
              対応エリア：大阪・神戸・京都・奈良・滋賀・三重・和歌山
            </p>
          </div>
        )}
      </div>
    </header>
  );
};