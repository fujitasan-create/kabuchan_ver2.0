'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import '../../forecast/forecast.css'; 

export default function WhatIsForecastPage() {
  return (
    <div className="forecast-container"> {/* ← レイアウトを統一 */}
      <KabuchanIcon emotion="default" size={350} />

      <OptionBubble title="銘柄占いとは？" options={[]} backLink={true}>
        <p>
          あなたが入力してくれた企業名に対して、<br />
          株価の動きやニュースの情報をもとに、<br />
          <strong>かぶちゃんが機械学習モデルを使って「明日、株価が上がるか下がるか」を予測するコンテンツ</strong>だよ！<br />
          <br />
          あくまでかぶちゃんの予想だから、特定の銘柄の取引を推奨するものじゃないよ！<br />
          エンタメとして楽しんでくれるとうれしいな♪
        </p>
      </OptionBubble>
    </div>
  );
}