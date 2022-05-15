const m1 = math.matrix([[1, 2], [3, 4], [5, 6]]);
const m2 = math.matrix([[1,-1], [2,-2], [3,-3]]);

// Matrix Addition in this constant 
const matrixAdd = math.add(m1, m2);

// Result [ [2, 1], [5, 2], [8, 3] ]
document.getElementById("demo").innerHTML = matrixAdd;