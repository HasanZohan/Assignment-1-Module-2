function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}
  
const result = sortNumbers([5, 2, 8, 1, 4]);
console.log(result);