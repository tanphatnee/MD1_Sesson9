let year = parseInt(prompt("Nhập vào một năm bất kỳ:"));

if (isNaN(year)) {
  console.log("Đây không phải là một năm hợp lệ!");
} else {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} là năm nhuận.`);
  } else {
    console.log(`${year} không phải là năm nhuận.`);
  }
}
