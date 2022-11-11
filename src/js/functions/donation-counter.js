(function () {
  const counterBlock = document.querySelector('.bonus__counter');
  const urlSheet = 'https://sheetdb.io/api/v1/q2g36e1bxm9mz';

  fetch(urlSheet + '?limit=2', {
    method: "GET",
  }).then(
    responce => responce.json()
  ).then((data) => {
    if (data && data[0] && "bonus" in data[0]) {
      counterBlock.innerText = data[0].bonus
      counterBlock.classList.remove('loader')
    } else {
      console.error('Missing value with key "bonus" in google table');
    }
  }).catch( e => {
    console.error('ERROR CONNECT', e)
  })
})();
