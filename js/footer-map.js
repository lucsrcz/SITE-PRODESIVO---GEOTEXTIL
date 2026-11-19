/* Mini mapa animado do rodapé: 1º clique infla, 2º clique abre a localização no Google Maps; clique fora fecha. */
(function () {
  var root = document.getElementById('footMap');
  if (!root) return;
  var card = root.querySelector('.fmap-card');
  var mapUrl = card.getAttribute('data-map-url');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;

  function setOpen(open) {
    root.classList.toggle('is-open', open);
    card.setAttribute('aria-expanded', String(open));
  }

  function handleActivate() {
    if (!root.classList.contains('is-open')) {
      setOpen(true);
      return;
    }
    if (mapUrl) window.open(mapUrl, '_blank', 'noopener,noreferrer');
  }

  card.addEventListener('click', handleActivate);
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleActivate(); }
    else if (e.key === 'Escape' && root.classList.contains('is-open')) { setOpen(false); }
  });

  document.addEventListener('click', function (e) {
    if (root.classList.contains('is-open') && !root.contains(e.target)) setOpen(false);
  });

  if (reduce || !fine) return;
  var raf = 0, rx = 0, ry = 0;
  function apply() { raf = 0; card.style.setProperty('--rx', rx.toFixed(2) + 'deg'); card.style.setProperty('--ry', ry.toFixed(2) + 'deg'); }
  root.addEventListener('pointermove', function (e) {
    var r = card.getBoundingClientRect();
    var dx = e.clientX - (r.left + r.width / 2);
    var dy = e.clientY - (r.top + r.height / 2);
    ry = Math.max(-1, Math.min(1, dx / 50)) * 8;
    rx = Math.max(-1, Math.min(1, dy / 50)) * -8;
    if (!raf) raf = requestAnimationFrame(apply);
  });
  root.addEventListener('pointerenter', function () { root.classList.add('is-hover'); });
  root.addEventListener('pointerleave', function () { root.classList.remove('is-hover'); rx = 0; ry = 0; if (!raf) raf = requestAnimationFrame(apply); });
})();
