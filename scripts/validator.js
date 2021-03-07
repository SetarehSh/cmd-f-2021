// $(document).ready(function (event) {
//   $('form').on('submit', function () {
//     event.preventDefault();
//     var email = $(this).children();
//     console.log(email);
//     alert("hello")
//   })
// })
const form = document.getElementById('registration');

function formValidation() {

}
let password = document.getElementById('password');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let confirmPassword = document.getElementById('confirmPassword')
 
//event listener
form.addEventListener('submit', submit);

//forms
function submit(event) {
  event.preventDefault();
  let check = false;
  if (checkName(firstName)) {
    if (checkName(lastName)) {
      if (validatePassword(password)) {
        location.replace("./dashboard.html");
      }
    }
  }
  console.log("did not pass check")

}

// function checkPW (password) {
//   const passwd = /^[A-Za-z]\w{7,14}$/;
//   if (password.value.match(passwd)) {
//     // alert('correct')
//     console.log(password.value)
//     return true;
//   }
//   else {
//     alert('password should between 6 to 20 characters,contain more than one numeric digit, one uppercase and one lowercase letter')
//     console.log(password.value)
//     return false; 
//   }
// }

function checkName (name) {
  console.log(name.value)
  console.log(name.value.length)
  return name.value.length > 2;

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
  return false;
}


