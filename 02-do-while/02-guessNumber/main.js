// V2 with Do-While-loop

let ansNumber = "";
let isEmpty;
let isNan;
let outOfRange;

do {
  ansNumber = prompt("Enter your magic number") || "";
  // Set condition to check
  isEmpty = ansNumber.trim() == "";
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
  isNan = isNaN(ansNumber);

  //
  if (isEmpty || isNan) {
    alert("Invalid Number");
  } else if (outOfRange) {
    alert("Invalid Range");
  }
} while (isEmpty || isNan || outOfRange);

let guessCount = 0;

do {
  guessCount++;
  guessNumber = prompt("Enter your GUESS number") || "";

  // Set condition to check
  isEmpty = guessNumber.trim() == "";
  outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
  isNan = isNaN(guessNumber);
  correctGuess = guessNumber == ansNumber;
  guessCountExceed = guessCount >= 5;

  //Check the condition and alert accordingly
  if (guessCountExceed){
        alert(`Sorry you have out of guess ${guessCount} times`)
  }
  else if (isEmpty || isNan) {
    alert("Invalid Number");
  } 
  else if (outOfRange) {
    alert("Invalid Range");
  } 
    else if (guessNumber > ansNumber) {
    alert(`${guessNumber} :: It's lessser than that , Try again !`);
  } 
    else if (guessNumber < ansNumber) {
    alert(`${guessNumber} :: It's greater than that , Try again !`);

  }
    else if (correctGuess){
    alert(`Correct the answer was ${guessNumber} !!`);
  }
  
} while ( 
    guessCount < 5 &&
    (isEmpty || isNan || outOfRange || !correctGuess));



// V1 Without Do-While-Loop
// let ansNumber = prompt("Enter your magic number");

// let isValid = ansNumber == null || ansNumber.trim() == "" || isNaN(ansNumber)
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99
// if (isValid){
//     alert("Invalid Input")
// }else if(outOfRange){
//     alert("Invalid Range")
// }else{
//     alert("Now Player 2 try guessing a Number")
// }

// do{
//     numFirst = +prompt("Please enter your number between 1 - 99");
// } while(numFirst > 99 || numFirst < 0)

// i = 0;
// do{
//     numGuess = +prompt("Please GUESS a number between 1 - 99");
//     i++;

// } while(numFirst > 99 || numFirst < 0 || numFirst != numGuess)

// alert(`It took ${i} times to guess`)
