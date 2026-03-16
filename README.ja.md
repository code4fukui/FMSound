# FMSound

FMSound は、Web Audio APIを使ってFM (Frequency Modulation) 音源を作成できるJavaScriptライブラリです。

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
- FM音源の生成
- 任意の周波数でFM音源を出力
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