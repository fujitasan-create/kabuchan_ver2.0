'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const date = String(now.getDate()).padStart(2, '0');
      const timeStr = now.toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const formatted = `${year}/${month}/${date} ${timeStr}`;
      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
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

