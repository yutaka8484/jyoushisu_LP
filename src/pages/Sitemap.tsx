import React from 'react';
import { Link } from 'react-router-dom';
import { LegalPage } from '../components/LegalPage';
import { useSEO } from '../hooks/useSEO';
import { 
  LayoutGrid, 
  FileText, 
  Shield, 
  Users, 
  HelpCircle, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const Sitemap: React.FC = () => {
  useSEO({
    title: 'サイトマップ',
    description: '情シス代行のサイトマップ。IT運用代行サービスの全ページをご案内します。'
  });

  return (
    <LegalPage title="サイトマップ">
      <div className="grid gap-8">
        {/* メインコンテンツ */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
            <LayoutGrid className="w-6 h-6 mr-2" />
            メインコンテンツ
          </h2>
          <ul className="grid gap-4">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                トップページ
              </Link>
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    サービスプラン
                  </a>
                </li>
                <li>
                  <a href="/#flow" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    導入までの流れ
                  </a>
                </li>
                <li>
                  <a href="/#cases" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    導入事例
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* サービス */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
            <Shield className="w-6 h-6 mr-2" />
            サービス
          </h2>
          <ul className="grid gap-2">
            <li>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                ベーシックIT運用代行プラン
              </a>
            </li>
            <li>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                セキュリティ＆クラウド強化プラン
              </a>
            </li>
            <li>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                DX推進プラン
              </a>
            </li>
          </ul>
        </section>

        {/* 導入事例 */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
            <Users className="w-6 h-6 mr-2" />
            導入事例
          </h2>
          <ul className="grid gap-2">
            <li>
              <a href="/#cases" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                製造業A社：基幹システム導入支援
              </a>
            </li>
            <li>
              <a href="/#cases" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                サービス業A社：勤怠管理システム導入
              </a>
            </li>
            <li>
              <a href="/#cases" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                製造業B社：WMS導入
              </a>
            </li>
          </ul>
        </section>

        {/* サポート */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
            <HelpCircle className="w-6 h-6 mr-2" />
            サポート
          </h2>
          <ul className="grid gap-2">
            <li>
              <a href="/#faq" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                よくある質問
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                お問い合わせ
              </a>
            </li>
          </ul>
        </section>

        {/* 企業情報 */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
            <FileText className="w-6 h-6 mr-2" />
            企業情報
          </h2>
          <ul className="grid gap-2">
            <li>
              <Link to="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                利用規約
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                サイトマップ
              </Link>
            </li>
          </ul>
        </section>

        {/* お問い合わせ */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
            <MessageSquare className="w-6 h-6 mr-2" />
            お問い合わせ
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-bold mb-2">関西まるごと情シス代行</p>
            <p className="text-gray-600">対応エリア：大阪・神戸・京都・奈良・滋賀・三重・和歌山</p>
            <a 
              href="/#contact" 
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
            >
              お問い合わせフォームへ
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </section>
      </div>
    </LegalPage>
  );
};

export default Sitemap;