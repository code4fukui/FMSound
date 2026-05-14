# FMSound

FMSoundは、Web Audio APIを使用してFM（周波数変調）シンセサイザーの音を生成するJavaScriptライブラリです。

## デモ
- [FM Sound Test](https://code4fukui.github.io/FMSound/index.html)
- さまざまな平均律のデモ: [5音](https://code4fukui.github.io/FMSound/piano5.html)、[6音](https://code4fukui.github.io/FMSound/piano6.html)、[7音](https://code4fukui.github.io/FMSound/piano7.html)、[8音](https://code4fukui.github.io/FMSound/piano8.html)、[9音](https://code4fukui.github.io/FMSound/piano9.html)、[10音](https://code4fukui.github.io/FMSound/piano10.html)、[11音](https://code4fukui.github.io/FMSound/piano11.html)、[12音](https://code4fukui.github.io/FMSound/piano12.html)

## 特徴
- Web Audio APIを使用したFM音源の合成
- 周波数比やゲインなど、モジュレーターとキャリアのオシレーターのパラメーターをカスタマイズ可能
- モジュレーターとキャリア信号のエンベロープ制御
- さまざまな平均律スケールのデモ

## 使い方
FMSoundライブラリを使用するには、`FMSound`クラスをインポートして新しいインスタンスを作成します。

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
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
