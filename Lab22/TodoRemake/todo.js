const todoList = document.querySelector(".todo-list");

const createTodoItem = ({ id, title, completed }) => {
  return `
<div class="todo-item ${completed ? "active-todo" : ""}>
<div class="todo-item-title">
    <input type="checkbox" ${completed ? "checked" : ""}>
    <p>${title}</p>
</div>
<div class="option">
    <button class="btn btn-update">
        <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
    </button>
    <button class="btn btn-delete">
        <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
    </button>
</div>
</div>
    `;
};

const filterTodo = (todos, filter) => {
  switch (filter) {
    case 2: {
      return todos.filter((todo) => !todo.completed);
    }
    case 3: {
      return todos.filter((todo) => todo.completed);
    }
    default:
      return todos;
  }
};

export const renderTodoList = (todos, filter) => {
  todoList.innerHTML = filterTodo(todos, filter).map(createTodoItem).join("");
};
