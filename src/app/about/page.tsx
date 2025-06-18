'use client';

import styles from './about.module.css';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <KabuchanIcon emotion="default" size={400} />
        <OptionBubble
          title="かぶちゃん：かぶちゃんについてだね〜 何が知りたい？"
          options={[
            { label: '・かぶちゃんって何者？', href: '/about/who' },
            { label: '・どんなことができるの？', href: '/about/knowledge' },
            { label: '・今後の機能追加予定は？', href: '/about/roadmap' },
            { label: '・開発者について教えて！', href: '/about/dev' },
          ]}
          backLink={true}
        />
      </div>
    </div>
  );
}