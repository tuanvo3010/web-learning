// Cho mảng chứa danh sách các loại quả
const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>
for (let i of fruitList) {
    let li = document.createElement("li"); li.innerHTML = i;
    document.querySelector(".fruit-list").appendChild(li)
}




// Search trên mạng
// To create an HTML list from an array in Javascript:
// Create the HTML list
// var ol = document.createElement("ol");
// Loop through the array and append list items
//for (let i of ARRAY) { let li = document.createElement("li"); li.innerHTML = i; ol.appendChild(li); }
// Append the list to where you want
// document.getElementById("TARGET").appendChild(ol);