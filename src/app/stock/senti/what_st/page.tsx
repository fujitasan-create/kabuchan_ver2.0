'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import '../senti.css';

export default function WhatIsSentimentPage() {
  return (
    <div className="senti-container">
      <KabuchanIcon emotion="thinking" size={350} />

      <OptionBubble title="市場の様子とは？" options={[]} backLink={true}>
        <p>
          「市場の様子」は今日のビジネスニュースを読み取って、<br />
            そこから全体の雰囲気を感情分析してスコアにしてるんだよ〜！<br />
            スコアは0〜5で、<strong>数字が大きいほどポジティブなムード</strong>ってこと！<br />
            投資のヒントになるかもだから、ぜひチェックしてみてね♪
        </p>
      </OptionBubble>
    </div>
  );
}
