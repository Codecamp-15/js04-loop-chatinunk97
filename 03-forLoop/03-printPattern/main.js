//// Print in one go
console.log("Single Print Solution");
let row_num = 4;
let result = "";
for (i = 0; i <= row_num; i++) {
  for (y = 0; y <= i; y++) {
    result += "* ";
  }
  result += "\n";
}
console.log(result);

console.log("\n");
///// Multiple line /////

console.log("Multiple Line Solution");
let row_num2 = 4;
let result2 = "";
for (i = 0; i <= row_num2; i++) {
  for (y = 0; y <= i; y++) {
    result2 += "* ";
  }
  console.log(result2);
}
