import SimpleModal from '../functions/modals';
(function () {
  const form = document.getElementById('send-excel');
  const modals = new SimpleModal();
  if (form !== null) {
    const lang = form.getAttribute('data-lang');
    const sheet = lang !== null ? '?sheet=' + lang : '' ;

    form.addEventListener("submit", e=> {
      e.preventDefault();
      const submit = e.submitter;
      submit.setAttribute('disabled', true);
      fetch(form.action + sheet, {
        method: "POST",
        body: new FormData(document.getElementById('send-excel')),
      }).then(
        responce => responce.json()
      ).then((html) => {
        submit.setAttribute('disabled', false);
        form.reset();
        modals.close('modal-form');
        setTimeout( () => {
          modals.open('modal-thank');
        }, 300);
      }).catch( e => {
        submit.setAttribute('disabled', false);
        form.reset();
        modals.close('modal-form');
      })
    })
  }

})();
