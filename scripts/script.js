// reference for input fields
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const studentIdInput = document.querySelector("#student-id-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// reference for buttons
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// ✅ ป้องกันไม่ให้ใส่อักขระที่ไม่ใช่ตัวเลข
studentIdInput.addEventListener("input", () => {
  studentIdInput.value = studentIdInput.value.replace(/\D/g, "");
  studentIdInput.classList.remove("is-valid", "is-invalid");
});

// reset input state when user types (กลับเป็นสีเทา)
[
  firstNameInput,
  lastNameInput,
  passwordInput,
  passwordConfirmInput,
].forEach((input) => {
  input.oninput = () => {
    input.classList.remove("is-valid", "is-invalid");
  };
});

// submit button click
submitBtn.onclick = () => {
  let isFirstNameOk = false,
    isLastNameOk = false,
    isStudentIdOk = false,
    isPasswordOk = false,
    isConfirmOk = false;

  // validate first name
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // ✅ validate student ID → ต้องเป็นตัวเลข 9 หลักเท่านั้น
  if (/^\d{9}$/.test(studentIdInput.value)) {
    studentIdInput.classList.add("is-valid");
    isStudentIdOk = true;
  } else {
    studentIdInput.classList.add("is-invalid");
  }

  // validate password
  if (passwordInput.value.trim().length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password
  if (
    passwordConfirmInput.value !== passwordInput.value ||
    passwordConfirmInput.value.trim() === ""
  ) {
    passwordConfirmInput.classList.add("is-invalid");
  } else {
    passwordConfirmInput.classList.add("is-valid");
    isConfirmOk = true;
  }

  // check all valid → show alert
  if (
    isFirstNameOk &&
    isLastNameOk &&
    isStudentIdOk &&
    isPasswordOk &&
    isConfirmOk
  ) {
    alert("Registered successfully");
  }
};

// reset button click
resetBtn.onclick = () => {
  document.querySelectorAll(".form-control").forEach((input) => {
    input.value = "";
    input.classList.remove("is-valid", "is-invalid");
  });
};
