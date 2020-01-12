const sebelumnya = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
console.log("Sebelunya : " + sebelumnya);
let Ascending = sebelumnya.sort(function(a, b) {
  return a - b;
});
console.log("Ascending : " + Ascending);
let Descending = sebelumnya.sort(function(a, b) {
  return b - a;
});
console.log("Descending : " + Descending);
