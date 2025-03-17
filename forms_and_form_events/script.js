function modify() {
    // Accessing form elements
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    //   Reading and modifying form element's properties
    // Reading
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    console.log(emailValue, passwordValue, "email, password");
    //   modifying
  
    emailInput.value = " email@gmail.com";
    passwordInput.value = " 12345";
  }
  function onInputExample(event) {
    let emailText = document.getElementById("text");
    let inputValue = document.getElementById("displayMsg");
    emailText.textContent = event.target.value;
    inputValue.textContent = emailText.value;
  }
  function onFocusExample() {
    let inputFocus = document.getElementById("focus");
    inputFocus.style.border = "2px solid red";
  }
  
  let emailInputExample = document.getElementById("inputElment");
  let message = document.getElementById("output");
  emailInputExample.addEventListener("blur", () => {
    if (!emailInputExample.value.includes("@")) {
      message.textContent = "please enter a valid email!!";
      message.style.color = "red";
    } else {
      message.textContent = emailInputExample.value;
      message.style.color = "black";
    }
  });


  function formSubmit(event) {
    console.log(event);
    event.preventDefault();
    let emailValue = document.getElementById("email").value;
    console.log(emailValue);
    let userNameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;
    let error_message = document.getElementById("errorMessage");
    let inputValues = document.getElementById("displayData");
  
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue.test(emailPattern)) {
      error_message.textContent = "enter a valid email!";
      return;
    }
    if (
      !usernameRegex.match(userNameValue) ||
      userNameValue.length < 6 ||
      userNameValue > 15
    ) {
      error_message.textContent =
        "invalid username it must be alphanumeric and between 6 to 15 characters!";
      return;
    }
    if (!passwordValue.length > 5 || !passwordValue.length < 16) {
      error_message.textContent = " it must be between 5 to 16 characters!";
      return;
    }
    inputValues.innerHTML = `
    Email: ${emailValue} <br>
    UserName: ${userNameValue} <br>
    password: ${passwordValue} <br>
    `;
  }