(function () {
  var root = document.documentElement;

  // Tema claro/oscuro
  document.getElementById('themeToggle').addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Imprimir / guardar como PDF
  document.getElementById('printBtn').addEventListener('click', function () { window.print(); });

  // Resalta la sección activa en el menú
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('is-active'); });
        var link = byId[entry.target.id];
        if (link) {
          link.classList.add('is-active');
          link.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { navObserver.observe(s); });

    // Aparición suave al hacer scroll
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.card, .tl, .skill, .pubs li, .list-dated li').forEach(function (el) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }
})();
