'use client';

import { useEffect, useState } from 'react';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import './senti.css';

export default function SentimentPage() {
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  const expressionMap = ['sad', 'littlesad', 'default', 'thumsup', 'littlehappy', 'happy'] as const;
  const messageMap = [
  '今日はちょっと空気が悪いかも……気をつけてね。',
  'ややネガティブな雰囲気かも。慎重に見ていこう！',
  '普通よりちょっと悪いかな〜。',
  'まぁまぁ良い感じ！',
  'わりとポジティブだねっ！',
  'すごくいいムードだよ！やる気出ちゃう〜！',
  ];

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const res = await fetch('https://my-api-h54h.onrender.com/sentiment/analyze-yahoo-business');
        const data = await res.json();
        if ('representative_score' in data && typeof data.representative_score === 'number') {
          setScore(data.representative_score);
        } else {
          throw new Error('Invalid response');
        }
      } catch {
        setError(true);
      }
    };

    fetchSentiment();
  }, []);

  return (
    <div className="senti-container">
      {/* 左にかぶちゃん */}
      <KabuchanIcon emotion={score !== null ? expressionMap[score] : 'thinking'} size={350} />

      {/* 右に吹き出し */}
      <OptionBubble title="かぶちゃん：今日の市場の様子をおしえるね！" options={[]} backLink={true}>
        {error ? (
          <p className="senti-error">データの取得に失敗しました…</p>
        ) : score === null ? (
          <p className="senti-loading">データを取得中だよ〜</p>
        ) : (
          <p className="senti-result">
            今日の市場の雰囲気は 
            <br />
            <span className="senti-score">　{score}</span> だよ！(最大5)
            <br />
            {messageMap[score]}
          </p>
        )}
      </OptionBubble>
    </div>
  );
}
