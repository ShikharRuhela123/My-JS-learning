const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (value) => value + 10 );

// chaining concept....

const newNums = myNumbers
                     .map( (value) => value * 10)
                     .map( (value) => value +1)
                     .filter( (value) => value > 80)

console.log(newNums);
