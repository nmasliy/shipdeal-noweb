import '../functions/tabs';
import { throttle } from '../functions/throttle';

function mobileTabs() {
  const $phoneImages = document.querySelectorAll('.how__phone-img');
  const isAlreadyMobile = document.querySelector('.how__item .how__phone-img');

  if (window.innerWidth <= 1024 && !isAlreadyMobile) {
    $phoneImages.forEach(($item) => {
      const $parent = document.querySelector(
        `.how__item[data-tabs='${$item.dataset.tabs}']`
      );

      $parent.appendChild($item);
    });
  } else if (window.innerWidth > 1024 && isAlreadyMobile) {
    const $parentDesktop = document.querySelector('.how__phone');

    if (!$parentDesktop.querySelector('.how__phone-img')) {
      $phoneImages.forEach(($item) => {
        $parentDesktop.appendChild($item);
      });
    }
  }
}

mobileTabs();

let mobileTabsThrottle = throttle(mobileTabs);
window.addEventListener('resize', mobileTabsThrottle);
