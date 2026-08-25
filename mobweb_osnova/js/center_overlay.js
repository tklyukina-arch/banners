(function () {
  "use strict";

  var MASTER = {
    "Static black rectangle": { left: 150, top: 50, width: 300, height: 300, z: 1 },
    "LogoSensacia svg": { left: 153.6, top: 66.9, width: 196.356, height: 40.152, z: 6 },
    "Text 4": {
      left: 150.0,
      top: 263.02,
      width: 300.0,
      height: 29.6,
      z: 5,
      src: "images/TXT_mstk18xo_005_mliyv3.svg"
    },
    "Text 3": {
      left: 151.54,
      top: 145.14,
      width: 224.3,
      height: 102.72,
      z: 4,
      src: "images/TXT_mstk18xo_006_h9ty3h.svg"
    },
    "Text 2": {
      left: 150.0,
      top: 263.53,
      width: 295.01,
      height: 29.57,
      z: 3,
      src: "images/TXT_mstk18xo_007_sixybp.svg"
    },
    "Text 1": {
      left: 150.0,
      top: 145.65,
      width: 284.88,
      height: 102.79,
      z: 2,
      src: "images/TXT_mstk18xo_008_pcoivs.svg"
    }
  };

  var scheduled = false;
  var observer = null;

  function setElementGeometry(element, config, name) {
    if (!element || !config) return;

    element.style.left = config.left + "px";
    element.style.top = config.top + "px";
    element.style.right = "auto";
    element.style.bottom = "auto";
    element.style.zIndex = String(config.z);
    element.style.pointerEvents = "none";

    var inner = element.querySelector(".el-inner");
    if (inner) {
      inner.style.width = config.width + "px";
      inner.style.height = config.height + "px";
      inner.style.minWidth = config.width + "px";
      inner.style.minHeight = config.height + "px";
      inner.style.transform = "none";
      inner.style.transformOrigin = "left top";
    }

    if (name.indexOf("Text ") === 0) {
      var image = element.querySelector(".el-txt img");
      if (image && config.src) {
        if (image.getAttribute("src") !== config.src) image.setAttribute("src", config.src);
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.display = "block";
      }
    }

    if (name === "Static black rectangle" && inner) {
      inner.style.opacity = "0";
      inner.style.background = "rgb(0, 0, 0)";
    }
  }

  function applyCenteredOverlay() {
    var canvas = document.getElementById("canvas");
    if (!canvas) return;

    var slide = canvas.querySelector(".slide");
    if (!slide) return;

    var elements = {};
    var names = Object.keys(MASTER);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var element = canvas.querySelector('.el[name="' + name + '"]');
      if (!element) return;
      elements[name] = element;
    }

    var overlay = slide.querySelector("#centered-content-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "centered-content-overlay";
      slide.appendChild(overlay);
    }

    overlay.style.position = "absolute";
    overlay.style.left = "50%";
    overlay.style.top = "50%";
    overlay.style.width = "600px";
    overlay.style.height = "400px";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.transformOrigin = "center center";
    overlay.style.zIndex = "1000";
    overlay.style.pointerEvents = "none";
    overlay.style.overflow = "visible";

    names.forEach(function (name) {
      var element = elements[name];
      if (element.parentNode !== overlay) overlay.appendChild(element);
      setElementGeometry(element, MASTER[name], name);
    });
  }

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      applyCenteredOverlay();
    });
  }

  scheduleApply();
  window.addEventListener("resize", scheduleApply);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", scheduleApply);
  }

  var canvas = document.getElementById("canvas");
  if (canvas && window.MutationObserver) {
    observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].type === "childList") {
          scheduleApply();
          break;
        }
      }
    });
    observer.observe(canvas, { childList: true, subtree: true });
  }
})();
