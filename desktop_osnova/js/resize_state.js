(() => {
  let bannerTimeline;
  const createTimeline = gsap.timeline;
  const addEventListener = window.addEventListener;

  gsap.timeline = function (...args) {
    const timeline = createTimeline.apply(this, args);
    bannerTimeline ??= timeline;
    return timeline;
  };

  window.addEventListener = function (type, listener, options) {
    if (type !== "resize") {
      return addEventListener.call(this, type, listener, options);
    }

    const preserveTimeline = function (event) {
      const time = bannerTimeline?.time();
      const paused = bannerTimeline?.paused();
      const result = listener.call(this, event);

      if (bannerTimeline && time != null) {
        bannerTimeline.seek(time, false);
        paused ? bannerTimeline.pause() : bannerTimeline.play();
      }

      return result;
    };

    window.addEventListener = addEventListener;
    return addEventListener.call(this, type, preserveTimeline, options);
  };
})();
