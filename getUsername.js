const input = document.querySelector(".inputName"),
  form = document.querySelector(".form"),
  username = document.querySelector(".username");

function showUsername(name) {
  form.classList.remove("showing");
  username.classList.add("showing");
  username.innerText = `Hello! ${name}`;
}

function AskUsername() {
  form.classList.add("showing");
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
