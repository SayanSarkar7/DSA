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

//Better Approach with TC = O[n2]
/* We will take two one dimentional arrays representing rows and columns. If we find 0's in that matrix then the corresponding rowArray and columnArray will be marked.Finally we will check that if any one of rowArray and columnArray is marked then the element will be 0.  */

/*
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
}; */

// same logic but different coding style

function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  // const row = new Array(n).fill(0); // row array
  // const col = new Array(m).fill(0); // col array
  let col0 = 1;
  // Traverse the matrix:
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        if (j != 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
        matrix[i][0] = 0;
      }
    }
  }

  // Finally, mark all (i, j) as 0
  // if row[i] or col[j] is marked with 1.
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = matrix[0].length - 1; j > 0; j--) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][0] === 0 || matrix[0][j] === 0) {
      matrix[0][j]=0;
    }
  }
  for(let i=0;i<matrix.length;i++){
    if(matrix[i][0]===0 || col0===0){
      matrix[i][0]=0;
    }
  }
  return matrix;
}

const matrix = [
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
  console.log(row.join(" "));
}




