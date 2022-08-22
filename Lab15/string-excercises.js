/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
function capitalize(str) {
  let capitalize = str.trim().toLowerCase();
  return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
}
console.log(capitalize("     cái này viết hOA Chữ đầu     "));
/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
function title(str) {
  let splitStr = str.trim().toLowerCase().split(" ");
  for (i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
console.log(title("     cái này viết hOA Chữ đầu mỗi từ     "));
/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
function countVowel(str) {
  let vowelCount = 0,
    vowel = ["u", "e", "o", "a", "i"];
  for (let char of str) {
    if (vowel.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(countVowel("asowramsnius"));
/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
function randomColor() {
  let colorLetter = "ABCDEF0123456789",
    color = "#";
  for (i = 0; i < 6; i++) {
    color += colorLetter[Math.floor(Math.random() * colorLetter.length)];
  }
  return color;
}
console.log(randomColor());
/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
function reverseWords(str) {
  let words = [];
  words = str.split(",");
  let result = "";
  for (i = 0; i < words.length; i++) {
    result += words[i].split(" ").reverse().join(" ");
  }
  return result;
}
console.log(reverseWords("Alo vô đê"));
/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
function parameterize(str) {
  let words = [];
  words = str.toLowerCase().split(",");
  let result = "";
  for (i = 0; i < words.length; i++) {
    result += words[i].split(" ").join("-");
  }
  return result;
}
console.log(parameterize("Test thử câu này"));