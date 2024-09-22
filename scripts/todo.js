let todoArray = [];

function onClickStrikeThrough(event) {
  event.target.classList.toggle("strikethrough");
}

function paintTodo(newTodo) {
  const todoList = document.querySelector(".todo-list");
  const listTag = document.createElement("li");
  const spanTag = document.createElement("span");
  const btnTag = document.createElement("button");

  listTag.id = newTodo["id"];
  spanTag.addEventListener("click", onClickStrikeThrough);
  spanTag.innerText = newTodo["todo"];
  listTag.appendChild(spanTag);
  btnTag.innerText = "❌";
  btnTag.classList.add("todoBtn");
  btnTag.addEventListener("click", onClickDeleteTodo);
  listTag.appendChild(btnTag);
  todoList.appendChild(listTag);

  todoArray.push({ id: newTodo["id"], todo: newTodo["todo"] });
  return JSON.stringify(todoArray);
}

function paintTodoHistory() {
  const history = JSON.parse(localStorage.getItem("todos"));

  if (history) {
    history.forEach((element) => {
      todo = paintTodo(element);
      localStorage.setItem("todos", todo);
    });
  }
}

paintTodoHistory();
const formTodo = document.querySelector(".todo-list__form");

function onSubmitAddList(event) {
  const inputTodo = formTodo.querySelector("input");
  const inputValue = inputTodo.value;

  event.preventDefault();
  inputTodo.value = "";
  todo = paintTodo({ id: Date.now(), todo: inputValue });
  localStorage.setItem("todos", todo);
}

formTodo.addEventListener("submit", onSubmitAddList);

function onClickDeleteTodo(event) {
  const todoList = document.querySelector(".todo-list");
  const deleteTag = event.target.parentNode;

  todoList.removeChild(deleteTag);
  todoArray = todoArray.filter(
    (element) => element["id"] !== parseInt(event.target.parentNode.id)
  );
  localStorage.setItem("todos", JSON.stringify(todoArray));
}
