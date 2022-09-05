const checklist = document.querySelector(".checklist");
const btn_add = document.querySelector("#btn-add");
const todo_input = document.querySelector("#todo-input");

let isUpdate = false;
let idUpdate = null;

function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}

let todos = [
  {
    id: createId(),
    title: "Làm bài todo list",
    status: true,
  },
  {
    id: createId(),
    title: "Làm bài shopping cart",
    status: false,
  },
  {
    id: createId(),
    title: "Lên HN",
    status: false,
  },
];

//render giao diện
function renderUI(arr) {
  checklist.innerHTML = "";
  if (arr.length == 0) {
    checklist.innerHTML =
      '<p class=" checklist-empty" style="margin-left:16px">Chưa làm gì cả</p>';
  }
  for (i = 0; i < arr.length; i++) {
    const t = arr[i];
    checklist.innerHTML += `
        <div class="checklist-item ${t.status ? "checklist-active" : ""}">
        <div class="checklist-item-title">
            <input type="checkbox" ${
              t.status ? "checked" : ""
            } onclick="toggleStatus(${t.id})">
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update" onclick="updateTodo(${t.id})">
                <img src="./img/edit.png" alt="">
            </button>
            <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                <img src="./img/delete.png" alt="">
            </button>
        </div>
    </div>
    `;
  }
}

//Xóa cv
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
    }
  }
  renderUI(todos);
}

function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}

renderUI(todos);

// Thêm/sửa cv
btn_add.addEventListener("click", function () {
  let todoTitle = todo_input.value;
  if (todoTitle == "") {
    alert("Hãy nhập gì đó");
    return;
  }
    if (isUpdate) {
        //update cv
        for (i = 0; i < todos.length; i++){
            if (todos[i].id == idUpdate) {
                todos[i].title = todoTitle
            }
        }
        btn_add.innerText = 'Add';
        isUpdate = false;
        idUpdate = null;    
    } else {
        //thêm cv
    let newTodo = {
      id: createId(),
      title: todoTitle,
      status: false,
    };
    todos.push(newTodo);
    }
    
  renderUI(todos);
  todo_input.value = "";
});

// Sửa cv
function updateTodo(id) {
  let title;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      title = todos[i].title;
    }
  }
  btn_add.innerText = "Update";
  todo_input.value = title;
  todo_input.focus();
  idUpdate = id;
  isUpdate = true;
}
