//Given R & C, get the elememt at that place, r=5, c=3 ,i.e, ele=6
// ans= (R-1)c(C-1), i.e, ncr
/*
function fact(num){
    let res=1;
    for(let i=2;i<=num;i++){
        res*=i;
    }
    return res;
}

let result=fact(5-1)/(fact(2) * fact(2));
console.log(result);
*/
/*
function ncr(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res /= i + 1; // 10c3= (10/1)*(9/2)*(8/3)
  }
  return res;
}
const result1 = ncr(5 - 1, 3 - 1);
console.log(result1);

//-----------------------------------------------------------------
// Q> print any given row of pascle triangle
// ans*((row-col)/col)

let ans = 1;
for (let i = 1; i < row; i++) {
  ans = ans * (row - i);
  ans = ans / i;
}
*/
// Printing Full Pascle Triangle 

function nCr(n, r) {
    let res = 1;
  
    // calculating nCr:
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return parseInt(res);
}
  
function pascalTriangle(n) {
    const ans = [];
  
    //Store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
      const tempLst = []; // temporary list
      for (let col = 1; col <= row; col++) {
        tempLst.push(nCr(row - 1, col - 1));
      }
      ans.push(tempLst);
    }
    return ans;
}
  
const n = 5;
const ans = pascalTriangle(n);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
/*[ 1 ]
[ 1, 1 ]
[ 1, 2, 1 ]
[ 1, 3, 3, 1 ]
[ 1, 4, 6, 4, 1 ]*/
/*console.log(ans[i].join(" ") + "n");
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1*/
}
