let watertank = 0; //liters
let waterlimit = 10; //litres

// //while loops example
// while (watertank < waterlimit ){
//     watertank = watertank +1;
//     console.log("water tank filling up. current water level :" + watertank + "liters");
// }

//filter even number

// let number = 0;

//  while(number < 10){
//     number = number +1;
//     if (number % 2 !== 0){
//         console.log(number);
//     }
//  }

let names = ["john", "jane", "mary","mark","bob","chris"];

let groupA =[];
let groupB = [];

let count = 0;
 
while (names.length > count) {
    count = count + 1;
    if(count % 2 !==0){
        groupA.push(names[count]);
    } 

    count = count + 1;
}

console.log(groupA);
console.log(groupB);