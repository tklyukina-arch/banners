(function(){
  'use strict';
  var area=document.querySelector('.click-area');
  if(!area)return;
  area.addEventListener('click',function(event){
    if(event.button!==undefined&&event.button!==0)return;
    if(typeof window.callClick==='function')window.callClick();
  });
})();
