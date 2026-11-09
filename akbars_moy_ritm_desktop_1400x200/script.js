'use strict';
const clickArea = document.querySelector('.click-area');
if (clickArea) {
  clickArea.addEventListener('click', function (event) {
    if (event.button !== 0) return;
    if (typeof window.callClick === 'function') window.callClick();
  });
}
