'use client';

import './others.css'; 

import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';

export default function OthersPage() {
  return (
    <div className="others-container">
      <div className="others-row">
        <KabuchanIcon emotion="default" size={400} />
        <OptionBubble
          title="かぶちゃん：その他のことも聞いてみる？"
          options={[
            { label: '・お問い合わせはこちら！', href: '/others/contact' },
          ]}
          backLink={true}
        />
      </div>
    </div>
  );
}
