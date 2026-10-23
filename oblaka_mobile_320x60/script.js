(function(){
  'use strict';
  var clickArea = document.querySelector('.click-area');
  if(!clickArea) return;
  clickArea.addEventListener('click', function(){
    if(typeof window.callClick === 'function') window.callClick();
  });
})();
