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
function ncr(n,r){
    let res=1;
    for(let i=0;i<r;i++){
        res=res*(n-i);
        res/=(i+1);    // 10c3= (10/1)*(9/2)*(8/3)
    }
    return res;
}
const result1=ncr(5-1,3-1);
console.log(result1);

