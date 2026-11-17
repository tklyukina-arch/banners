document.querySelector('.click-area').addEventListener('click',function(evt){if(evt.button!==undefined && evt.button!==0)return;if(typeof window.callClick==='function')window.callClick();});
