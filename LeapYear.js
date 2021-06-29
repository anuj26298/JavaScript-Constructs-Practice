const prompt = require('prompt-sync')();
var year = prompt("Enter year");
if(((year%4==0) && (year%100==0)) || year%400){
    console.log("Leap year");
}else{
    console.log("Not a leap year");
}