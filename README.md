# FMSound

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

FMSound is a JavaScript library that allows you to create FM (Frequency Modulation) synthesizer sounds using the Web Audio API.

## Demo
- [FM Sound Test](https://code4fukui.github.io/FMSound/index.html)
- Demos with different equal temperaments: [5-tone](https://code4fukui.github.io/FMSound/piano5.html), [6-tone](https://code4fukui.github.io/FMSound/piano6.html), [7-tone](https://code4fukui.github.io/FMSound/piano7.html), [8-tone](https://code4fukui.github.io/FMSound/piano8.html), [9-tone](https://code4fukui.github.io/FMSound/piano9.html), [10-tone](https://code4fukui.github.io/FMSound/piano10.html), [11-tone](https://code4fukui.github.io/FMSound/piano11.html), [12-tone](https://code4fukui.github.io/FMSound/piano12.html)

## Features
- FM sound synthesis using the Web Audio API
- Customizable parameters for the modulator and carrier oscillators, including frequency ratios and gains
- Envelope control for the modulator and carrier signals
- Demos showcasing different equal temperament scales

## Usage
To use the FMSound library, import the `FMSound` class and create a new instance:

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

## License
This project is licensed under the MIT License.