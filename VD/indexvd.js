let number = prompt("Nhập một số bất kỳ:");

let isPrime = true;

// Kiểm tra nếu số nhập vào là 2 hoặc lớn hơn
if (number.in >= 2) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  isPrime = false;
}

// Hiển thị kết quả
if (isPrime) {
  alert(`${number} là số nguyên tố`);
} else {
  alert(`${number} không phải là số nguyên tố`);
}
