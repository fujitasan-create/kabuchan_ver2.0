'use client';

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <KabuchanIcon emotion="default" size={400} />
        <OptionBubble
          title="かぶちゃん：かぶちゃんについてだね〜 何が知りたい？"
          options={[
            { label: '・かぶちゃんって何者？', href: '/about/who' },
            { label: '・どんなことを知ってるの？', href: '/about/knowledge' },
            { label: '・今後の機能追加予定は？', href: '/about/roadmap' },
            { label: '・開発者について教えて！', href: '/about/dev' },
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
