'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formatted);
    };

    updateTime(); // 初期表示
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer); // クリーンアップ
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
         ホームに戻る
      </Link>
      <div className={styles.clock}>{time}</div>
    </header>
  );
}
