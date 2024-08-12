const nos = [1, 2, 3, 10, 4, 5, 9];

// short method
// 1.find max no from array using Math.max()
console.log(`Max no: ${Math.max(...nos)}`);

let maxNo = nos[0];
nos.map(no => {
  if(no > maxNo) {
    maxNo = no;
  }
});
console.log(`Max no: ${maxNo}`);
// 2. find min no from array
// with built-in method
console.log(`Min no: ${Math.min(...nos)}`);
// long method
let minNo = nos[0];
nos.map(no => {
  if(no < minNo) {
    minNo = no;
  }
});
console.log(`Min no: ${minNo}`);
