//Assignment 4

//q1
function button1(){
  let text = document.getElementById('fight');
  text.innerText = "I'm right!"
}
function button2(){
  let text = document.getElementById('fight');
  text.innerText = "No, I'm right!"
}

//q2
// let text = document.getElementById('hover');
// text.addEventListener("mouseenter", function(event){
//   alert('Hey, I told you not to hover over me!');
// });

//q4
function validateForm(){

  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let email = document.getElementById('email');

  //console.log('attempting to validate password');
  if(password.value == '12345678'){
    document.getElementById('status').innerText = 'Form Status: Complete';
    //console.log('valid form submission');
  } else {
    alert('Incorrect password!');
  }
}
