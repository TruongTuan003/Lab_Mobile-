function any(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }
  const numbers = [1, 2, 3, 4, 5];

// Kiểm tra xem có số nào lớn hơn 4 không
const hasNumberGreaterThan4 = any(numbers, number => number > 4);
console.log(hasNumberGreaterThan4); // Output: true

// Kiểm tra xem có chuỗi nào trong mảng không
const strings = ['apple', 'banana', 123];
const hasString = any(strings, element => typeof element === 'string');
console.log(hasString); // Output: true