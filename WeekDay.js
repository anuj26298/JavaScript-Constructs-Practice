const prompt = require('prompt-sync')();
var day = prompt("Enter Day(1-7): ");
weekDay(Number(day));
function weekDay(day){
    switch(day){
        case 1:
            console.log("Monday");
            break;
            
        case 2:
            console.log("Tuesday");
            break;
            
        case 3:
            console.log("Wednesday");
            break;
            
        case 4:
            console.log("Thrusday");
            break;
            
        case 5:
            console.log("Friday");
            break;
            
        case 6:
            console.log("Saturday");
            break;
            
        case 7:
            console.log("Sunday");
            break;

        default:
            console.log("Enter Number between 1-7");
            break;
    }
}