const logInButton = document.querySelector('.btn-Entrar');
const password = document.querySelector('#password');

// Referencia: https://medium.com/@jezmael/como-validar-os-dados-de-um-formul%C3%A1rio-com-javascript-abdc5a5fba67 && https://www.revista-programar.info/artigos/validacao-de-formularios-em-javascript/
function validateEmail() {
  const email = document.getElementById('email');
  if (email.value === '' || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    alert('Email ou senha inválidos.');
    email.focus();
  } else if (password.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

logInButton.addEventListener('click', validateEmail);

const submitButton = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
function validateSubmitButton() {
  if (submitButton.disabled === true) {
    submitButton.disabled = false;
  } else if (submitButton.disabled === false) {
    submitButton.disabled = true;
  }
}

checkbox.addEventListener('click', validateSubmitButton);

const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

function countChar() {
  counter.innerHTML = 500 - textArea.value.length;
}
countChar();
textArea.addEventListener('keyup', countChar);

const names = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const material = document.querySelectorAll('.subject');
const avaliation = document.querySelectorAll('.note');
const observation = document.querySelector('#textarea');

const resultFullName = document.querySelector('#resultFullName');
const resultEmail = document.querySelector('#resultEmail');
const resultHouse = document.querySelector('#resultHouse');
const resultFamily = document.querySelector('#resultFamily');
const resultMaterial = document.querySelector('#resultMaterial');
const resultAvaliation = document.querySelector('#resultAvaliation');
const resultObservation = document.querySelector('#resultObservation');

function selectedFamily(event) {
  const arrayFamily = [];
  event.forEach((evt) => {
    if (evt.checked) {
      arrayFamily.push(evt.value);
    }
  });
  return arrayFamily.join(', ');
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  resultFullName.innerHTML = `Nome: ${names.value} ${lastName.value}`;
  resultEmail.innerHTML = `Email: ${email.value}`;
  resultHouse.innerHTML = `Casa: ${house.value}`;
  resultFamily.innerHTML = `Família: ${selectedFamily(family)}`;
  resultMaterial.innerHTML = `Matérias: ${selectedFamily(material)}`;
  resultAvaliation.innerHTML = `Avaliação: ${selectedFamily(avaliation)}`;
  resultObservation.innerHTML = `Observações: ${observation.value}`;
});
