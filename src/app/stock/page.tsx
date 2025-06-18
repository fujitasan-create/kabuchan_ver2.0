'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import styles from './stock.module.css';

export default function StockPage() {
  return (
    <div className={styles.container}>
      <div className={styles.centerRow}>
        <KabuchanIcon emotion="default" size={400} />
        <OptionBubble
          title="かぶちゃん：株についてだね〜 何が知りたい？"
          options={[
            { label: '・上がるの？下がるの？　（銘柄占い）', href: '/stock/forecast' },
            { label: '・グラフが見たい！', href: '/stock/graph' },
            { label: '・今日の市場の様子は？', href: '/stock/senti' },
            { label: '・かぶちゃんに相談したい！（かぶチャット）', href: '/stock/chat' },
          ]}
          backLink={true}
        />
      </div>
    </div>
  );
}