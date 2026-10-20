
"use strict";
(function(){
  var clickArea=document.querySelector('.click-area');
  if(clickArea){
    clickArea.addEventListener('click',function(event){
      if(typeof event.button==='number' && event.button!==0)return;
      if(typeof window.callClick==='function')window.callClick();
    });
  }
  var selectors=['.scene1','.scene2','.scene3','.headline1','.subhead2','.cta2','.button-text2','.disclaimer3'];
  var els=selectors.map(function(s){return document.querySelector(s);});
  if(els.some(function(el){return !el;}))return;
  var sc1=els[0],sc2=els[1],sc3=els[2],title=els[3],subtitle=els[4],btn=els[5],btnText=els[6],legal=els[7];
  var DURATION=14400; // ad1 3.6s, ad2 4.4s, legal 6.4s incl. transitions.
  var start=performance.now();
  function bound(x){return Math.max(0,Math.min(1,x));}
  function ease(a){var t=bound(a);return t*t*(3-2*t);}
  function rise(t,a,b){return ease((t-a)/(b-a));}
  function fall(t,a,b){return 1-rise(t,a,b);}
  function pulse(t,start,end){if(t<start||t>end)return 0;var p=(t-start)/(end-start);return Math.sin(Math.PI*p)*Math.sin(Math.PI*p);}
  function render(now){
    var elapsed=now-start;
    var t=((elapsed%DURATION)+DURATION)%DURATION;
    // Crossfades ensure no blank frame at the cycle boundary.
    var one=t<3600?1:t<4300?fall(t,3600,4300):t<13700?0:rise(t,13700,14400);
    var two=t<3600?0:t<4300?rise(t,3600,4300):t<8000?1:t<8700?fall(t,8000,8700):0;
    var three=t<8000?0:t<8700?rise(t,8000,8700):t<13700?1:fall(t,13700,14400);
    sc1.style.opacity=String(one);
    sc2.style.opacity=String(two);
    sc3.style.opacity=String(three);
    // Gentle 0.7-0.8s easing is inspired by desktop Ozon DEV v1.8.
    // First-load intro is omitted to prevent a blank / flickering first frame.
    title.style.opacity='1';
    subtitle.style.opacity=String(rise(t,3700,4500));
    // Keep glyphs and the white pill in ONE coordinate system throughout both pulses.
    var buttonEntrance=rise(t,4000,4850);
    btn.style.opacity=String(buttonEntrance);
    btnText.style.opacity='1';
    var breathe=pulse(t,5200,5950)+pulse(t,6560,7310);
    btn.style.transform='scale('+(1+0.07*breathe).toFixed(5)+')';
    // Legal copy appears only on frame 3, last in sequence, fades out first.
    var legalAlpha=rise(t,8200,8850)*fall(t,13050,13700);
    legal.style.opacity=String(legalAlpha);
    requestAnimationFrame(render);
  }
  // Static content remains readable if animation setup fails before rAF.
  requestAnimationFrame(render);
})();
