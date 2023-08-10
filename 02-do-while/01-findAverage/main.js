let counter = 0 ;
let sum_text = ""
let sum = 0;


do{
    
    number = prompt("Enter your magic number") || "";

    // Set condition to check
    isEmpty = number.trim() == "";
    isNan = isNaN(number);
    isNegZero = number <= 0;

    if (!isEmpty && !isNan && !isNegZero){
        sum += +number
        sum_text += `${number} `
        counter +=1
    }

}while(!isEmpty &&  !isNan && !isNegZero)
console.log(`You have input the following number ${sum_text} ${"\n"} and your average value is ${(sum / counter).toFixed(2)}` )