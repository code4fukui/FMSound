# FMSound

- [FM音源テスト](https://code4fukui.github.io/FMSound/index.html)
- [FM音源ESモジュール](FMSound.js)

## usage

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

## demo

- [5平均律](https://code4fukui.github.io/FMSound/piano5.html)
- [6平均律](https://code4fukui.github.io/FMSound/piano6.html)
- [7平均律](https://code4fukui.github.io/FMSound/piano7.html)
- [8平均律](https://code4fukui.github.io/FMSound/piano8.html)
- [9平均律](https://code4fukui.github.io/FMSound/piano9.html)
- [10平均律](https://code4fukui.github.io/FMSound/piano10.html)
- [11平均律](https://code4fukui.github.io/FMSound/piano11.html)
- [12平均律](https://code4fukui.github.io/FMSound/piano12.html)

## blog

https://fukuno.jig.jp/3343

## 出典

- [Web Audio APIでFMシンセを書く - わかるかなフロントエンド](https://m0t0k1w.tumblr.com/post/121737581743/web-audio-api-fm)


