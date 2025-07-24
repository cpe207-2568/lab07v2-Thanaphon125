
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input"); 
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");


const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");


function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}


[
  firstNameInput,
  lastNameInput,
  emailInput, 
  passwordInput,
  passwordConfirmInput,
].forEach((input) => {
  input.oninput = () => {
    input.classList.remove("is-valid", "is-invalid");
  };
});


submitBtn.onclick = () => {
  let isFirstNameOk = false,
    isLastNameOk = false,
    isEmailOk = false,
    isPasswordOk = false,
    isConfirmOk = false;

  
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  
  if (!validateEmail(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  
  if (passwordInput.value.trim().length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  
  if (
    passwordConfirmInput.value !== passwordInput.value ||
    passwordConfirmInput.value.trim() === ""
  ) {
    passwordConfirmInput.classList.add("is-invalid");
  } else {
    passwordConfirmInput.classList.add("is-valid");
    isConfirmOk = true;
  }

  
  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isConfirmOk
  ) {
    alert("Registered successfully");
  }
};


resetBtn.onclick = () => {
  document.querySelectorAll(".form-control").forEach((input) => {
    input.value = "";
    input.classList.remove("is-valid", "is-invalid");
  });
};
