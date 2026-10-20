document.addEventListener("DOMContentLoaded",function(){
  var area=document.querySelector(".click-area");
  if(!area)return;
  area.addEventListener("click",function(event){
    if(typeof event.button==="number"&&event.button!==0)return;
    if(typeof window.callClick==="function")window.callClick();
  });
});

/* WebKit-safe subtitle and legal timeline. These two text layers must remain
   readable even if CSS animations fail (their baseline inline opacity is 1).
   Do not attach any extra click/touch handlers here. */
(function () {
  "use strict";
  var subtitle = document.querySelector(".subtitle");
  var legal = document.querySelector(".legal");
  var headline = document.querySelector(".headline");
  if (!subtitle || !legal) return;

  var cycle = 7200; // Exact original DEV v1.5 loop, in milliseconds.
  var started = performance.now();
  var master = null;
  if (headline && typeof headline.getAnimations === "function") {
    var animations = headline.getAnimations();
    for (var i = 0; i < animations.length; i++) {
      if (animations[i].animationName === "reveal-headline") {
        master = animations[i];
        break;
      }
    }
  }

  function fade(t, a, b) {
    if (t <= a) return 0;
    if (t >= b) return 1;
    return (t - a) / (b - a);
  }

  function smoothFade(t, a, b) {
    var x = fade(t, a, b);
    return x * x * (3 - 2 * x);
  }

  function setFrame(now) {
    // Follow the headline's CSS clock when available; fall back to rAF time.
    var elapsed = master && typeof master.currentTime === "number"
      ? master.currentTime : now - started;
    var t = ((elapsed % cycle) + cycle) % cycle;

    // Subtitle v1.0 fading sequence remapped to the unchanged 7.2s loop.
    var sub = t <= 504 ? 0 : (t < 1224 ? smoothFade(t, 504, 1224) :
      (t <= 6480 ? 1 : 1 - smoothFade(t, 6480, cycle)));

    // Legal appears last, and disappears before all other advertising text.
    var leg = t <= 2260 ? 0 : (t < 2860 ? smoothFade(t, 2260, 2860) :
      (t <= 5850 ? 1 : (t < 6450 ? 1 - smoothFade(t, 5850, 6450) : 0)));

    subtitle.style.opacity = String(Math.max(0, Math.min(1, sub)));
    legal.style.opacity = String(Math.max(0, Math.min(1, leg)));
    requestAnimationFrame(setFrame);
  }

  // If script execution is blocked, CSS/HTML keep both lines visible instead
  // of making them disappear as in the previous Safari build.
  requestAnimationFrame(setFrame);
})();
