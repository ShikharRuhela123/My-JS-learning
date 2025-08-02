// Forof Loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6];
for (const num of arr) {
    // console.log(num);
}

const greeting = "hello world";
for (const greet of greeting) {
    if(greet == " ")
    {
        // console.log("space is detected");
        break;
    }
    // console.log(`each char is ${greet}`);
}


// +++++++++++++ Maps

const myMap = new Map()
myMap.set('IN' , "India")
myMap.set('USA' , "United State of America")
myMap.set('FR' , "France")
myMap.set('IN' , "India")
myMap.set('SA' , "South Africa")

// console.log(myMap);

for (const key of myMap) {
    // console.log(key);
}

for (const [key , value] of myMap) {    // this is called destructuring of array  
    // console.log(key, "->" ,value);
}

// Looping on Object

const myObject = {
    game1 : 'NFS',
    game2 : 'PUBG'
}

// for (const [key , value] of myObject) {
//     console.log(key, "->" ,value); 
// }