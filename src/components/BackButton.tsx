'use client';
import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <button className={styles.backButton} onClick={handleBack}>
      ← 戻る
    </button>
  );
}
