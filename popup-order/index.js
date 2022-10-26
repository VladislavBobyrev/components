
// Popup
const popup = document.querySelector('.popup')
const popupBackground = document.querySelector('.popup-background')
const popupBtn = document.querySelector('.popup__btn')
function popupOpen() {
   popup.classList.add('active')
}

function popupClose() {
   popup.classList.remove('active')
}

popupBtn.addEventListener('click', popupClose)
popupBackground.addEventListener('click', popupClose)