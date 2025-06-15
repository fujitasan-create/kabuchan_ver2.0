'use client';

import { useState, useEffect } from 'react';
import styles from './home.module.css';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';


function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 11) {
    return 'おはよー!!';
  } else if (hour >= 11 && hour < 18) {
    return 'こんにちはー!!';
  } else {
    return 'こんばんはー!!';
  }
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200); // 1.5秒待つ
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.circleWrapper}>
        <img
          src="/kabuchan/kabuchan_thinking_touka.png"
          alt="かぶちゃんロード中"
          className={styles.kabuchan}
        />
      </div>
      <div className={styles.loadingText}>Now Loading...</div>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar}></div>
      </div>
    </div>
  );
}
const greeting = getGreeting();
  // ロード後のホーム画面
  return (
    <div className={styles.container}>
    <div className={styles.centerRow}>
      <KabuchanIcon emotion="default" size={400}/>
      <OptionBubble
        title={`かぶちゃん：${greeting} 今日はなにする？`}
        options={[
          { label: '・株について聞く', href: '/stock' },
          { label: '・かぶちゃんについて聞く', href: '/about' },
          { label: '・その他', href: '/others' },
        ]}
      />
    </div>
    </div>
  );
}