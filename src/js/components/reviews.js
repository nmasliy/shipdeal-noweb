const $reviewLinks = document.querySelectorAll('.reviews__link');

$reviewLinks.forEach($item => {
  $item.addEventListener('click', function(e) {
    const $box = $item.closest('.reviews__box');
    const showText = $item.dataset.show;
    const hideText = $item.dataset.hide;

    e.preventDefault();

    if ($box.classList.contains('is-expanded')) {
      $box.classList.remove('is-expanded');
      $item.textContent = showText;
    } else {
      $box.classList.add('is-expanded');
      $item.textContent = hideText;
    }
  })
})
