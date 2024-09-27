/*
// T.C = O[n3]

var maxSubArray = function(nums) {
    let maxSum=Number.MIN_SAFE_INTEGER;
    let idx1,idx2;



    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            // let arr=[];
            let sum=0;
            for(let k=i;k<=j;k++){
                // arr.push
                sum+=nums[k];
            }
            if(sum>=maxSum){
                maxSum=sum;
                idx1=i;
                idx2=j;
            }
        }
    }
    return maxSum;
};
*/

//----------------------------------------------

// Better Approach=Don't take the sub arrays over and over, rather store the sum of previous subarray and use that. T.C = O[n2] 

/*

var maxSubArray = function(nums) {
    let maxSum=Number.MIN_SAFE_INTEGER;
    


    for(let i=0;i<nums.length;i++){
            let sum=0;
        for(let j=i;j<nums.length;j++){
            // let arr=[];
                sum+=nums[j];
            
            if(sum>=maxSum){
                maxSum=sum;
            }
        }
    }
    return maxSum;
};

*/

// Best Solution, i.e, Kadan's algorithm => Mainly Discards the negetive value, i.e, don't carry the negetive sum insted of make it zero. T.C = O[n]

let arr=[-2,-3,4,3,2,1,5,-3];
 let result=maxSum(arr);
 console.log(result);
 

 function maxSum(arr){
    let max=Number.MIN_SAFE_INTEGER;
    let sum=0;
    let startIdx=-1;
    let endIdx=-1;
    let strt=-1;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum>max){
            max=sum;
            startIdx=strt;
            endIdx=i;
        }
        if(sum<0){
            sum=0;
            strt=i+1;
        }
    }

    console.log(arr.slice(startIdx,endIdx+1));
    
    return max;
 }

