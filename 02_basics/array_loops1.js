const myObject = {
    js : 'javascript',
    cpp : 'c ++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
//    console.log(key);
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "python", "cpp", "java"];
for (const key in programming) {
//    console.log(key); //   yahn se toh hum sirf key mil rahi hai
//    console.log(programming[key]);  // ish syntax se humhe us key value mil rahi hai
}


// const myMap = new Map()
// myMap.set('IN' , "India")
// myMap.set('USA' , "United State of America")
// myMap.set('FR' , "France")
// myMap.set('IN' , "India")
// myMap.set('SA' , "South Africa")
 

// for (const key in myMap) {
//     console.log(key);                  for in loop not work on maps
// }