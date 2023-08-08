let maxNumber = 100;
let result = "";
let count = 0;

for (i = 2; i <= maxNumber; i++) {
  for (y = 2; y <= i; y++) {
    if (i == y) {
      result += `${i} `;
      count++;
      continue;
    }
    if (i % y == 0) {
      break;
    }
  }
}
console.log(result);
console.log(`There are ${count} Prime numbers in the range 1 to ${maxNumber}`);
