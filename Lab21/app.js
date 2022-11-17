const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const id = document.querySelector("#id");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const btnCreate = document.querySelector(".btn-create");
const btnUpdate = document.querySelector(".btn-update");

const fillData = (user) => {
    id.value = user.id;
    name.value = user.name;
    email.value = user.email;
    address.value = `${user.address.street}, ${user.address.city}`;
    phone.value = user.phone;
};

const toggleButton = () => {
    btnCreate.classList.toggle("hidden");
    btnUpdate.classList.toggle("hidden");
};

const createRow = (user) => {
    const {
        name,
        email,
        address: { street, city },
        phone,
    } = user;

    const tr = document.createElement("tr");
    tr.dataset.userid = user.id;

    tr.innerHTML = `
          <td>${name}</td>
          <td><a href="mailto:${email}">${email}</a></td>
          <td>${street}, ${city}</td>
          <td><a href="tel:${phone}">${phone}</a></td>
          <td><button class="btn-edit">Edit</button><button class="btn-delete">Delete</button></td>
      `;

    const btnEdit = tr.querySelector(".btn-edit");
    const btnDelete = tr.querySelector(".btn-delete");

    btnEdit.onclick = () => {
        fillData(user);
        toggleButton();
    };

    btnDelete.onclick = () => {
        if (confirm("Đồng ý xóa???")) {
            deleteUser(user.id).then(deleteRow);
        }
    };

    return tr;
};

const renderTable = (users) => {
    tbody.append(...users.map(createRow));
};

const renderNewUser = (user) => {
    tbody.append(createRow(user));
};

const replaceRow = (user) => {
    const tr = tbody.querySelector(`tr[data-userid="${user.id}"`);

    tr.replaceWith(createRow(user));
};

const deleteRow = (userId) => {
    const tr = tbody.querySelector(`tr[data-userid="${userId}"`);

    tr.remove();
};

const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(
        (response) => response.json()
    );
};

const createUser = (user) =>
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());

const updateUser = (user) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());

const deleteUser = (userId) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: "DELETE",
    }).then(() => userId);

getUsers().then(renderTable);

form.onsubmit = (e) => {
    e.preventDefault();

    const newUser = {
        name: name.value,
        email: email.value,
        address: {
            street: address.value.split(",")[0],
            city: address.value.split(",")[1],
        },
        phone: phone.value,
    };

    createUser(newUser)
        .then(renderNewUser)
        .then(() => form.reset());
};

btnUpdate.onclick = (e) => {
    e.preventDefault();

    const newUser = {
        id: id.value,
        name: name.value,
        email: email.value,
        address: {
            street: address.value.split(",")[0],
            city: address.value.split(",")[1],
        },
        phone: phone.value,
    };

    updateUser(newUser)
        .then(replaceRow)
        .then(() => {
            form.reset();
            toggleButton();
        });
};
