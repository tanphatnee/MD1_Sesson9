let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (a + b > c && b + c > a && c + a > b) {
  console.log("Đây là một tam giác");
} else {
  console.log("Đây không phải là một tam giác");
}
