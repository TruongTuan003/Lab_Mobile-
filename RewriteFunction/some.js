function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = mySome(numbers, number => number % 2 === 0);
console.log(hasEvenNumber); // Output: true