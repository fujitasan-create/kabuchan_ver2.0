'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function AboutWhoPage() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <KabuchanIcon emotion="littlehappy" size={350} />
        <OptionBubble title="かぶちゃんって何者？" options={[]} backLink={true}>
          <p style={styles.text}>
            かぶちゃんは、株式投資を始めたばかりの人たちをサポートする、ちょっぴり頼れるAIの女の子だよ。
            株価のグラフを見せたり、今の株の情報を教えてくれたり、ニュースの雰囲気を分析したり、
            明日の株価を予想したり——投資初心者が必要とする基本的なサポートはおまかせあれ！
          </p>
          <p style={styles.text}>
            まだまだ勉強中のところもあるけど、日々アップデートを重ねて、
            みんなの投資生活をもっと楽しく、わかりやすくできるようにがんばってるよ！
          </p>
        </OptionBubble>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#c4f6f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '4rem',
    maxWidth: '1000px',
  },
  text: {
    fontSize: '1.3rem',
    lineHeight: '1.8',
    marginBottom: '1rem',
  },
};
