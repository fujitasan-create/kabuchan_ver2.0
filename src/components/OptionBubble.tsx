'use client';

import Link from 'next/link';
import styles from './OptionBubble.module.css';
import { useRouter } from 'next/navigation';

type Option = {
  label: string;
  href: string;
};

type Props = {
  title: React.ReactNode;
  options: Option[];
  backLink?: boolean;
  children?: React.ReactNode;
};

export default function OptionBubble({ title, options, backLink, children }: Props) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className={styles.bubble}>
      <p className={styles.title}>{title}</p>

      {options.length > 0 && (
        <ul className={styles.optionList}>
          {options.map((opt, i) => (
            <li key={i}>
              <Link href={opt.href} className={styles.link}>
                {opt.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {children && <div className={styles.textContent}>{children}</div>}

      {backLink && (
        <div className={styles.backLink} onClick={handleBack}>
          ← 戻る
        </div>
      )}
    </div>
  );
}
