(function () {
  const $html = document.querySelector('html');
  const $header = document?.querySelector('.header');
  const $menu = document?.querySelector('[data-menu]');
  const $burger = document?.querySelector('[data-burger]');
  const $close = document?.querySelector('[data-menu-close]');
  const $menuItems = document?.querySelectorAll('[data-menu-item]');
  const TRANSITION_DELAY = 400;
  const MOBILE_MENU_BREAKPOINT = 1024;

  let isInit = false;

  const checkScreenWidth = () => {
    // Активируем меню только на экранах <= 1024
    if ($menu && window.innerWidth <= MOBILE_MENU_BREAKPOINT && !isInit) {
      isInit = true;
      $burger.addEventListener('click', toggleMenu);
      $close?.addEventListener('click', closeMenu);
      $menuItems.forEach((el) => {
        el.addEventListener('click', closeMenu);
      });
    } else {
      window.addEventListener('resize', checkScreenWidth);
    }
  };
  checkScreenWidth();

  function openMenu() {
    $menu.style.display = 'flex';
    $burger.setAttribute('aria-expanded', 'true');
    $burger.setAttribute('aria-label', 'Закрыть меню');

    $html.classList.add('disable-scroll');

    setTimeout(function () {
      $menu.classList.add('is-active');
      $burger.classList.add('is-active');
      $header.classList.add('is-active');
    }, 1);
  }

  function closeMenu() {
    $menu.classList.remove('is-active');
    $burger.classList.remove('is-active');
    $header.classList.remove('is-active');
    $burger.setAttribute('aria-expanded', 'false');
    $burger.setAttribute('aria-label', 'Открыть меню');

    $html.classList.remove('disable-scroll');

    setTimeout(function () {
      $menu.style.display = '';
    }, TRANSITION_DELAY);
  }

  function toggleMenu() {
    $menu.classList.contains('is-active') ? closeMenu() : openMenu();
  }
})();
