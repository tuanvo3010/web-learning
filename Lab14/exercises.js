/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
function min(arr) {}

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {}

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {}

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {}

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  const result = [];
  for (const number of arr1) {
    if (arr2.includes(number)) {
      result.push(number);
    }
  }
  return result;
}
console.log(intersection([1, 2, 3], [2, 3, 4, 5]));

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
  const result = [];
  for (const number of arr1) if (!arr2.includes(number)) result.push(number);
  for (const number of arr2) if (!arr1.includes(number)) result.push(number);
  return result;
}
console.log(difference([1, 2, 3], [2, 3, 4, 5]));
/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  //[1,2,3,4,5,5] => [1,2,3,4,5]
  const temp = [];

  // Sao chép các giá trị sang temp = [1,2,3,4,5], arr = [1,2,2,3,4,5,5]
  for (let number of arr) if (!temp.includes(number)) temp.push(number);

  // Xóa hết các phần tử trong arr = []
  arr.length = 0;

  // Chuyển lại các giá trị trong temp về arr = [1,2,3,4,5]
  for (let number of temp) arr.push(number);
}
const myArr = [1, 2, 2, 3, 4, 5, 5];
removeDuplicate(myArr);
console.log(myArr);
/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {}

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {}
