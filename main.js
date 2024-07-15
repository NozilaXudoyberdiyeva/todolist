const form = document.querySelector("form");
const addInput = document.querySelector("input");
const addBtn = document.querySelector("button");
const ul = document.querySelector(".todo-list");

const todoList = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
console.log(todoList);

const pushTodo = (todo) => {
  todoList.push(todo);
  localStorage.setItem("todos", JSON.stringify(todoList));
  location.reload();
  addInput.value = "";
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const todo = addInput.value;
  pushTodo(todo);
});

todoList.map((value, index) => {
  const li = document.createElement("li");
  const n = document.createElement("p");
  const p = document.createElement("p");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.name = "todo";
  checkBox.classList.add("checkbox");

  li.classList.add("todo-item");
  li.appendChild(checkBox);
  n.textContent = index + 1 + ".";
  p.textContent = value;
  li.appendChild(n);
  li.appendChild(p);
  ul.appendChild(li);
});
