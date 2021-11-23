var users = JSON.parse(localStorage.getItem("users"));

if (users === undefined || users === null) {
  users = [];
  localStorage.setItem("users", JSON.stringify(users));
}

var form = document.getElementById("form");
var errorMessage = document.getElementById("errorMessage");

function isInputValid(el) {
  if (el.value === undefined || el.value === null || el.value === "") {
    var errMessage = el.getAttribute("fieldName") + " can't be blank!";
    var errorBlankField = document.createElement("p");
    errorBlankField.classList.add("errorMessage");
    errorBlankField.innerHTML = errMessage;

    insertAfter(el, errorBlankField);

    return false;
  } else if (el.nextSibling !== null) {
    el.parentNode.removeChild(el.nextSibling);
  }

  if (el.id === "email" && !isEmailValid(el)) {
    var errMessage = "Invalid email format!";
    var errorBlankField = document.createElement("p");
    errorBlankField.classList.add("errorMessage");
    errorBlankField.innerHTML = errMessage;

    insertAfter(el, errorBlankField);
    errorMessage.style.display = "none";

    return false;
  } else if (el.nextSibling !== null) {
    el.parentNode.removeChild(el.nextSibling);
  }

  return true;
}

function insertAfter(referenceNode, newNode) {
  if (
    referenceNode.nextSibling === null ||
    referenceNode.nextSibling.classList === undefined
  ) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    errorMessage.style.display = "none";
  } else {
    referenceNode.nextSibling.innerHTML = newNode.innerHTML;
    errorMessage.style.display = "none";
  }
}

function isEmailValid(el) {
  var errMessage = el.getAttribute("fieldName") + " can't be blank!";
  var errorBlankField = document.createElement("p");
  errorBlankField.classList.add("errorMessage");
  errorBlankField.innerHTML = errMessage;

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(el.value).toLowerCase());
}
