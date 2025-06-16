'use client';

import { useSearchParams } from 'next/navigation';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import '@/app/stock/forecast/result/result.css';

export default function ForecastResultPage() {
  const params = useSearchParams();  // ✅ useSearchParams はここだけでOK
  const name = params.get('name') || '';
  const prediction = params.get('prediction') || '';

  const isUp = prediction === '上がる';
  const emotion = isUp ? 'happy' : 'sad';
  const message = isUp
    ? '明日は上がるかも〜！😆'
    : 'うーん...明日は上がらなそう🥺';

  return (
    <div className="forecast-result-container">
      <div className="forecast-result-row">
        <KabuchanIcon emotion={emotion} size={300} />
        <OptionBubble
          title={<span className="result-title">
            {name}
            <br />
            の予想は・・・
            </span>}
          options={[]}
          backLink={true}
        >
          <p className="forecast-result-message">・{message}</p>
        </OptionBubble>
      </div>
    </div>
  );
}
