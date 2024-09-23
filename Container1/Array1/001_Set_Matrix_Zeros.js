/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Brute force Solution with T.C = O[n3]
/*
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
 */

//Better Approach
/* We will take two one dimentional arrays representing rows and columns. If we find 0's in that matrix then the corresponding rowArray and columnArray will be marked.Finally we will check that if any one of rowArray and columnArray is marked then the element will be 0.  */

var setZeroes = function (matrix) {
  let rowArr = [];
  let colArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowArr.push(i);
        colArr.push(j);
      }
    }
  }

  for (let j = 0; j < matrix[matrix[0]].length; j++) {
    for (let r = 0; r < rowArr.length; r++) {
      if (matrix[r][j] != 0) {
        matrix[r][j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let c = 0; c < colArr.length; c++) {
      if (matrix[i][c] != 0) {
        matrix[i][c] = 0;
      }
    }
  }
};
