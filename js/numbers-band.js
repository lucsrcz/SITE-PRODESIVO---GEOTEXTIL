(function(){
  var band=document.querySelector('.numbers-band'), sec=document.querySelector('.numbers');
  if(!band||!sec) return;
  function set(){ sec.style.setProperty('--band-h', band.offsetHeight+'px'); }
  set();
  if('ResizeObserver' in window){ new ResizeObserver(set).observe(band); }
  window.addEventListener('resize', set);
  window.addEventListener('load', set);
})();
