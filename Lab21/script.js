// const lodash = "https://cdn.jsdelivr.net/combine/npm/jquery@3.6.0,npm/lodash@4.17.21"

// const loadScript = (link, onsuccess, onerror) => {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = link;
//         document.body.appendChild(script);
//         script.onload = () => resolve(_);
//         script.onerror = () => reject();
//     })
// }
// console.log("Before loadScript");

// loadScript(lodash)
//     .then(() => {
//         console.log((_.chunk([1,2,3,4],2)));
//     })// Thành công
//     .then(() => {
//     console.log(_.compact([0, 1, false, 2, '', 3]));
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("After All");
//     }); // Thất bại
// console.log("After loadScript");

const createRow = (user, email, adress, phone) => {
  return `
    <tr>
        <td>
    `;
};

const renderTable = (users) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = users.map(createRow).join("");
};

const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};
