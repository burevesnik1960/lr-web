function validateName(){
  var x = document.forms["mainForm"]["name"].value;
  var letters = /^[A-Za-zА-Яа-я]+$/;
  if (letters.test(x)) {
    document.getElementById('na').innerHTML = '';
    return true;
  } else {
    document.getElementById('na').innerHTML = 'Тільки латиниця і кирилиця';
    return false;
  }
}

function validateEmail(){
  var x = document.forms["mainForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    document.getElementById('em').innerHTML = 'Некоректна пошта';
    return false;
  } else {
    document.getElementById('em').innerHTML = '';
    return true;
  }
}

function validatePhone(){
  var x = document.forms["mainForm"]["phone"].value;
  var numbers = /^[\d\(\)\ - +]{12,14}\d$/;
    if (numbers.test(x)) {
      document.getElementById('ph').innerHTML = '';
        return true;
    } else {
    document.getElementById('ph').innerHTML = 'Некоректний телефон';
    return false;
  }
}

function messageLength(){
  var x = document.forms["mainForm"]["message"].value;
  messageLen = x.length;
  if (messageLen > 0){
  document.getElementById('mg').innerHTML = 'Довжина повідомлення - ' + messageLen;
return true;
} else{
  document.getElementById('mg').innerHTML = '';
    return false;
  }
}

function checkAll(){
  if(validateEmail() && validateName() && validatePhone()) return true;
  else return alert("Некоректне введення даних у поля");
}