/* sophisticated_code.js */

// This code generates an interactive form for a user to fill out and submit.

window.onload = function() {
  createForm();
};

function createForm() {
  var form = document.createElement("form");
  form.setAttribute("id", "myForm");

  // Adding form title
  var title = document.createElement("h1");
  title.appendChild(document.createTextNode("Sophisticated Form"));
  form.appendChild(title);

  // Create Name input field
  var nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.appendChild(document.createTextNode("Name:"));
  form.appendChild(nameLabel);
  var nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  nameInput.addEventListener("change", validateName);
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br"));

  // Create Email input field
  var emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.appendChild(document.createTextNode("Email:"));
  form.appendChild(emailLabel);
  var emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.addEventListener("change", validateEmail);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));

  // Create Password input field
  var passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  passwordLabel.appendChild(document.createTextNode("Password:"));
  form.appendChild(passwordLabel);
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("id", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.addEventListener("change", validatePassword);
  form.appendChild(passwordInput);
  form.appendChild(document.createElement("br"));

  // Create Confirm Password input field
  var confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.setAttribute("for", "confirmPassword");
  confirmPasswordLabel.appendChild(document.createTextNode("Confirm Password:"));
  form.appendChild(confirmPasswordLabel);
  var confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.setAttribute("type", "password");
  confirmPasswordInput.setAttribute("id", "confirmPassword");
  confirmPasswordInput.setAttribute("name", "confirmPassword");
  confirmPasswordInput.addEventListener("change", validateConfirmPassword);
  form.appendChild(confirmPasswordInput);
  form.appendChild(document.createElement("br"));

  // Create Submit button
  var submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Submit");
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.addEventListener("click", validateForm);
  form.appendChild(submitBtn);

  // Append form to the document body
  document.body.appendChild(form);
}

function validateName() {
  var name = document.getElementById("name").value.trim();
  if (name === "" || name.length < 3) {
    alert("Please enter a valid name (minimum 3 characters).");
  }
}

function validateEmail() {
  var email = document.getElementById("email").value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
  }
}

function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
  }
}

function validateForm(e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Additional validations can be added here

  if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  } else {
    alert("Please fill out all the required fields.");
  }
}

// More code can be added here for additional functionality and form processing