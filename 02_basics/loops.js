// FOR loop

// for (let index = 0; index <= 20; index++) {
//     const element = index;
//     if(element == 10){
//         console.log("10 is detected");
//         break;
//     }
//     console.log(element);
// }

// for (let index = 0; index <= 20; index++) {
//     const element = index;
//     if(element == 10){
//         console.log("10 is detected");
//         continue;
//     }
//     console.log(element);
// }


// loop on Array.....
// const myArray = ["shikhar", "gaurav", "manish", "nishant"];
//  console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


for (let i = 0; i <=10 ; i++) {
    const element = i;
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j < 10; j++) {
        const element = j;
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);  // table print code....
        
    }
    
}