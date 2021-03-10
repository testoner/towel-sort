
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof (matrix) == "undefined") return [];
  let res = [];
  let p = 0;
  let z = 0;
  for (let i = 0; i < matrix.length; i++) {
    p = matrix[i];
    if (i % 2 != 0) {
      for (let j = p.length - 1; j >= 0; j--) {
        res.push(p[j]);
      }
    } else {
      for (let j = 0; j < p.length; j++) {
        res.push(p[j]);
      }
    }
  }
  return res;
}
