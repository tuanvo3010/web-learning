//1.
document.title = heading;
//2.
document.querySelector(".heading").innerHTML = heading;
//3.
document.querySelector(".avatar").src = avatar;
//4.
document.querySelector(".profile").href = profile;
//5.
// document.querySelectorAll(".favorite").firstElementChild = "asdasd"

//7.
let time = new Date().toLocaleString("vi-VN");
document.querySelector(".clock").innerHTML += " " + time; // += để chèn thêm vào chứ không thay thế hoàn toàn

//8.
let p = document.querySelector(".bio").innerHTML;
p = p.toLowerCase()
let count = 0;
while (p.indexOf("ba") !== -1) {
  count++
}
document.querySelector(".num-of-words").innerHTML = "Ở đoạn văn trên có" + count + "từ \'Ba\'"