function checkSymmetry(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(checkSymmetry("abba"));
console.log(checkSymmetry("racecar"));
console.log(checkSymmetry("madam"));