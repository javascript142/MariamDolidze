let names = ["john", "jane", "mary","mark","bob","chris"];

let groupA =[];
let groupB = [];

// for(let count = 0; names.length > count; count = count + 1){ ///indeqsebis dros viyenebt dziritaad amas
//     if (count % 2 !== 0){
//         groupA.push(names[count]);
//     } else if (count % 2 === 0){
//         groupB.push(names[count]);
//     }
// }
// console.log(groupA);
// console.log(groupB);

for (let name of names){
    if (names.indexOf(name)% 2 !==0){    //tu velidan amogeb agvinda ragac monacemis viyenebt amas mashin
        groupA.push(name)
    } else if(names.indexOf(name)% 2 !==0){
    group.push(name)}
}