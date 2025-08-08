"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import KabuchanIcon from "@/components/KabuchanIcon";
import OptionBubble from "@/components/OptionBubble";
import "./display.css";

export default function GraphDisplayPage() {
  const params = useSearchParams();
  const ticker = params.get("ticker");
  const indicators = params.getAll("indicators");
  const graphType = params.get("graphType") || "line";
  const period = params.get("period") || "1y";

  const [imageUrl, setImageUrl] = useState<string>("");
  const [info, setInfo] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!ticker) return;

    const fetchGraph = async () => {
      const url = new URL("https://my-api-h54h.onrender.com/plot/plot");
      url.searchParams.append("ticker", ticker);
      url.searchParams.append("graphType", graphType);
      url.searchParams.append("period", period);
      indicators.forEach((i) => url.searchParams.append("indicators", i));
      setImageUrl(url.toString());
    };

    const fetchInfo = async () => {
      try {
        const res = await fetch(
          `https://my-api-h54h.onrender.com/graph/info?ticker=${ticker}`
        );
        const data = await res.json();
        setInfo(data);
      } catch (err) {
        console.error("銘柄情報の取得に失敗しました", err);
      }
    };

    fetchGraph();
    fetchInfo();
  }, [ticker, indicators, graphType]);

  return (
    <div className="graph-display-container">
      <KabuchanIcon emotion="happy" size={200} />
      <div className="graph-content">
        <OptionBubble title={"グラフと銘柄情報だよ〜！"} options={[]} backLink={true}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="株価グラフ"
              width={1000}
              height={500}
              className="graph-image"
            />
          )}
          <div className="stock-info">
            <table>
              <tbody>
                {Object.entries(info).map(([key, value], i) => (
                  <tr className="stock-info-row" key={i}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </OptionBubble>
      </div>
    </div>
  );
}

