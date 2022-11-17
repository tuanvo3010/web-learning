// Variable
// To declare a variable have 4 ways : const, let , var ,nothing

var name;
const age = 12;

console.log(name, age);

// Tạo ra 1 danh sách các số < 10 và thêm lần lượt 3,6,4,9,1. Sau đó sort và in ra kết quả từ lớn đến bé
let numbers = [];
function listNumber() {
    for (let i = 0; i < 10; i++) {
    numbers.push(i)
    }
}
listNumber();
numbers.push(3);
numbers.push(6);
numbers.push(4);
numbers.push(9);
numbers.push(1);

numbers.sort();
numbers.reverse();
console.log(numbers);