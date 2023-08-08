//Sum all
// let result = 0;
// for( let i = 0 ; i <= 100 ; i++){
//     result += i
// }
// console.log(result)

//Sum number Even / Odd seperately

// let result_even = 0;
// let result_odd = 0;
// for( let i = 0 ; i <= 100 ; i++){
//     if( i % 2 === 0){
//         result_even += i
//     }
//     else{
//         result_odd += i
//     }
    
// }
// console.log(`Result Even -> ${result_even} ---- Result Odd -> ${result_odd}`)

//Sum odd number ^2 an even number ^2

let result_even = 0;
let result_odd = 0;
for( let i = 0 ; i <= 100 ; i++){
    if( i % 2 === 0){
        result_even += i**2
    }
    if( i % 3 === 0) {
        result_odd += i**2
    }
    
}
console.log(`Result Even -> ${result_even} ---- Result Odd -> ${result_odd} -------${result_even - result_odd} `)