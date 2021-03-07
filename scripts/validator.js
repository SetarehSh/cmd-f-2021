const form = document.getElementById('registration');
const checkbox = document.getElementById('agreeCheckbox');
function formValidation() {

}
let password = document.getElementById('password');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let confirmPassword = document.getElementById('confirmPassword')
let language = document.getElementById('language')
//event listener
checkbox.addEventListener('click', toggleButton)

function toggleButton() {
  let submitBtn = document.getElementById('submitBtn')
  if(submitBtn.style.display === "block") {
    submitBtn.style.display = "none"
  } else {
    submitBtn.style.display = "block"
  }
}
form.addEventListener('submit', submit);

//forms
function submit(event) {
  event.preventDefault();
  if (checkLength(firstName)) {
    if (checkLength(lastName)) {
      if (checkLength (language)) {
        if (validatePassword(password)) {
          location.replace("./dashboard.html");
          return
        }
      }
    }
  }
  alert('Please check your input.')
}

function checkLength (input) {
  if (input.value.length >= 2) {
    return true;
  } else {
    alert('Please enter two or more characters.')
    return false;
  }
}

function  hasNumber(str){
  return str.split("").some((ch) => parseInt(ch))
}

function hasSymbol (str){
  const characters = ["!", "@", "#", "?"];
  for (const character of characters){
    if (str.includes(character)){
      return true;
    }
  }
  return false;
}

function validatePassword(password) {
  if (password.value.length >= 8){
    if(hasNumber(password.value)){
      if(hasSymbol(password.value)){
        return true;
      }
    }
  }
  alert('Your password is invalid. Please set a password contain at least 8 characters, one special letter and one number')
  return false;
}
