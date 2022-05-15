const m1 = math.matrix([[5, 2], [8, 4], [5, 6]]);
const m2 = math.matrix([[1,-1], [2,-2], [9,-3]]);

// Matrix Subtraction
const matrixSub = math.subtract(m1, m2);

// Result 
document.getElementById("demo").innerHTML = matrixSub;