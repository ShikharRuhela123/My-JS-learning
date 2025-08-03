const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (value) => {
//   console.log(value);   
  
} )


// if function is already declared

function printMe (item, position, allarray) {
    // console.log(item, position, allarray);
}

coding.forEach(printMe);

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
         languageName : "python",
        languageFileName : "py"
    },
    {
         languageName : "c++",
        languageFileName : "cpp"
    },
    {
         languageName : "java",
        languageFileName : "java"
    }
]

myCoding.forEach(  (item)=> {
    // console.log(item.languageName);
})


const values = coding.forEach( (item)=> {
    // console.log(item);
    return item;   // forEach loop not return a value....
})

console.log(values);
