console.log(document);
console.log(document.body); // thẻ body
console.log(document.title);// thẻ title
console.log(document.links);// chứa tất cả thẻ a trên trang
console.log(document.images);// chứa tất cả thẻ img trên trang
console.log(document.forms);// chứa tất cả thẻ form trên trang

document.title = "Alo"

// querySelector ==> chỉ chọn 1 ( tức là trả về tham chiếu trực tiếp)
// querySelectorAll ==> trả về toàn bộ (tức là 1 NodeList)

box innerHTML = "<p<This is paragraph</p>";