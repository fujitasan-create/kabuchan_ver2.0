'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import KabuchanIcon from '@/components/KabuchanIcon';
import OptionBubble from '@/components/OptionBubble';
import './graph.css';

const TECHNICAL_OPTIONS = ["RSI", "MACD", "SMA", "EMA", "BBANDS"];
const GRAPH_TYPES = ["line", "candle"];

export default function GraphPage() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<{ code: string; name: string }[]>([]);
  const [selected, setSelected] = useState<{ code: string; name: string } | null>(null);
  const [checkedIndicators, setCheckedIndicators] = useState<string[]>([]);
  const [graphType, setGraphType] = useState("line");
  const [period, setPeriod] = useState("1y");

  const router = useRouter();

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

  const handleSelect = (item: { code: string; name: string }) => {
    setSelected(item);
    setInput(`${item.name}（${item.code}）`);
    setSuggestions([]);
  };

  const toggleIndicator = (indicator: string) => {
    setCheckedIndicators((prev) => {
      if (prev.includes(indicator)) {
        return prev.filter((i) => i !== indicator);
      } else if (prev.length < 3) {
        return [...prev, indicator];
      } else {
        alert("テクニカル指標は最大3つまでです。");
        return prev;
      }
    });
  };

  const handleSubmit = () => {
    if (!selected) return;
    const params = new URLSearchParams({
    ticker: selected.code,
    graphType,
    period,
    });

// indicators を1つずつ追加
    checkedIndicators.forEach((indicator) => {
    params.append("indicators", indicator);
    });

router.push(`/stock/graph/display?${params.toString()}`);
  };

  return (
    <div className="forecast-container">
      <KabuchanIcon emotion="default" size={350} />
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

        <div className="checkboxGroup">
          {TECHNICAL_OPTIONS.map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={checkedIndicators.includes(opt)}
                onChange={() => toggleIndicator(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        <div className="periodSelect">
        {[
          { label: "5日", value: "5d" },
          { label: "1か月", value: "1mo" },
          { label: "半年", value: "6mo" },
          { label: "1年", value: "1y" },
          { label: "2年", value: "2y" },
          { label: "5年", value: "5y" },
          ].map((option) => (
          <label key={option.value}>
              <input
                type="radio"
                name="period"
                checked={period === option.value}
                onChange={() => setPeriod(option.value)}
                />
          {option.label}
          </label>
          ))}
        </div>


        <div className="graphTypeSelect">
          {GRAPH_TYPES.map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="graphType"
                checked={graphType === type}
                onChange={() => setGraphType(type)}
              />
              {type === "line" ? "線グラフ" : "ローソク足"}
            </label>
          ))}
        </div>

        <button className="forecast-button" onClick={handleSubmit}>
          グラフを表示！
        </button>
      </OptionBubble>
    </div>
  );
}
