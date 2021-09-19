/**
 * 「Web Audio APIでFMシンセを書く - わかるかなフロントエンド」をクラス化
 * https://m0t0k1w.tumblr.com/post/121737581743/web-audio-api-fm
 */
class FMSound {
  ctx;
  play({
    freq = 440,
    mattack = 0, mdecay = 0.5, msustain = 0.3, mrelease = 0.5,
    cattack = 0, cdecay = 0.3, csustain = 0.7, crelease = 0.4,
    mfreqratio = 3.17,
    cfreqratio = 1.0,
    mgain = .6,
    cgain = .99,
  }) {
    const ctx = this.ctx = this.ctx || new AudioContext();
    const modulator = ctx.createOscillator();
    const carrier = ctx.createOscillator();

    const modulatorGain = ctx.createGain();
    const carrierGain = ctx.createGain();
    //const feedbackGain = ctx.createGain();

    modulator.connect(modulatorGain);
    modulatorGain.connect(carrier.frequency);
    carrier.connect(carrierGain);
    carrierGain.connect(ctx.destination);
    //modulator.connect(feedbackGain);
    //feedbackGain.connect(modulator.frequency);

    modulator.type = "sine";
    carrier.type = "sine";
    modulator.frequency.value = mfreqratio * freq;
    carrier.frequency.value = cfreqratio * freq;
    //feedbackGain.gain.value = 0.1;
    modulatorGain.gain.value = mgain * 1024;
    carrierGain.gain.value = cgain;
    modulator.start(0);
    carrier.start(0);

    const now = ctx.currentTime;
    const modulatorRootValue = modulatorGain.gain.value;
    modulatorGain.gain.cancelScheduledValues(0);
    modulatorGain.gain.setValueAtTime(0.0, now);
    modulatorGain.gain.linearRampToValueAtTime(modulatorRootValue, now + mattack);
    modulatorGain.gain.linearRampToValueAtTime(msustain + modulatorRootValue, now + mattack + mdecay);
    const carrierRootValue = carrierGain.gain.value;
    carrierGain.gain.cancelScheduledValues(0);
    carrierGain.gain.setValueAtTime(0.0, now);
    carrierGain.gain.linearRampToValueAtTime(carrierRootValue, now + cattack);
    carrierGain.gain.linearRampToValueAtTime(csustain + carrierRootValue, now + cattack + cdecay);
    return {
      stop: () => {
        const now = ctx.currentTime;
        
        const modulatorRootValue = modulatorGain.gain.value;
        modulatorGain.gain.cancelScheduledValues(0);
        modulatorGain.gain.setValueAtTime(modulatorRootValue, now);
        modulatorGain.gain.linearRampToValueAtTime(0.0, now + mrelease);
    
        const carrierRootValue = carrierGain.gain.value;
        carrierGain.gain.cancelScheduledValues(0);
        carrierGain.gain.setValueAtTime(carrierRootValue, now);
        carrierGain.gain.linearRampToValueAtTime(0.0, now + crelease);
        modulator.stop(now + mrelease);
        carrier.stop(now + mrelease);
      }
    }
  }
};

export { FMSound };
