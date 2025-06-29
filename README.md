# 📈 株価分析アプリ「かぶちゃん」ver.2.0

![kabuchan-logo](./public/kabuchan/logo.png)  
投資初心者でも楽しく使える、ゆるキャラAI「かぶちゃん」による株価予測Webアプリです。

---

##  概要

「かぶちゃん」は、銘柄コードを入力するだけで、  
機械学習モデルにより**翌営業日の株価が上昇する確率**を予測してくれるアプリです。

予測結果に応じて、キャラクター「かぶちゃん」の表情や吹き出しが変化し、  
グラフやメッセージを通して視覚的に楽しく情報が得られるようになっています。

---

##  主な機能

-  銘柄検索（予測補完付き）
-  株価グラフ表示（ローソク足／ライン、テクニカル指標選択可）
-  機械学習による株価上昇確率の予測（GradientBoostingClassifier）
-  感情スコアに応じた「かぶちゃん」の表情変化（ニュース分析）
-  OpenAIと連携したAIチャット機能（開発中）
-  お問い合わせフォーム（FastAPI＋PostgreSQL）

---

##  使用技術

### フロントエンド
- [Next.js](https://nextjs.org/)
- TypeScript / CSS Modules


### バックエンド（FastAPI）
- `FastAPI` / `uvicorn`
- `yfinance`, `pandas`, `numpy`
- `scikit-learn`, `matplotlib`, `mplfinance`
- `Mecab`

### インフラ・デプロイ
- [Render](https://render.com/)（API・DBホスティング）
- AWS（S3, CloudFront, Route53）
- PostgreSQL（問い合わせフォームDB）


---

## デプロイ先（公開中）

-  Webアプリ本体: [https://www.kabuchan-app.click](https://www.kabuchan-app.click)

※全てのAPIはRender上でホスティングされています。

---

##  開発経緯

ver.1.0ではフロントエンドとバックエンドが一体化した構成で、保守性や拡張性に課題がありました。  
今回のver.2.0ではAPI化とフロント分離により、機能の追加やスマホアプリへの展開も見据えた構成に刷新しました。

---

##  今後の予定

- React Nativeでのスマホアプリ版リリース
- 有料ユーザー向けに高精度モデル（GPT-4など）の導入
- 匿名掲示板機能の追加（投資意見の共有）
- LINE通知連携やアラート機能の追加

---
