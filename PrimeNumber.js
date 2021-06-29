const prompt = require('prompt-sync')();
var n = prompt("Enter number: ");
var flag = true;
for(var i=2; i < n-1; i++){
    if(n%i == 0){
        flag = false;
        break;
    }
}
if(flag){
    console.log("Prime");
}else{
    console.log("Not Prime");
}