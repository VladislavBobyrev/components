
// Обработка формы заказов
const checkInput = document.querySelector('.check__input')
const buttonOrderSubmit =  document.querySelector('.order-submit')
const buttonCertificateSubmit = document.querySelector('.certificate-submit')

// проверяем чек политики конфиденциальность
checkInput.addEventListener('click',() =>{ 
  if(checkInput.checked == true){
    buttonOrderSubmit.disabled = false
  }
  else{
    buttonOrderSubmit.disabled = true
  }
})

// собираем данные в json
buttonOrderSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  // Находим значения инпутов
  const [name, tel, info] = Array.from(document.querySelectorAll('.order-input')).map(el => el.value)
  const person = { type: 'order', name, tel, info }

  console.log(`JSON данные для бэка: ${JSON.stringify(person)}`)
  // Отчистка формы
  document.querySelectorAll('.order-input').forEach(item => item.value = '')
  popupOpen()
})
buttonCertificateSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  // Находим значения инпутов
  const [tel, name] = Array.from(document.querySelectorAll('.certificate-input')).map(el => el.value)
  const person = { type: 'certificate', tel, name,}

  console.log(`JSON данные для бэка: ${JSON.stringify(person)}`)
  // Отчистка формы
  document.querySelectorAll('.certificate-input').forEach(item => item.value = '')
  popupOpen()
})