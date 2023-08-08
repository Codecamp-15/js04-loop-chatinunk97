let num = +prompt("Input Number");

i = 10;
count = 1;
if ( num < 0 ) {
    num = -num;
}

while (num >= 10 ){
    num = num / i;
    count++;

}

console.log(count)