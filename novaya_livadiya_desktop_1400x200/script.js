document.addEventListener("DOMContentLoaded", function(){
  var area=document.querySelector(".click-area");
  if(!area)return;
  area.addEventListener("click", function(event){
    if(typeof event.button==="number" && event.button!==0)return;
    if(typeof window.callClick==="function")window.callClick();
  });
});
