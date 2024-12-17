import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">情シス代行</h3>
            <p className="text-sm mb-4">
              関西企業の頼れるITパートナーとして、
              中小企業の成長をワンストップでサポートします。
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">営業時間: 平日 9:00-18:00</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:0120-xxx-xxx" className="text-sm hover:text-blue-400">
                  0120-xxx-xxx
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@example.com" className="text-sm hover:text-blue-400">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">大阪市中央区○○町1-1-1</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm hover:text-blue-400">
                  ベーシックIT運用代行プラン
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-blue-400">
                  セキュリティ＆クラウド強化プラン
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-blue-400">
                  DX推進プラン
                </a>
              </li>
              <li>
                <a href="#flow" className="text-sm hover:text-blue-400">
                  導入までの流れ
                </a>
              </li>
              <li>
                <a href="#cases" className="text-sm hover:text-blue-400">
                  導入事例
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-sm hover:text-blue-400">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-blue-400">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm hover:text-blue-400">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm hover:text-blue-400">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/sitemap" className="text-sm hover:text-blue-400">
                  サイトマップ
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">対応エリア</h3>
            <ul className="space-y-2">
              <li className="text-sm">大阪府</li>
              <li className="text-sm">兵庫県（神戸市）</li>
              <li className="text-sm">京都府</li>
              <li className="text-sm">奈良県</li>
              <li className="text-sm">滋賀県</li>
              <li className="text-sm">三重県</li>
              <li className="text-sm">和歌山県</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} 情シス代行 All Rights Reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy" className="hover:text-blue-400">プライバシーポリシー</a>
              <span>|</span>
              <a href="/terms" className="hover:text-blue-400">利用規約</a>
              <span>|</span>
              <a href="/sitemap" className="hover:text-blue-400">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};