let number;
let array = [];
let i;

for(i = 0; i< 5; i++){
    do{
        number = Math.floor(Math.random() * 999);
    }while(number < 100);
    array[i] = number;
}

console.log(array);
console.log("Maximin number is " + Math.max.apply(Math,array));
console.log("Minimum number is " + Math.min.apply(Math, array));