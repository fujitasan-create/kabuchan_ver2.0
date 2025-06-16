'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function AboutRoadmapPage() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <KabuchanIcon emotion="littlehappy" size={350} />
        <OptionBubble title="今後の機能追加予定は？" options={[]} backLink={true}>
          <p style={styles.text}>
            かぶちゃんは、これからももっともっと株のことを楽しく学べるように、いろんな機能を追加していく予定だよ！
          </p>
          <p style={styles.text}>
            たとえば、みんなで気になる銘柄についておしゃべりできるような<strong>「かぶちゃん掲示板（仮）」</strong>を作ろうと考えてるの。いろんな人の意見を参考にしながら、自分の考えも書き込めるような場所になるといいな〜って思ってるよ。
          </p>
          <p style={styles.text}>
            それから、<strong>「ニュースを自由に読める機能」</strong>も準備中！今までは見出しだけを分析してたけど、ちゃんと中身を読めるようにして、「このニュースが株価にどう関係しそうか？」を自分でも判断できるようになるといいよね。
          </p>
          <p style={styles.text}>
            あと、これから株を始める人のために、<strong>「初心者向けの学習コンテンツ」</strong>も充実させていくつもりだよ！「そもそもPERって何？」「どんなときに株を買えばいいの？」っていう基本から、かぶちゃんがわかりやすく解説するコンテンツをお届けする予定だよ〜。
          </p>
          <p style={styles.text}>
            他にも、もっと便利に・もっと楽しくなるようなアイデアをいろいろ考え中だから、楽しみにしててね！
          </p>
        </OptionBubble>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100%',
    backgroundColor: '#c4f6f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6rem 2rem 2rem',
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