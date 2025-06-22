'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import Link from 'next/link';
import './forecast.css';

type StockSuggestion = {
  code: string;
  name: string;
};

export default function ForecastPage() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<StockSuggestion[]>([]);
  const [selected, setSelected] = useState<StockSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // 入力に応じて候補を取得
  useEffect(() => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://my-api-h54h.onrender.com/search/search_suggestions?q=${encodeURIComponent(input)}`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error('検索候補の取得に失敗しました', err);
      }
    };

    fetchSuggestions();
  }, [input]);

  // 候補選択時
  const handleSelect = (item: StockSuggestion) => {
    setSelected(item);
    setInput(`${item.name}（${item.code}）`);
    setSuggestions([]);
  };

  // 予測処理
  const handleForecast = async () => {
    if (!selected) return;

    setIsLoading(true);

    try {
      const res = await fetch(
        `https://my-api-h54h.onrender.com/ml/predict?ticker=${selected.code}`
      );
      const data = await res.json(); // ← { prediction: "上がる", probability: 0.65, ... }

      router.push(
        `/stock/forecast/result?name=${encodeURIComponent(selected.name)}&prediction=${encodeURIComponent(data.prediction)}`
      );
    } catch (err) {
      console.error('予想リクエストに失敗しました', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forecast-container">
      <KabuchanIcon emotion="littlehappy" size={350} />
      <OptionBubble title="銘柄名を入力してね" options={[]} backLink={true}>
        <input
          className="forecast-input"
          type="text"
          placeholder="例：トヨタ自動車"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {suggestions.length > 0 && (
          <ul className="forecast-suggestion">
            {suggestions.map((item, idx) => (
              <li key={idx} onClick={() => handleSelect(item)}>
                {item.name}（{item.code}）
              </li>
            ))}
          </ul>
        )}

        {isLoading ? (
          <p className="loading-message">かぶちゃんが予想中だよ…🔄</p>
        ) : (
          <button className="forecast-button" onClick={handleForecast}>
            予想してもらう！
          </button>
        )}

        <div style={{ marginTop: '12px' }}>
          <Link href="/stock/forecast/what_fc">
          <span style={{ fontSize: '0.9rem', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
            銘柄占いとは？
          </span>
          </Link>
        </div>
      </OptionBubble>
    </div>
  );
}


