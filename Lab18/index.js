// const h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// h1.classList.add("heading");
// h1.id = "heading";

// const img = document.createElement("img");
// img.src =
//   "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-3-450x600.jpg";
// img.alt = "Gái";

// document.getElementById("app").append(h1, img);
// // có thể tạo tất cả mọi thứ thông qua JS
// // document.createElement();// tạo thẻ
// // document.createTextNode();//Tạo #text
// // document.createAttribute();//Tạo thuộc tính

// // tạo xong thì cần phải chèn vào cấu trúc HTML thông qua before/after/append/prepend

// // img.insertAdjacentText();// chèn dạng chuỗi
// // img.insertAdjacentHTML();// chèn chuỗi HTML tương tự innerHTML
// // img.insertAdjacentElement();// chèn node (được tạo)

// // Chỉ có duy nhất 1 node ở trên trang
// // Nếu node đã xuất hiện trong DOM, thì các phương thức chỉnh sửa sẽ chỉ thay đổi vị trí của node, chứ không chèn node mới

// document.getElementById("app").after(img);

// // dùng innerHTML khi mà có sẵn cấu trúc HTML và không cần thay đổi/chỉnh sửa quá nhiều.

// //tạo các hmà, hàm này sẽ tạo 1 thẻ img
// function createImage(src, alt) {
//   const img = document.createElement("img");
//   img.src = src;
//   img.alt = alt;
//   return img;
// }
// document
//     .getElementById("app")
//     .after(
//         createImage(
//             "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-3-450x600.jpg",
//             "Gái xinh"
//         ),
//         createImage(
//       "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-3-450x600.jpg",
//       "Gái xinh"
//     ),
//     createImage(
//       "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-3-450x600.jpg",
//       "Gái xinh"
//     )
//   );

const data = [
  {
    slug: 1,
    cover:
      "https://s199.imacdn.com/vg/2022/08/26/69542ac365a4ceaf_691065b247e2ebae_23003166150547413.jpg",
    title: "Renmei Kuugun Koukuu Mahou Ongakutai Luminous Witches",
    episode: "Tập 7 - Lý do của Mặt Trời",
    view: 337,
  },
  {
    slug: 2,
    cover:
      "https://s199.imacdn.com/vg/2022/08/26/b91ab5e541c50b6d_487208c288a9d0e8_3325116614985597118684.jpg",
    title: "Hataraku Maou-sama!",
    episode: "Tập 20 - Ma Vương hiểu thêm về Choushi và thế giới",
    view: 2340,
  },
  {
    slug: 3,
    cover:
      "https://s199.imacdn.com/vg/2022/06/07/9c540141ae3d7f05_a84d0e5d4d64dceb_34442165459032279674.jpg",
    title: "Kumichou Musume to Sewagakari",
    episode: "Tập 8",
    view: 1669,
  },
  {
    slug: 4,
    cover:
      "https://s199.imacdn.com/vg/2022/08/25/05104a5cd039d4fb_cb02fc796972b54a_25989166136354193.jpg",
    title: "Jashin-chan Dropkick",
    episode: "Tập 31 - Cưỡi cá heo gây náo động",
    view: 1139,
  },
];

// 1. Tạo giao diễn tĩnh trước
// 2. Lắp ghép dât và render giao diện theo data
// template string ``
// chèn dữ liệu (biến/biểu thức) sử dụng cú phapr $(expression)
// Cách dễ: dùng innerHTML
function createEpisode(item) {
  return `
    <div class="movie">
    <a href="${item.slug}"><div class="movie-thumbnail">
        <img src="${item.cover}"
            alt="${item.title}">
    </div>
    <div class="movie-description">
        <div class="movie-title">${item.title}</div>
        <div class="movie-meta-info">
            <div class="episode-title">${item.episode}</div>
            <div class="episode-views">${item.view}</div>
        </div>
    </div></a>
</div>
    `;
}
// Chuyển đổi dữ liệu thành HTML
document.querySelector(".list-movie").innerHTML = data
  .map(createEpisode)
  .join("");

function handleClick() {
  alert("Yamete Kudasai!!!");
}
// 3 cách để chỉ định
// 1. Gán thông qua thuộc tính sự kiện của thẻ HTML
// 2. Gán thông qua thuộc tính DOM
// window.onload = function () {
//     console.log("Loading finished");
// }

// 3. Gán thông qua phương thức addEventListener/removeEventListener
const selectBox = document.getElementById("select");
selectBox.addEventListener("change", function () {
  console.log(selectBox.value);
});
const input = document.getElementById("input");
input.addEventListener("input", function () {
  console.log("Nhập vào gì đó");
});
function myAlert() {
    alert("Vừa nhập gì đó?")
}
// 1. Tên sự kiện/nhóm sự kiện
// 2. Xảy ra khi nào
// 3. Cách gán trình xử lí cho sự kiện mà mình quan tâm
// 4. Trình xử lí nhận vào EventObject bao gốm các thông tin chi tiết hơn về sự kiện
// Về sự kiện (Khác nhau tùy thuộc vào loại sự kiện)
// 5. Một số thành phần có sẵn các sự kiện mặc định, có thể tắt thông qua EventObject

document.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault()
    console.log("Không chuyển hướng nữa");
})