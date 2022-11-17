import { getAllTodos } from "./api.js";
import { renderTodoList } from "./todo.js";

const formTodo = document.querySelector(".todo");
const formOption = document.querySelector(".todo-option");

//Client state
const todos = [];
let filter = 1;

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewTodoItem(formTodo.elements.title.value).then(({ data }) => {
    todos.push(data);
    renderTodoList(todos, filter);
    formTodo.reset();
  });
});

formOption.addEventListener("change", (e) => {
  filter = +formOption.elements["todo-option-item"].value;
  renderTodoList(todos, filter);
});
getAllTodos().then(({ data }) => {
  todos.push(...data);
  renderTodoList(todos, filter);
});
