// Function to add two matrices
function addMatrices(A, B) {
    const rows = A.length;
    const cols = A[0].length;
    let result = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }
    
    return result;
}

// Function to subtract one matrix from another
function subtractMatrices(A, B) {
    const rows = A.length;
    const cols = A[0].length;
    let result = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    
    return result;
}

// Function to multiply two matrices
function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;
    
    if (colsA !== rowsB) {
        throw new Error('Number of columns in A must equal the number of rows in B');
    }
    
    let result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
    
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return result;
}

// Function to compute the trace of a square matrix
function traceMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    if (rows !== cols) {
        throw new Error('Matrix must be square to compute the trace');
    }
    
    let trace = 0;
    for (let i = 0; i < rows; i++) {
        trace += matrix[i][i];
    }
    
    return trace;
}

// Example usage
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log('Matrix A:', A);
console.log('Matrix B:', B);

// Addition
console.log('Addition of A and B:', addMatrices(A, B));

// Subtraction
console.log('Subtraction of A and B:', subtractMatrices(A, B));

// Multiplication
console.log('Multiplication of A and B:', multiplyMatrices(A, B));

// Trace
console.log('Trace of Matrix A:', traceMatrix(A));
console.log('Trace of Matrix B:', traceMatrix(B));
