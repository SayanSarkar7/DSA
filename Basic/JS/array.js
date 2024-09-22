
// performing sort()
let myArr=[2,77,4,33,0,9];
//  myArr.sort();
//  console.log(myArr); //  o/p:  [ 0, 2, 33, 4, 77, 9 ]
 
myArr.sort((a,b)=>{
    return a-b;
})
console.log(myArr); // o/p: [ 0, 2, 4, 9, 33, 77 ]




