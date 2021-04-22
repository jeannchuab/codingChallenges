--- Directions
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
  matrix(2)
    [[1, 2],
    [4, 3]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
 matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]

Lógica:
// Fill the empty matrix util find a empty space OR i == N OR j == N)
// starting i++ and j++
// found a empty space or hit the border? increment i AND keep j equals 
// found a empty space or hit the border? i-- AND j--
// found a empty space or hit the border? keep j and i--
// found a empty space or hit the border? start againg i++ and j++

function spiralArray(n) {
    
    console.log('Create empty matrix n x n');
    //Create empty matrix n x n
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {        
        matrix[i] = new Array(n);        
    }
    
    console.log('Filling empty matrix with X');
    for (let i = 0; i < n; i++) {        
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 'X';
        }
    }
    
    console.log('Filling empty matrix in spiral | OPTION 1');    
    let i = 0;
    let j = 0;
    let old_j = 0;
    let old_i = 0;
    let number = 1
    let dimensions = n;

    const operations = {
        ADD: 'add',
        DEC: 'dec',
        NONE: 'none'
    }

    let op_j = operations.NONE;
    let op_i = operations.NONE;

    while(i < n && j < n) {

        if (matrix[i][j] == 'X') {
            matrix[i][j] = number;
            number++;
            
            if (number == (n * n) + 1) {
                break;
            }
        }

        if (j < dimensions - 1) {
            if (op_j != operations.DEC) {
                op_j = operations.ADD;
                op_i = operations.NONE;
            } else {
                if (j == (n - dimensions)) {
                    op_j = operations.DEC;
                    op_i = operations.DEC;
                }
            }                        
        } else {            
            if (i < dimensions - 1) {
                op_j = operations.NONE;
                op_i = operations.ADD;
            } else {
                op_j = operations.DEC;
                op_i = operations.NONE;
            }
        }

        //archive the old position
        old_i = i;
        old_j = j;

        switch (op_j) {
            case operations.ADD : 
                j++;
                break;
            case operations.DEC : 
                j--;
                break;
        }

        switch (op_i) {
            case operations.ADD : 
                i++;
                break;
            case operations.DEC : 
                i--;
                break;
        }

        //If hit the border
        if (j < 0) {
            j = 0;
        }

        if (i < 0) {
            i = 0;
        }

        if (matrix[i][j] != 'X') {
            //go to another direction
            i = old_i;
            j = old_j;

            dimensions--;

            if (op_i == operations.DEC && op_j == operations.DEC) {
                op_i = operations.NONE
                op_j = operations.ADD
            } else if (op_j == operations.ADD) {
                op_j = operations.NONE
                op_i = operations.ADD
            }
        }
    }

    console.log('Showing the matrix: ');
    printMatrix(n, matrix)
}

function printMatrix(n, matrix) {    
    for (let i = 0; i < n; i++) {
        console.log(matrix[i])
    }
}

// Enter the dimensions here:
spiralArray(2)



function calSum(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result = array[i] + result;
        console.log("Sum: " + result);
    }

    return result;
}

let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(calSum(array))