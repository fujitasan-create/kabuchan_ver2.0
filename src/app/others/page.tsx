'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function OthersPage() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <KabuchanIcon emotion="default" size={400} />
        <OptionBubble
          title="かぶちゃん：その他のことも聞いてみる？"
          options={[
            { label: '・お問い合わせはこちら！', href: '/others/contact' },
          ]}
          backLink={true}
        />
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
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
  },
};
