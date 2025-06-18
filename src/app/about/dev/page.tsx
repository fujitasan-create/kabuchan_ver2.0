'use client';

import './dev.css';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import Link from 'next/link';

export default function AboutDevPage() {
  return (
    <div className="dev-container">
      <div className="dev-row">
        <KabuchanIcon emotion="thumsup" size={350} />
        <OptionBubble title="開発者について教えて！" options={[]} backLink={true}>
          <p className="dev-text">
            このアプリは、個人開発者によって作られているよ！
            株に関する知識を少しでも楽しく学べるように、日々アップデート中なんだ〜。
          </p>
          <p className="dev-text">
            開発者さんの他の作品も気になる人は、こちらのポートフォリオも見てみてね！
            <br />
            👉{' '}
            <Link
              href="https://fujitasan-create.github.io/portfolio-v2/"
              target="_blank"
              className="dev-link"
            >
              ポートフォリオサイトを見る
            </Link>
          </p>
        </OptionBubble>
      </div>
    </div>
  );
}
