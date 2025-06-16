'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import Link from 'next/link';

export default function AboutDevPage() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <KabuchanIcon emotion="thumsup" size={350} />
        <OptionBubble title="開発者について教えて！" options={[]} backLink={true}>
          <p style={styles.text}>
            このアプリは、個人開発者によって作られているよ！
            株に関する知識を少しでも楽しく学べるように、日々アップデート中なんだ〜。
          </p>
          <p style={styles.text}>
            開発者さんの他の作品も気になる人は、こちらのポートフォリオも見てみてね！
            <br />
            👉{' '}
            <Link
              href="https://fujitasan-create.github.io/portfolio-v2/"
              target="_blank"
              style={{ fontWeight: 'bold', color: '#0070f3', textDecoration: 'underline' }}
            >
              ポートフォリオサイトを見る
            </Link>
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
