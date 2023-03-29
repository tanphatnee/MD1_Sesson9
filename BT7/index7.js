let height = parseInt(prompt("Nhập chiều cao của bạn (đơn vị cm):"));

if (height < 150) {
  console.log("Mày là người lùn à");
} else if (height >= 150 && height < 170) {
  console.log("Trông mày cũng tàm tạm. Cho 3 điểm");
} else {
  console.log("Mày trông cũng được đấy");
}
