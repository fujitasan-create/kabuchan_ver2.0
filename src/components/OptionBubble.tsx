import Link from 'next/link';
import styles from './OptionBubble.module.css';

type Option = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  options: Option[];
  backLink?: boolean;
};


export default function OptionBubble({ title, options ,backLink}: Props) {
  return (
    <div className={styles.bubble}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.optionList}>
        {options.map((opt, i) => (
          <li key={i}>
            <Link href={opt.href} className={styles.link}>
              {opt.label}
            </Link>
          </li>
        ))}
      </ul>

       {backLink && (
        <div className={styles.backLink}>
          <Link href="/">← 戻る</Link>
        </div>
      )}
    
    </div>
  );
}