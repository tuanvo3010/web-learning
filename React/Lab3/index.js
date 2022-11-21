const cart = [
    {name: "Cam", price: 10, quantity: 1},
    {name: "Tao", price: 20, quantity: 1},
    {name: "Xoai", price: 30, quantity: 1},
    {name: "Nhan", price: 25, quantity: 1},
    {name: "Mit", price: 15, quantity: 1},
]
   
function totalPrice(array) {
    let sum = 0
    for (i = 0; i < array.length; i++){
       sum += array[i].price * array[i].quantity
    }
    return sum;
}
console.log(totalPrice(cart));