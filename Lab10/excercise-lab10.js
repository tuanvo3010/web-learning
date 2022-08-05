/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  return (length + breadth) * 2;
  // (Dài + rộng) * 2
}
console.log("Chu vi hình chữ nhật = " + findPerimeterOfRectangle(10, 5) + "m");
/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  return length * breadth;
  // Dài * rộng
}
console.log("Diện tích hình chữ nhật = " + findAreaOfRectangle(10, 5) + "m²");
/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
  return r * 2;
  // Đường kính = bán kính * 2
}
console.log("Đường kính hình tròn = " + findDiameterOfCircle(10) + "m");
/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
  return 2 * 3.14 * r;
  // Chu vi hình tròn = 2πr
}
console.log("Chu vi hình tròn = " + findCircumferenceOfCircle(10) + "m");
/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  return 3.14 * Math.pow(r, 2);
  // Diện tích hình tròn = πr²
}
console.log("Diện tích hình tròn = " + findAreaOfCircle(10) + "m²");
/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */

function findAreaOfTriangle(a, b, c) {
    const p = (a + b + c) / 2 // p là nửa chu vi
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
//    return Math.sqrt((a + b + c) * (a + b - c) * (b + c - a) * (c + a - b)) / 4; // Same result
}
console.log("Diện tích hình tam giác = " + findAreaOfTriangle(3, 4, 5) + "m²");
/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
    return temp * 1.8 + 32;
}
console.log(celsiusToFahrenheit(34) + "℉");