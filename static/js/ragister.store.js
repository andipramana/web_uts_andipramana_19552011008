function storeData() {
  var isAllInputVAlid = validateAllInput();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (isAllInputVAlid) {
    if (!isEmailExist(email)) {
      var user = {
        email: email,
        password: password,
      };

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      form.submit();
    } else {
      errorMessage.innerHTML = "Email already registered!";
      errorMessage.style.display = "block";
    }
  }
}

function validateAllInput() {
  var isAllInputVAlid = true;

  if (!isInputValid(document.getElementById("firstName"))) {
    isAllInputVAlid = false;
  }

  if (!isInputValid(document.getElementById("lastName"))) {
    isAllInputVAlid = false;
  }

  if (!isInputValid(document.getElementById("email"))) {
    isAllInputVAlid = false;
  }

  if (!isInputValid(document.getElementById("password"))) {
    isAllInputVAlid = false;
  }

  return isAllInputVAlid;
}

function isEmailExist(email) {
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (user.email === email) {
        return true;
      }
    }
  }

  return false;
}
