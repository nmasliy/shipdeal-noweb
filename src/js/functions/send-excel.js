import SimpleModal from '../functions/modals';
(function () {
  const form = document.getElementById('send-excel');
  const modals = new SimpleModal();
  if (form !== null) {
    const lang = form.getAttribute('data-lang');
    const sheet = lang !== null ? '?sheet=' + lang : '' ;

    form.addEventListener("submit", e=> {
      e.preventDefault();
      modals.close('modal-form');
      fetch(form.action + sheet, {
        method: "POST",
        body: new FormData(document.getElementById('send-excel')),
      }).then(
        responce => responce.json()
      ).then((html) => {
        form.reset();
        modals.open('modal-thank');
      }).catch( e => {
        form.reset();
        modals.close('modal-form');
      })
    })
  }

})();
