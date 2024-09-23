/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


// Brute force Solution

var setZeroes = function(matrix) {
    for(let i=0;i<matrix.length;i++){
     for(let j=0;j<matrix[i].length;j++){
         if(matrix[i][j]===0){
             markRow(i);
             markCol(j);
         }
     }
    }
    function markRow(i){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]!=0){
                matrix[i][j]=-1;
            }
        }
    }
    function markCol(j){
        for(let i=0;i<matrix.length;i++){
            if(matrix[i][j]!=0){
                matrix[i][j]=-1;
            }
        }
    } 
    for(let i=0;i<matrix.length;i++){
     for(let j=0;j<matrix[i].length;j++){
         if(matrix[i][j]===-1){
             matrix[i][j]=0;
         }
     }
    }
    
 };
 
 
 
 