const dog = {
  name: "Lu",
  age: 3,
  bread: "Cỏ",
  gender: "Male",
  color: "Yellow",
  leg: 4,
  "favourite food": "meat",
  eat() {
    console.log(
      this.name + " is eating " + this["favourite food"] + " yum yum"
    );
  },
  run() {
    console.log(this.name + " is running on " + this.leg + " leg");
  },
  bark() {
    console.log("Alo alo mày biết bố mày là ai không?");
  },
};
console.log(dog);
console.log(dog.name);
console.log(dog["favourite food"]);
dog.color = "Brown";
console.log(dog.color);
dog.age = dog.age + 2;
console.log(dog.age);
dog.eat();
dog.run();

for (let key in dog) {
  console.log("Key:", key);
}
for (let key in dog) {
  console.log("Value:", dog[key]);
}
dog.isCrazy = false;

dog.crazy = function () {
  if (!this.isCrazy) {
    console.log(this.name + " is not crazy");
  } else {
    for (i = 0; i <= 5; i++) {
      this.run();
      this.bark();
    }
  }
};
dog.crazy();
dog.isCrazy = !dog.isCrazy;
dog.crazy()
delete dog.isCrazy; // Xóa đi r
dog.crazy();// Truy cập isCrazy = undifined (undifined đổi ra boolean = false.)
for (let key in dog) {
    if (typeof dog[key] != "function"){
        console.log(key, dog[key]);
    }
}

let clone = dog;
clone.name = "Bò"
console.log(clone);
console.log(dog);


let copy = {}
for (let key in dog) {
    copy[key] = dog[key];
}
copy.name = "Cẩu"
console.log(dog);
console.log(copy)