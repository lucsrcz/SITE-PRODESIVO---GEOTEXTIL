(function () {
  var tries = 0;
  (function wait() {
    if (document.getElementById('solCarousel')) return init();
    if (++tries < 80) setTimeout(wait, 50);
  })();
  function init() {
  var car = document.getElementById('solCarousel');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SPEED = 38; // px por segundo
  var rows = [].slice.call(car.querySelectorAll('.sol-row')).map(function (row) {
    var track = row.querySelector('.sol-track');
    return { row: row, track: track, dir: parseFloat(row.getAttribute('data-dir')) || -1, x: 0, L: 1, vel: 0, drag: false, hover: false, lastX: 0, lastT: 0, resumeAt: 0 };
  });
  function measure() { rows.forEach(function (r) { r.L = r.track.scrollWidth / 3 || 1; if (r.dir > 0 && r.x === 0) r.x = -r.L; }); }
  function norm(r) { var m = r.x % r.L; r.x = m - r.L; }
  function paint(r) { r.track.style.transform = 'translate3d(' + r.x.toFixed(2) + 'px,0,0)'; }
  measure(); rows.forEach(function (r) { if (r.dir < 0) r.x = -r.L * 0.0 - 1; norm(r); paint(r); });
  if ('ResizeObserver' in window) new ResizeObserver(function () { measure(); rows.forEach(function (r) { norm(r); paint(r); }); }).observe(car);
  window.addEventListener('load', function () { measure(); });

  rows.forEach(function (r) {
    var row = r.row;
    row.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      r.drag = true; r.moved = 0; r.vel = 0; r.lastX = e.clientX; r.lastT = performance.now(); row.classList.add('dragging');
      try { row.setPointerCapture(e.pointerId); } catch (_) {}
    });
    row.addEventListener('pointermove', function (e) {
      if (!r.drag) return;
      var now = performance.now(), dx = e.clientX - r.lastX, dt = Math.max(now - r.lastT, 1);
      r.moved += Math.abs(dx); r.x += dx; r.vel = dx / dt * 1000; r.lastX = e.clientX; r.lastT = now; norm(r); paint(r);
    });
    function end(e) { if (!r.drag) return; r.drag = false; row.classList.remove('dragging'); r.resumeAt = performance.now() + 900; try { row.releasePointerCapture(e.pointerId); } catch (_) {} }
    row.addEventListener('pointerup', end); row.addEventListener('pointercancel', end);
    row.addEventListener('dragstart', function (e) { e.preventDefault(); });
  });

  car.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') rows.forEach(function (r) { r.hover = true; }); });
  car.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') rows.forEach(function (r) { r.hover = false; }); });
  car.addEventListener('focusin', function () { rows.forEach(function (r) { r.hover = true; }); });
  car.addEventListener('focusout', function (e) { if (!car.contains(e.relatedTarget)) rows.forEach(function (r) { r.hover = false; }); });

  var visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0, rootMargin: '250px 0px' }).observe(car);
  var last = performance.now();
  function tick(t) {
    var dt = Math.min((t - last) / 1000, .05); last = t;
    if (visible) rows.forEach(function (r) {
      if (r.drag) return;
      if (Math.abs(r.vel) > 5) { r.x += r.vel * dt; r.vel *= Math.pow(.04, dt); norm(r); paint(r); return; }
      r.vel = 0;
      if (reduce || r.hover || t < r.resumeAt) return;
      r.x += r.dir * SPEED * dt; norm(r); paint(r);
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  }
})();
