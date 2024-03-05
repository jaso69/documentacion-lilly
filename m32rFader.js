const modal = document.querySelector('#dialogo')
const buttonYes = document.querySelector('#yes')
const buttonNo = document.querySelector('#no')

const start = () => {
  introJs().oncomplete(async () => {
      return new Promise((resolve) => {
        end()
        setInterval(resolve, 500);
      });
  }).onbeforeexit(function () {
    return end();
  }).start()
} 

buttonYes.addEventListener('click', () => { window.location.replace('./m32r.html')})

buttonNo.addEventListener('click', () => {window.location.replace('./index.html')})

document.querySelector('#dialogo').style.display = 'none'

const end = () => {
  document.querySelector('#dialogo').style.display = 'block'
  modal.showModal()
}


start()
