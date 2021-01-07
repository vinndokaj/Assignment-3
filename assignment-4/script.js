//Assignment 4

function validateForm(){
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let email = document.getElementById('email');
  console.log(typeof(password.value));
  if(password.value == '12345678'){
    document.getElementById('status').innerText = 'Form Status: Complete';
  } else {
    alert('Incorrect password!');
  }
}
