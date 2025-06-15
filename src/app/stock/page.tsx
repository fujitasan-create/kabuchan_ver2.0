'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function StockPage() {
  return (
    <div style={styles.container}>
      <div style={styles.centerRow}>
        <KabuchanIcon emotion="default" size={400} />
        <OptionBubble
          title="かぶちゃん：株についてだね〜 何が知りたい？"
          options={[
            { label: '・上がるの？下がるの？（銘柄占い）', href: '/forecast' },
            { label: '・グラフが見たい！', href: '/graph' },
            { label: '・今日の市場の様子は？', href: '/news' },
            { label: '・かぶちゃんに相談したい！（かぶチャット）', href: '/chat' },
          ]}
          backLink={true}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#c4f6f9',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
  },
};