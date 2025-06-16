import styles from './KabuchanIcon.module.css';

type KabuchanIconProps = {
  emotion?: 'default' | 'happy' | 'littlehappy' | 'sad' | 'littlesad' | 'thinking' | 'thumsup';
  size?: number;
};

export default function KabuchanIcon({ emotion = 'default', size = 180 }: KabuchanIconProps) {
  const imagePath = `/kabuchan/kabuchan_${emotion}_touka.png`;

  return (
    <div className={styles.circleWrapper} style={{ width: size, height: size }}>
      <img src={imagePath} alt="かぶちゃん" className={styles.iconImage} />
    </div>
  );
}