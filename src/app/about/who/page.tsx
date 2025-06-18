'use client';

import './who.css';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function AboutWhoPage() {
  return (
    <div className="about-container">
      <div className="about-row">
        <KabuchanIcon emotion="littlehappy" size={350} />
        <OptionBubble title="かぶちゃんって何者？" options={[]} backLink={true}>
          <p className="about-text">
            かぶちゃんは、株式投資を始めたばかりの人たちをサポートする、ちょっぴり頼れるAIの女の子だよ。
            株価のグラフを見せたり、今の株の情報を教えてくれたり、ニュースの雰囲気を分析したり、
            明日の株価を予想したり——投資初心者が必要とする基本的なサポートはおまかせあれ！
          </p>
          <p className="about-text">
            まだまだ勉強中のところもあるけど、日々アップデートを重ねて、
            みんなの投資生活をもっと楽しく、わかりやすくできるようにがんばってるよ！
          </p>
        </OptionBubble>
      </div>
    </div>
  );
}

