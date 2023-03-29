let num = parseInt(prompt("Nhập vào một số:"));
let squareRoot = Math.sqrt(num);
if (squareRoot % 1 === 0) {
  console.log(num + " là số chính phương.");
} else {
  console.log(num + " không phải là số chính phương.");
}
