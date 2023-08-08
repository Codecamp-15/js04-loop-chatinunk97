console.log("Starting ...")

let i = 1 ;
while (i <= 20){

    if ( i % 3 === 0 && i % 5 === 0){
        console.log( `${i} ---> Fizz Buzz`)
    }
    else if (i%3 === 0){
    console.log( `${i} ---> Fizz`);
    }
    else if ( i % 5 === 0 ){
    console.log( `${i} ---> Buzz`)
    }
    else{
        console.log(i)
    }
    i++;

}

console.log("End.......")