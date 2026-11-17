(function(){
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = [].slice.call(document.querySelectorAll('.num-block strong, .indicator strong span.n'));
  els.forEach(function(el){
    var m = el.textContent.match(/^(\d+)(.*)$/);
    if(!m) return;
    var target = parseInt(m[1],10), suffix = m[2];
    function run(){
      if(reduce){ return; }
      var t0 = null, dur = 1300;
      function step(t){ if(t0===null) t0=t; var k=Math.min((t-t0)/dur,1), e=1-Math.pow(1-k,3);
        el.textContent = Math.round(target*e) + suffix; if(k<1) requestAnimationFrame(step); else el.textContent = target + suffix; }
      el.textContent = '0' + suffix; requestAnimationFrame(step);
    }
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting){ io.disconnect(); run(); } }); },{threshold:.4});
      io.observe(el);
    }
  });
})();
