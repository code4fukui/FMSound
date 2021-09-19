# FMSound

- [FM音源テスト](https://code4fukui.github.io/FMSound/index.html)
- [FM音源ESモジュール](FMSound.js)

## usage

```js
import { FMSound } from "./FMSound.js";

const fmsound = new FMSound();
let tone = null;
btnsound.ondown = () => {
  tone = fmsound.play(440);
};
btnsound.onup = () => {
  tone.stop();
};
```

## demo

- [5音平均律](https://code4fukui.github.io/FMSound/piano5.html)
- [7音平均律](https://code4fukui.github.io/FMSound/piano7.html)
- [12音平均律](https://code4fukui.github.io/FMSound/piano12.html)

## blog

https://fukuno.jig.jp/3343

## 出典

- [Web Audio APIでFMシンセを書く - わかるかなフロントエンド](https://m0t0k1w.tumblr.com/post/121737581743/web-audio-api-fm)


