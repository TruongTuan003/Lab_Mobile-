function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  }
  const numbers = [1, 2, 3, 4, 5];
  const found = myFind(numbers, number => number > 3);
  console.log(found); // Output: 4