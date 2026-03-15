# FMSound

「Web Audio APIでFMシンセを書く」をJavaScriptライブラリ化したものです。FMサウンドを生成できます。

## デモ

- [5平均律](https://code4fukui.github.io/FMSound/piano5.html)
- [6平均律](https://code4fukui.github.io/FMSound/piano6.html)
- [7平均律](https://code4fukui.github.io/FMSound/piano7.html)
- [8平均律](https://code4fukui.github.io/FMSound/piano8.html)
- [9平均律](https://code4fukui.github.io/FMSound/piano9.html)
- [10平均律](https://code4fukui.github.io/FMSound/piano10.html)
- [11平均律](https://code4fukui.github.io/FMSound/piano11.html)
- [12平均律](https://code4fukui.github.io/FMSound/piano12.html)

## 機能

- FMサウンドの生成
- 任意の周波数でFMサウンドを出力
- アタック/ディケイ/サスティン/リリース機能

## 使い方

```js
import { FMSound } from "./FMSound.js";

const fmsound = new FMSound();
let tone = null;
btnsound.ondown = () => {
  tone = fmsound.play({ freq: 440 });
};
btnsound.onup = () => {
  tone.stop();
};
```

## ライセンス

MIT License