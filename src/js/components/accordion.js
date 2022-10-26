const $triggers = document.querySelectorAll('[data-spoiler-trigger]');

if ($triggers.length > 0) {
  $triggers.forEach(($trigger) => {
    $trigger.addEventListener('click', function () {
      $trigger.closest('[data-spoiler-item]').classList.toggle('is-active');
    });
  });
}
