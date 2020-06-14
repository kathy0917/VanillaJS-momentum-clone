const input = document.querySelector(".inputName"),
  form = document.querySelector(".form"),
  username = document.querySelector(".username");

function showUsername(name) {
  username.innerText = `Hello! ${name}`;
}

function AskUsername() {
  form.addEventListener("submit", getUsername);
}

function getUsername(e) {
  e.preventDefault();
  let inputValue = input.value;
  showUsername(inputValue);
  localStorage.setItem("name", inputValue);
}
function checkLocalStorage() {
  const currentName = localStorage.getItem("name");
  if (currentName !== null) {
    showUsername(currentName);
  } else {
    AskUsername();
  }
}
function init() {
  checkLocalStorage();
}

init();
