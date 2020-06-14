const ul = document.querySelector(".todoList"),
  toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input");

let toDoArr = [];
function handleSubmit(e) {
  e.preventDefault();
  const currentVal = toDoInput.value;
  showToDo(currentVal);
  toDoInput.value = "";
}

function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  ul.removeChild(li);
  const removeToDos = toDoArr.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDoArr = removeToDos;
  localStorage.setItem("todo", JSON.stringify(toDoArr));
}

function showToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  span.classList.add("todoList");
  delBtn.classList.add("delBtn");
  li.classList.add("li");
  const newId = toDoArr.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  ul.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDoArr.push(toDoObj);
  localStorage.setItem("todo", JSON.stringify(toDoArr));
}

function checkLocalStorage() {
  const list = localStorage.getItem("todo");
  if (list !== null) {
    const parseList = JSON.parse(list);
    parseList.forEach(function (toDo) {
      showToDo(toDo.text);
    });
  }
}

function init() {
  checkLocalStorage();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
