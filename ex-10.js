function sumArray(numbers) {
    return numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}
  
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);