const prompt = require('prompt-sync')();
var date = prompt("Enter day: ");
var month = prompt("Enter month: ");

if(month <=6 && date <=20){
    console.log(true);
}
else{
    if(month >=3 && date >= 20){
    console.log(true)
   }
    else{
        console.log(false)
    }
}