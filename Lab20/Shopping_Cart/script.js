function randomId() {
  return Math.floor(Math.random() * 100000);
}
let products = [
  {
    id: randomId(),
    name: "Mũ không vành",
    description:
      "Mũ beanie không vành phong cách cổ điển thời trang giản dị cho nam nữ",
    price: 99000,
    image: "https://cf.shopee.vn/file/3322dddbf09b40a6fa04150493a0ea96",
    count: 1,
  },
  {
    id: randomId(),
    name: "Mũ lưỡi trai",
    description: "Mũ lưỡi trai thêu chữ LA cho nam nữ",
    price: 150000,
    image: "https://cf.shopee.vn/file/826b7ee1139cdd6d81abe797b515c433",
    count: 1,
  },
];

let productsElement = document.querySelector(".products");

function renderUI(arr) {
  productsElement.innerHTML = "";

  //Update số lượng sản phẩm
  let countElement = document.querySelector(".count");
  countElement.innerText = `${updateTotalItem(arr)} sản phẩm trong giở hàng`;

  // Kiểm tra giỏ hàng trống hay không
  if (arr.length == 0) {
    productsElement.insertAdjacentHTML("afterbegin", "<li>Giỏ hàng trống</li>");
    document.querySelector(".option-container").style.display = "none";
  }

  for (i = 0; i < arr.length; i++) {
    const p = arr[i];
    productsElement.innerHTML += `
            <li class="row">
                <div class="col left">
                    <div class="thumbnail">
                        <a href="#">
                            <img src="${p.image}" alt="${p.name}">
                        </a>
                    </div>
                    <div class="detail">
                        <div class="name"><a href="#">${p.name}</a></div>
                        <div class="description">
                            ${p.description}
                        </div>
                        <div class="price">${convertMoney(p.price)}</div>
                    </div>
                </div>
                <div class="col right">
                    <div class="quantity">
                        <input type="number" class="quantity" step="1" value="${
                          p.count
                        }" onchange="changeProductQuantity(${p.id}, event)">
                    </div>
                    <div class="remove">
                        <span class="close" onclick="removeItem(${p.id})">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </li>
        `;
    }
    updateTotalMoney(arr);
}

// Đổi sang đơn vị tiền VND
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}
window.onload = renderUI(products);

//Update số lượng sp
function updateTotalItem(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    total += p.count;
  }
  return total;
}

// Xóa sp
function removeItem(id) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  renderUI(products);
}

// Thay đổi số lượng sp
function changeProductQuantity(id, e) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].count = Number(e.target.value);
    }
  }
  renderUI(products);
}

// Tính tiền
let subTotal = document.querySelector(".subtotal span");
let vat = document.querySelector(".vat span");
let total = document.querySelector(".total span");


function updateTotalMoney(arr) {
  let totalMoney = 0;
  for (i = 0; i < arr.length; i++) {
    const p = arr[i];
    totalMoney += p.count * p.price;
  }
  subTotal.innerText = convertMoney(totalMoney);
  vat.innerText = convertMoney(totalMoney * 0.05);
  total.innerText = convertMoney(totalMoney * 1.05);
}
