/*
//1. longer prefix match
a[i]<a[i+1]

// 2. find the lower element from the array (starting index (i+1) ) which is just grater than a[i] , then put it in place of a[i] or replace with a[i]

// 3. now sort the array whose starting index is (i+1)


*/

//algorithm
let index;
let arr = [ 1, 3, 2];
for (let i = arr.length-2; i >=0; i--) {
  if (arr[i] < arr[i + 1]) {
    index = i;
    break;
  }
}
for(let i=arr.length-1;i>=index+1;i--){
    if(arr[i]>arr[index]){
        console.log(arr);
        
        [arr[i],arr[index]]=[arr[index],arr[i]];
        console.log(arr);
        break;       
    }
}
arr.splice(index + 1, arr.length - index - 1, ...arr.slice(index + 1).reverse());
console.log(arr);

