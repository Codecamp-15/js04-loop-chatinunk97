let year = 10;
let moneyAmount = 100000;

for (i = 1 ; i <= year ; i++){
    moneyAmount = moneyAmount * 1.025
}

console.log(moneyAmount.toFixed(2))