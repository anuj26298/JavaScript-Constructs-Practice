const prompt = require('prompt-sync')();
var n = prompt("Enter value of n: ");
let i = 0;
while(i < n){
    console.log(Math.pow(2,i));
    i++;
}