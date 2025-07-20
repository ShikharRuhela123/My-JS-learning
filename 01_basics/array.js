const myArr = [0,1,2,3,4,5];
const myHeroes = ["shaktiman","naagraj"];
 const myArr1 = new Array(1,2,3,4,5);
 //console.log(myArr1[0]);

 // Array Methods
  myArr.push(6);
  //console.log(myArr);

   myArr.pop();
  //console.log(myArr);
   //myArr.pop();
  //console.log(myArr);

  myArr.unshift(9);
  //console.log(myArr);
  //myArr.unshift(10);
  //console.log(myArr);
   
  myArr.shift();
  //console.log(myArr);
 
  //console.log(myArr.includes(10));
  //console.log(myArr.indexOf(9));
  // console.log(myArr.indexOf(2));
  
   const newArr = myArr.join("+");   // join method convert the array into the string on the bacis of your need
   // console.log(myArr);
   // console.log(newArr);
   // console.log(typeof newArr);
   // console.log(typeof myArr);

   const marvel_Heroes = ["spiderman","iron man","thor","hulk"];
   const dc_Heroes = ["superman","batman","saktimaan"];
   // marvel_Heroes.push(dc_Heroes);
  // console.log(marvel_Heroes);
  // console.log(marvel_Heroes[4][2]);

  const allHeroes = marvel_Heroes.concat(dc_Heroes);
  // console.log(allHeroes);

  const all_new_heroes = [...marvel_Heroes,...dc_Heroes]; // second method for array concatinating
  // console.log(all_new_heroes);

  const another_array = [1,2,3, [4,5,6],7, [6,7, [4,5] ]];
// console.log(another_array);
  const real_another_array = another_array.flat(Infinity);
  // console.log(real_another_array);

  console.log(Array.isArray("hitesh"));
  console.log(Array.from("hitesh"));
  console.log(Array);
  
  
  
  
  


  
  
   
   
   
   
   
   
  
  
  
  