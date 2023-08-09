let rowNumber = 8;
let result = "";
for(i = 0 ; i <= rowNumber ; i++){
    for(y = 1 ; y < i ; y++){
        result += y
    }
    result += "\n"
}
console.log(result)