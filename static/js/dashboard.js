if (localStorage.getItem("isLoggedIn") == undefined) {
  window.location.replace("index.html");
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.replace("index.html");
}
