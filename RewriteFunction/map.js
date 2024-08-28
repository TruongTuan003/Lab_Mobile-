function myMap(array, callback) {
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i], i, array));
    }
  
    return newArray;
  }

const numbers = [1, 2, 3, 4];
const squared = myMap(numbers, x => x * x);
console.log(squared); 