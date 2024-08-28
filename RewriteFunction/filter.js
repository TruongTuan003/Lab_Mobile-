function myFilter(array, callback) {
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        newArray.push(array[i]);
      }
    }
  
    return newArray;
  }
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, number => number % 2 === 0);
console.log(evenNumbers); 