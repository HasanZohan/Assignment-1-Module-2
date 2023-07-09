function sumNumbers(...numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}
  

const result = sumNumbers(1, 2, 3, 4, 5);
console.log(result);