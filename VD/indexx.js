let month = prompt("Nhập vào tháng (ví dụ: 1, 2, 3,...)");

if (month >= 1 && month <= 3) {
  alert("Tháng " + month + " là mùa xuân");
} else if (month >= 4 && month <= 6) {
  alert("Tháng " + month + " là mùa hạ");
} else if (month >= 7 && month <= 9) {
  alert("Tháng " + month + " là mùa thu");
} else if (month >= 10 && month <= 12) {
  alert("Tháng " + month + " là mùa đông");
} else {
  alert("Tháng không hợp lệ");
}
