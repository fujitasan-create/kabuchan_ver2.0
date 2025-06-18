'use client';

import './knowledge.css';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function AboutKnowledgePage() {
  return (
    <div className="knowledge-container">
      <div className="knowledge-row">
        <KabuchanIcon emotion="littlehappy" size={350} />
        <OptionBubble title="どんなことができるの？" options={[]} backLink={true}>
          <p className="knowledge-text">
            かぶちゃんは、株に興味を持ち始めた人たちが安心して投資を始められるように、いろんな知識と機能を身につけてるんだ〜。
          </p>
          <p className="knowledge-text">
            まず、日本に上場している<strong>4,412銘柄すべて</strong>に対応していて、それぞれの銘柄について、現在の株価やPER、時価総額などの基本情報を調べてお伝えできるよ。
          </p>
          <p className="knowledge-text">
            株価のグラフを描くことも得意なんだ。<strong>ローソク足はもちろん、RSI、MACD、ボリンジャーバンドといったテクニカル指標も表示できる</strong>から、視覚的に分析したい人にも役立ててもらえると思うよ！
          </p>
          <p className="knowledge-text">
            あとね、ニュースの見出しを読み取って、全体の雰囲気を分析する機能もあるの。市場がポジティブな空気なのか、それとも少し不安定なのか、ざっくりとした<strong>「今のムード」</strong>を知る手がかりになるはずだよ。
          </p>
          <p className="knowledge-text">
            そして、機械学習モデルを使って<strong>「明日の株価が上がりそうかどうか」を予想する機能</strong>も搭載してるの！もちろん予想が外れることもあるけど、日々のアップデートでどんどん精度も上げていくつもりだから、応援してくれると嬉しいな〜。
          </p>
          <p className="knowledge-text">
            まだデモ機能だけど、株に関するちょっとした相談にも答えられるよ！「この株ってどう？」「初心者でも買いやすいのってどれ？」みたいな質問があったら、気軽に話しかけてね！
          </p>
        </OptionBubble>
      </div>
    </div>
  );
}