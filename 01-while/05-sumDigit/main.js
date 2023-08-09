let number = +prompt("Number pls")
let remainder;
let sum = 0;

if (number < 0){
    number = -number;
}

while ( number){

    remainder = number % 10;
    number = (number-remainder)/10;
    sum += remainder;
}

console.log(sum)

// Explanation
// If you want every digit, since it's a 
// decimal base value -> we can devide it with 10
// and see what's the ramainder

// 121 / 10 -> 12.1

// The remainder will be the digit you wanted
// So we can use number%10 and keep that remainder in a variable
// If there's no remainder that means the digit is 0 
// 1120 % 10 -> 0