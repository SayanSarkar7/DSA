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

