// performing sort()
let myArr = [2, 77, 4, 33, 9];
//  myArr.sort();
//  console.log(myArr); //  o/p:  [ 0, 2, 33, 4, 77, 9 ]

// myArr.sort((a,b)=>{
//     return a-b;
// })
// console.log(myArr); // o/p: [ 0, 2, 4, 9, 33, 77 ]

// let max = Math.max(...myArr);
// let min = Math.min(...myArr);
// console.log(max, min); // o/p: 77 0

// let sumOfArr = myArr.reduce((a, b) => {
//   return a + b;
// },1);
// console.log( sumOfArr); //125+1(sum value initializes with value 1) = 126

let newArr=[...myArr].reverse();
console.log(myArr,"<-old------new->",newArr);


