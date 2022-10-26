function initSelect($select) {
  const $current = $select.querySelector('.app-select__current');
  const $currentValue = $current.querySelector('.app-select__value');

  document.body.addEventListener('click', function (e) {
    const $currentSelect = e.target.closest(`#${$select.id}`);

    if ($currentSelect && !$select.classList.contains('active')) {
      // Клик по закрытому селекту
      $select.classList.add('active');
    } else if ($currentSelect && e.target.closest('.app-select__option')) {
      $select.classList.remove('active');
    } else {
      // Клик мимо селекта
      $select.classList.remove('active');
    }
  });
}

initSelect(document.querySelector('#select-languages'))
