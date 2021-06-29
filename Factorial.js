const prompt = require('prompt-sync')();
var n = prompt("Enter number: ");
let fact = 1;
for(var i = 1; i <= n; i++){
    fact = fact * i;
}
console.log(fact);