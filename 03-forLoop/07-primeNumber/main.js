let maxNumber = +prompt("Number pls");
// Better to have validation on the input
let result = "";
let isPrime = true;
let count = 0;

for (i = 2; i <= maxNumber; i++) {
  isPrime = true;
  for (y = 2; y < i; y++) {

    if (i % y == 0) {
      isPrime = false;
      break;
    }

  }

  if (isPrime) {

    result += `${i} `;
    count++;

  }
}
console.log(result);
console.log(`There are ${count} Prime numbers in the range 1 to ${maxNumber}`);
