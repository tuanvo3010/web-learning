let arr1 = [2, 4, 6, 8, 10];

//
function sumAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}
console.log(sumAvg(arr1));

//
function findMax(arr) {
  const max = Math.max(...arr);
  return max;
}
console.log(findMax(arr1));

//
function fibonacci(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    // i = 2 (số fibo thứ 2)
    fibo[i] = fibo[i - 1] + fibo[i - 2]; // công thức fibonacci F(n) = F(n - 1) + F(n - 2)
  }
  return fibo;
}
console.log(fibonacci(10));
