function validatePassword(password) {
  let regexForLettersAndNumbers = /^[a-zA-Z0-9]+$/;
  let regexForTwoDigits = /\d.*\d/;

  let flag = true;

  if(password.length < 6 || password.length > 10)
  {
    console.log("Password must be between 6 and 10 characters");
    flag = false;
  }

  if(!regexForLettersAndNumbers.test(password))
  {
    console.log("Password must consist only of letters and digits");
    flag = false;
  }

  if(!regexForTwoDigits.test(password))
  {
    console.log("Password must have at least 2 digits");
    flag = false;
  }

  if(flag){
    console.log("Password is valid");
  }
}

validatePassword('logIn');
