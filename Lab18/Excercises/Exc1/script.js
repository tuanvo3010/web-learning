let count = 0;
let add = document.querySelector(".nextBtn");
add.addEventListener("click", function () {
  count = count + 1;
  document.getElementById("counter").innerHTML = count;
});
let sub = document.querySelector(".prevBtn");
sub.addEventListener("click", function () {
  count = count - 1;
  document.getElementById("counter").innerHTML = count;
});
if (count > 0) {
  document.getElementById("counter").style.color = "green";
}
if ((count = 0)) {
  document.getElementById("counter").style.color = "#333333";
}
if (count < 0) {
  document.getElementById("counter").style.color = "red";
}
