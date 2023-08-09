console.log("Starting.....");

// for (i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} ---> Fizz Buzz`);
//   } else if (i % 3 === 0) {
//     continue;
//   } else if (i % 5 === 0) {
//     console.log(`${i} ---> Buzz`);
//   } else {
//     console.log(i);
//   }
// }

// let str = "";

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   str += i;
// }
// console.log(str);

// console.log("Ending.....");

// let str = "codecamp";
// let result = "";
// let check = "aeiou";

// for (let i = 0; i < str.length; i++) {
//   for (let y = 0; y < check.length; y++) {
//     if (str[i] == check[y]) {
//       console.log("BREAK HERE");
//       break;
//     } 
//     else {
//       console.log("CONTINUE HERE");
//     }
//     console.log("HERE?")
//   }


// }
// console.log(result);

let a = 12;

for (let i = 2; i <= a; i++) {
  for (let y = 1; y <= 12; y++) {
    console.log(`${i} X ${y} = ${i * y}`);
  }
  console.log('\n')
}
