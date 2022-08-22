/**
 * Trả về chuỗi đại diện cho ngày hôm nay theo định dạng VN
 *
 * Ví dụ: 01/10/2022 (lưu ý, ngày tháng đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi ngày tháng
 */
function currentDate() {
  let currentTime = new Date();
  let date = currentTime.getDate();
  let month = currentTime.getMonth() + 1;
  let year = currentTime.getFullYear();
  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;
  let today = date + "/" + month + "/" + year;
  return today;
}
console.log(currentDate());
/**
 * Trả về chuỗi đại diện cho thời gian hiện tại
 *
 * Ví dụ: 10:30:59 (lưu ý, giờ, phút, giây đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi thời gian
 */
function currentTime() {
  let currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;
  let time = hours + ":" + minutes + ":" + seconds;
  return time;
}
console.log(currentTime());
/**
 * Tìm thứ trong tuần tương ứng với ngày hiện tại
 *
 * Ví dụ: T2, T3, ..., CN
 *
 * @returns {string} Thứ tương ứng
 */
function todayWeekday() {
  let days = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  let currentTime = new Date();
  return (weekday = days[currentTime.getDay()]);
}
console.log(todayWeekday());
/**
 * Tìm ngày cuối cùng của tháng
 *
 * @param {Date} date - Ngày bất kỳ
 *
 * @returns {Date} Ngày cuối tháng
 */
function getLastDayOfMonth(date) {
  let currentTime = new Date(date);
  let lastDay = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth() + 1,
    0
  );
  return lastDay.getDate();
}
console.log(getLastDayOfMonth("Aug 22 2022"));

/**
 * Tính số ngày đến tết dương lịch năm sau
 *
 * @returns {number} Số ngày cho đến tết dương lịch năm sau
 */
function getDaysToNextYear() {
  let today = new Date();
  let nextYear = new Date(today.getFullYear() + 1, 0, 1);
  let oneDay = 1000 * 60 * 60 * 24; // 1000ms, 60s, 60m, 24h,
  return Math.ceil((nextYear.getTime() - today.getTime()) / oneDay);
}
console.log(getDaysToNextYear());
/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {
  let today = new Date();
  let birthDay = new Date(today.getFullYear(), month - 1, day);
  let oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil((birthDay.getTime() - today.getTime()) / oneDay);
}
console.log(getDaysToNextBirthday(10, 30));
/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
function todayBirthday(users) {}
