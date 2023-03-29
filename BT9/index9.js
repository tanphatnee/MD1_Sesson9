let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
let operator = prompt("Nhập phép tính (+, -, *, /, %, **):");

a = Number(a);
b = Number(b);

let result;

switch (operator) {
  case "+":
    result = a + b;
    console.log(`Tổng của ${a} và ${b} là: ${result}`);
    break;
  case "-":
    result = a - b;
    console.log(`Hiệu của ${a} và ${b} là: ${result}`);
    break;
  case "*":
    result = a * b;
    console.log(`Tích của ${a} và ${b} là: ${result}`);
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
      console.log(`Thương của ${a} và ${b} là: ${result}`);
    } else {
      console.log("Không thể chia cho 0");
    }
    break;
  case "%":
    if (b !== 0) {
      result = a % b;
      console.log(`Phần dư của ${a} chia ${b} là: ${result}`);
    } else {
      console.log("Không thể chia cho 0");
    }
    break;
  case "**":
    result = a ** b;
    console.log(`${a} mũ ${b} là: ${result}`);
    break;
  default:
    console.log("Phép tính không hợp lệ");
    break;
}
