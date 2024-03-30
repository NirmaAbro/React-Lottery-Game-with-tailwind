function generatenum(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 10));
}

function sum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}
export { generatenum, sum };
