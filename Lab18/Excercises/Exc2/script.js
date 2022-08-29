let para = document.querySelector("p").textContent
let word = [];
word = para.trim().split(" ")
console.log(word)




let link = document.createElement("a");
document.body.append(link);
link.innerHTML = "Facebook"
link.href = "facebook.com";

let numOfWord = word.length
console.log(numOfWord)
let div = document.createElement("div");
document.body.append(div)
div.innerHTML = numOfWord + " từ"