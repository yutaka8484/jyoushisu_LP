import React from 'react';

export const TermsContent: React.FC = () => {
  return (
    <>
      <p className="text-gray-600 mb-8">
        本利用規約（以下「本規約」）は、関西まるごと情シス代行（以下「当社」）が提供するITサポートサービス（以下「本サービス」）の利用条件を定めるものです。
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. 適用範囲</h2>
        <p className="mb-4">本規約は、本サービスの利用に関する当社とお客様との間の権利義務関係を定めることを目的とし、お客様と当社との間の本サービスの利用に関わる一切の関係に適用されます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. サービス内容</h2>
        <p className="mb-4">本サービスは、以下のサービスを含みます：</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>IT運用代行サービス</li>
          <li>ヘルプデスクサポート</li>
          <li>セキュリティ対策支援</li>
          <li>クラウド移行支援</li>
          <li>DX推進支援</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. 契約の成立</h2>
        <p className="text-gray-600">
          本サービスの利用契約は、お客様が当社所定の方法により本サービスの利用を申し込み、当社がこれを承諾することにより成立します。
          なお、以下の場合には、当社は利用申込を承諾しないことがあります：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
          <li>申込内容に虚偽、誤記または記載漏れがあった場合</li>
          <li>申込者が規約上の義務を怠るおそれがあると当社が判断した場合</li>
          <li>その他当社が適当でないと判断した場合</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. 利用料金</h2>
        <p className="text-gray-600">
          本サービスの利用料金は、当社が別途定める料金表に従います。
          お客様は、本サービスの利用料金を、当社が指定する支払方法により支払うものとします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">5. 禁止事項</h2>
        <p className="mb-4">お客様は、本サービスの利用にあたり、以下の行為を行ってはなりません：</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の知的財産権を侵害する行為</li>
          <li>当社または第三者の名誉を毀損する行為</li>
          <li>本サービスの運営を妨害する行為</li>
          <li>その他当社が不適切と判断する行為</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">6. 免責事項</h2>
        <p className="text-gray-600">
          当社は、本サービスの提供に際して、以下の事項について一切の責任を負わないものとします：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
          <li>天災地変等の不可抗力により生じた損害</li>
          <li>お客様の設備の障害または本サービス用設備までのインターネット接続サービスの不具合等により生じた損害</li>
          <li>当社が第三者から導入しているコンピュータウィルス対策ソフトについて、当該第三者からウィルスパターン、ウィルス定義ファイル等を提供されていない種類のウィルスの本サービス用設備への侵入により生じた損害</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">7. 契約期間</h2>
        <p className="text-gray-600">
          本サービスの最低契約期間は、サービス開始日から6ヶ月間とします。
          期間満了の1ヶ月前までに、お客様または当社から書面による契約終了の意思表示がない場合、本契約は同一条件でさらに6ヶ月間自動的に更新されるものとし、以後も同様とします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">8. 規約の変更</h2>
        <p className="text-gray-600">
          当社は、本規約を随時変更することができるものとします。
          なお、この場合には、お客様の利用条件その他利用契約の内容は、変更後の新利用規約を適用するものとします。
        </p>
      </section>

      <div className="text-gray-600 mt-12">
        <p>制定日：2025年1月5日</p>
        <p>最終更新日：2025年1月5日</p>
      </div>
    </>
  );
};