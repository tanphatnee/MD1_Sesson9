let month = prompt("Nhập vào tháng (ví dụ: 1, 2, 3,...)");

switch (month) {
  case "1":
  case "2":
  case "3":
    alert("Tháng " + month + " là mùa xuân");
    break;
  case "4":
  case "5":
  case "6":
    alert("Tháng " + month + " là mùa hạ");
    break;
  case "7":
  case "8":
  case "9":
    alert("Tháng " + month + " là mùa thu");
    break;
  case "10":
  case "11":
  case "12":
    alert("Tháng " + month + " là mùa đông");
    break;
  default:
    alert("Tháng không hợp lệ");
    break;
}

