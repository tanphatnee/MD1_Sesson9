let date = parseInt(prompt("Nhập ngày sinh của bạn:"));
let month = parseInt(prompt("Nhập tháng sinh của bạn (dạng số):"));

if (month === 1 && date >= 20 || month === 2 && date <= 18) {
  alert("Bạn thuộc cung Bảo Bình");
} else if (month === 2 && date >= 19 || month === 3 && date <= 20) {
  alert("Bạn thuộc cung Song Ngư");
} else if (month === 3 && date >= 21 || month === 4 && date <= 19) {
  alert("Bạn thuộc cung Bạch Dương");
} else if (month === 4 && date >= 20 || month === 5 && date <= 20) {
  alert("Bạn thuộc cung Kim Ngưu");
} else if (month === 5 && date >= 21 || month === 6 && date <= 21) {
  alert("Bạn thuộc cung Song Tử");
} else if (month === 6 && date >= 22 || month === 7 && date <= 22) {
  alert("Bạn thuộc cung Cự Giải");
} else if (month === 7 && date >= 23 || month === 8 && date <= 22) {
  alert("Bạn thuộc cung Sư Tử");
} else if (month === 8 && date >= 23 || month === 9 && date <= 22) {
  alert("Bạn thuộc cung Xử Nữ");
} else if (month === 9 && date >= 23 || month === 10 && date <= 22) {
  alert("Bạn thuộc cung Thiên Bình");
} else if (month === 10 && date >= 23 || month === 11 && date <= 21) {
  alert("Bạn thuộc cung Bọ Cạp");
} else if (month === 11 && date >= 22 || month === 12 && date <= 21) {
  alert("Bạn thuộc cung Nhân Mã");
} else if (month === 12 && date >= 22 || month === 1 && date <= 19) {
  alert("Bạn thuộc cung Ma Kết");
} else {
  alert("Ngày hoặc tháng không hợp lệ!");
}
