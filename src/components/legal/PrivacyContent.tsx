import React from 'react';

export const PrivacyContent: React.FC = () => {
  return (
    <>
      <p className="text-gray-600 mb-8">
        関西まるごと情シス代行（以下「当社」）は、お客様の個人情報を適切に保護・管理することを社会的責務と認識し、以下の通り個人情報保護方針を定め、これを遵守いたします。
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. 個人情報の収集</h2>
        <p className="mb-4">当社は、お客様が当社サービスをご利用される際、以下の情報を適正な手段で取得することがあります。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>会社名、部署名、担当者名</li>
          <li>電話番号、メールアドレス、住所</li>
          <li>サービス提供のために必要な業務内容やシステム情報</li>
          <li>アンケートや問い合わせフォームから取得した情報</li>
          <li>その他、当社サービス提供に必要な個人情報</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. 個人情報の利用目的</h2>
        <p className="mb-4">当社は、取得した個人情報を以下の目的で利用いたします。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>サービスの提供、運営および業務遂行のため</li>
          <li>お客様からのお問い合わせ対応およびサポート業務のため</li>
          <li>システム導入支援や運用サポート等、当社サービスに関連する提案・案内のため</li>
          <li>利用状況やご意見をもとに、サービス品質向上や改善を行うため</li>
          <li>キャンペーン、セミナー、サービスに関するご案内のため</li>
          <li>法令に基づく対応および、必要な範囲での業務遂行のため</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. 個人情報の第三者提供</h2>
        <p className="mb-4">当社は、お客様の個人情報を法令で定める場合を除き、以下の場合を除き第三者に開示・提供することはありません。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>お客様から事前に同意を得た場合</li>
          <li>法令に基づき、開示が必要とされる場合</li>
          <li>サービス提供に必要な業務委託先（パートナー企業やサポート会社等）に提供する場合</li>
        </ul>
        <p className="mt-4 text-gray-600">なお、業務委託先に個人情報を提供する場合には、適切な契約を締結し、厳格な管理の下で実施します。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. 個人情報の管理</h2>
        <p className="mb-4">当社は、お客様の個人情報を安全に管理するため、以下の対策を講じます。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>個人情報の漏洩、紛失、改ざん、不正アクセス防止に努め、適切な安全対策を実施します。</li>
          <li>個人情報の取扱いに関わる従業員に対し、適切な教育・監督を実施します。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">5. 個人情報の開示、訂正、削除について</h2>
        <p className="text-gray-600">
          お客様ご本人から個人情報の開示、訂正、削除、利用停止等のお申し出があった場合は、法令に基づき適切に対応いたします。
          お問い合わせ窓口までご連絡ください。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">6. クッキー（Cookie）等の利用について</h2>
        <p className="text-gray-600">
          当社ウェブサイトでは、お客様の利便性向上やサービス改善を目的としてCookieを使用する場合があります。
          Cookieの利用によって個人が特定される情報を取得することはありません。
          Cookieの設定はお客様自身で無効にすることが可能です。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">7. 法令等の遵守とプライバシーポリシーの改定</h2>
        <p className="text-gray-600">
          当社は、個人情報に関する法令、ガイドラインおよびその他の規範を遵守いたします。
          また、必要に応じて本プライバシーポリシーの内容を適宜見直し、改定することがあります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">8. お問い合わせ窓口</h2>
        <p className="mb-4">個人情報の取扱いに関するお問い合わせ、苦情、相談等は、以下の窓口までご連絡ください。</p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="font-bold mb-2">関西まるごと情シス代行</p>
          <p className="text-gray-600">メールアドレス： example@example.com</p>
        </div>
      </section>

      <div className="text-gray-600 mt-12">
        <p>制定日：2025年1月5日</p>
        <p>最終更新日：2025年1月5日</p>
      </div>
    </>
  );
};