import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
    <div className={styles.centerRow}>
      <img
        src="/kabuchan/kabuchan_thinking_touka.png"
        alt="かぶちゃんロード中"
        width={200}
        height={200}
      />
      <div className={styles.loadingText}>Now Loading...</div>
    </div>
    </div>
  );
}