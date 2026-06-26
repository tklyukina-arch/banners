document.addEventListener("DOMContentLoaded", function () {
  const clickArea = document.querySelector(".click-area");

  if (!clickArea) {
    return;
  }

  clickArea.addEventListener("mouseup", function (event) {
    const isLeftButton = event.button === 0;

    if (!isLeftButton) {
      return;
    }

    if (typeof window.callClick === "function") {
      window.callClick();
    }
  });
});

(function () { function onImagesLoaded(container, event) { var preloads = []; preloads.push.apply(preloads, container.getElementsByTagName("img")); preloads.push.apply(preloads, container.getElementsByTagName("lottie-player")); preloads.push.apply(preloads, container.getElementsByTagName("video")); if (preloads.length === 0) { event(); return; } var loaded = preloads.length; var completed = false; var fallbackTimer = setTimeout(function() { complete(); }, 8000); function complete() { if (completed) { return; } completed = true; clearTimeout(fallbackTimer); event(); } function markLoaded() { if (completed) { return; } loaded--; if (loaded <= 0) { complete(); } } function waitForElement(element, events, isLoaded) { var handled = false; function done() { if (handled) { return; } handled = true; for (var j = 0; j < events.length; j++) { element.removeEventListener(events[j], done); } markLoaded(); } if (isLoaded()) { done(); return; } for (var k = 0; k < events.length; k++) { element.addEventListener(events[k], done); } } for (var i = 0; i < preloads.length; i++) { (function(element) { var tag = element.tagName.toLowerCase(); if(tag === "lottie-player") { waitForElement(element, ["ready", "error"], function() { return false; }); } else if(tag === "video") { waitForElement(element, ["loadeddata", "loadedmetadata", "canplay", "error"], function() { return element.readyState >= 2; }); } else if(tag === "img") { waitForElement(element, ["load", "error"], function() { return element.complete; }); } })(preloads[i]); } } var bannerifyStarted = false; function bannerifyStart() { if (bannerifyStarted) { return; } bannerifyStarted = true; var bannerifyContainer = document.getElementById("b_119118"); if (!bannerifyContainer) { return; } function runBannerify() { onImagesLoaded(bannerifyContainer, function() { var elements = document.getElementById("b_119118").getElementsByClassName('js-bnfy'); for (var i=0; i < elements.length; i++) { elements[i].style.display = 'block'; } var playCount = 0; var lastPlay = false; var animationInterval;var exitTimeouts = []; function clearExitTimeouts() { exitTimeouts.forEach(clearTimeout); exitTimeouts = []; } function handleVisibilityChange() { if (document.hidden) { clearInterval(animationInterval); clearExitTimeouts(); } else { replayAnimations(); animationInterval = setInterval(replayAnimations, 10000); } } document.addEventListener("visibilitychange", handleVisibilityChange); function handleExits() { var el_img_119140 = document.getElementById("img_119140"); el_img_119140.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119140.className = ''; void el_img_119140.offsetWidth; el_img_119140.className = "bnfy-exit";
}, 9000); exitTimeouts.push(timeout);
var el_img_119149 = document.getElementById("img_119149"); el_img_119149.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119149.className = ''; void el_img_119149.offsetWidth; el_img_119149.className = "bnfy-exit";
}, 9000); exitTimeouts.push(timeout);
var el_img_119141 = document.getElementById("img_119141"); el_img_119141.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119141.className = ''; void el_img_119141.offsetWidth; el_img_119141.className = "bnfy-exit";
}, 7000); exitTimeouts.push(timeout);
var el_img_119134 = document.getElementById("img_119134"); el_img_119134.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119134.className = ''; void el_img_119134.offsetWidth; el_img_119134.className = "bnfy-exit";
}, 9000); exitTimeouts.push(timeout);
var el_img_119133 = document.getElementById("img_119133"); el_img_119133.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119133.className = ''; void el_img_119133.offsetWidth; el_img_119133.className = "bnfy-exit";
}, 5000); exitTimeouts.push(timeout);
var el_img_119124 = document.getElementById("img_119124"); el_img_119124.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119124.className = ''; void el_img_119124.offsetWidth; el_img_119124.className = "bnfy-exit";
}, 3000); exitTimeouts.push(timeout);
var el_img_119123 = document.getElementById("img_119123"); el_img_119123.className = "bnfy-enter"; var timeout = setTimeout(function() { el_img_119123.className = ''; void el_img_119123.offsetWidth; el_img_119123.className = "bnfy-exit";
}, 5500); exitTimeouts.push(timeout);
var el_img_119118 = document.getElementById("img_119118");
} handleExits(); animationInterval = setInterval(function () {
playCount = playCount + 1;
lastPlay = playCount === 0;
replayAnimations(); }, 10000); function replayAnimations() { var banner = document.getElementById("b_119118"); if(banner) { var elements = banner.children; for (var i = 0; i < elements.length; i++) { if (elements[i] && elements[i].tagName.toLowerCase() !== 'script' && elements[i].tagName.toLowerCase() !== 'style' && elements[i].tagName.toLowerCase() !== 'noscript') { var display = elements[i].style.display; elements[i].style.display = 'none'; void elements[i].offsetWidth; elements[i].style.display = display; } } } handleExits(); } }); } runBannerify(); }bannerifyStart();})();
