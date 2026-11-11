(function () {
  document.querySelectorAll('.thought-gallery-shell').forEach(function (shell) {
    var track = shell.querySelector('.thought-gallery');
    var prev = shell.querySelector('.gallery-prev');
    var next = shell.querySelector('.gallery-next');
    function update() {
      prev.hidden = track.scrollLeft <= 2;
      next.hidden = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    }
    function move(direction) {
      var step = track.querySelector('a').getBoundingClientRect().width + 8;
      track.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
    prev.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });
    track.addEventListener('scroll', update, { passive: true });
    track.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
      }
    });
    track.querySelectorAll('img').forEach(function (img) { img.addEventListener('load', update); });
    if (window.ResizeObserver) new ResizeObserver(update).observe(track);
    else window.addEventListener('resize', update);
    update();
  });
})();
