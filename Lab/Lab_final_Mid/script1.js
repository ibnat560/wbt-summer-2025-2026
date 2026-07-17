const form = document.getElementById("myForm");

let wrongAttempts = 0;
let isLocked = false;

// Submit Event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearErrors();

  if (isLocked) {
    document.getElementById("passwordError").innerHTML =
      "Password is locked. Try again after 1 minute.";
    return;
  }

  // Input Values
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let category = document.getElementById("category");
  let reason = document.getElementById("reason");

  let gender = document.querySelector('input[name="gender"]:checked');
  let clubs = document.querySelectorAll('input[name="club"]:checked');

  let valid = true;

  // First Name Validation

  if (firstName.value.trim() == "") {
    showError(firstName, "firstNameError", "First name is required.");
    valid = false;
  } else if (!/^[A-Za-z]+$/.test(firstName.value.trim())) {
    showError(firstName, "firstNameError", "Only alphabets are allowed.");
    valid = false;
  } else {
    showSuccess(firstName);
  }

  // Last Name Validation

  if (lastName.value.trim() == "") {
    showError(lastName, "lastNameError", "Last name is required.");
    valid = false;
  } else if (!/^[A-Za-z]+$/.test(lastName.value.trim())) {
    showError(lastName, "lastNameError", "Only alphabets are allowed.");
    valid = false;
  } else {
    showSuccess(lastName);
  }

  // Email Validation

  if (email.value.trim() == "") {
    showError(email, "emailError", "Email is required.");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    showError(email, "emailError", "Invalid email address.");
    valid = false;
  } else {
    showSuccess(email);
  }

  // Password Validation
  // At least 6 characters,
  // one uppercase, one lowercase,
  // one number

  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (password.value == "") {
    showError(password, "passwordError", "Password is required.");
    valid = false;
  } else if (!passwordPattern.test(password.value)) {
    wrongAttempts++;

    showError(
      password,
      "passwordError",
      "Invalid password. Attempt " + wrongAttempts + " of 3.",
    );

    valid = false;

    if (wrongAttempts >= 3) {
      isLocked = true;

      document.getElementById("passwordError").innerHTML =
        "Too many attempts. Password locked for 1 minute.";

      password.disabled = true;

      setTimeout(function () {
        isLocked = false;
        wrongAttempts = 0;
        password.disabled = false;

        document.getElementById("passwordError").innerHTML =
          "Password unlocked. Try again.";
      }, 60000);
    }
  } else {
    wrongAttempts = 0;
    showSuccess(password);
  }

  // Gender Validation

  if (gender == null) {
    document.getElementById("genderError").innerHTML =
      "Please select your gender.";

    valid = false;
  }

  // Interested Clubs

  if (clubs.length == 0) {
    document.getElementById("clubError").innerHTML =
      "Select at least one club.";

    valid = false;
  }

  // Club Category

  if (category.value == "") {
    showError(category, "categoryError", "Please select a club category.");

    valid = false;
  } else {
    showSuccess(category);
  }

  // Reason Validation

  if (reason.value.trim() == "") {
    showError(reason, "reasonError", "Reason is required.");

    valid = false;
  } else if (reason.value.trim().length < 20) {
    showError(reason, "reasonError", "Reason must be at least 20 characters.");

    valid = false;
  } else {
    showSuccess(reason);
  }

  // Success

  if (valid) {
    alert("Registration Successful!");

    form.reset();

    clearErrors();
  }
});

// Functions

function showError(input, errorId, message) {
  input.classList.add("errorBorder");
  input.classList.remove("successBorder");

  document.getElementById(errorId).innerHTML = message;
}

function showSuccess(input) {
  input.classList.remove("errorBorder");
  input.classList.add("successBorder");
}

function clearErrors() {
  let errors = document.querySelectorAll(".error");

  errors.forEach(function (item) {
    item.innerHTML = "";
  });

  let fields = document.querySelectorAll("input, select, textarea");

  fields.forEach(function (field) {
    field.classList.remove("errorBorder");
    field.classList.remove("successBorder");
  });
}
