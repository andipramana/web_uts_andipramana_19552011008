function validateLogin() {
  var loginValid = false;
  var isAllInputVAlid = validateAllInput();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (isAllInputVAlid) {
    if (isUserExist(email, password)) {
      localStorage.setItem("isLoggedIn", true);
      form.submit();

      loginValid = true;
    }
  }
}

function validateAllInput() {
  var isAllInputVAlid = true;

  if (!isInputValid(document.getElementById("email"))) {
    isAllInputVAlid = false;
  }

  if (!isInputValid(document.getElementById("password"))) {
    isAllInputVAlid = false;
  }

  return isAllInputVAlid;
}

function isUserExist(email, password) {
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (user.email === email && user.password === password) {
        return true;
      }
    }
  }

  errorMessage.innerHTML = "Invalid email or password!";
  errorMessage.style.display = "block";

  document
    .querySelectorAll(".errorMessage")
    .forEach((e) => e.parentNode.removeChild(e));

  return false;
}
