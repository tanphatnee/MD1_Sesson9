let mass = prompt("Nhập khối lượng cơ thể của bạn (kg):");
let height = prompt("Nhập chiều cao của bạn (cm):");
// Chuyển đổi đơn vị từ cm sang m
height = height / 100;

let bmi = mass / (height * height);
let classification;

if (bmi < 16) {
  classification = "Mày là bộ xương à";
} else if (bmi >= 16 && bmi < 18.5) {
  classification = "Mày là idol hàn quốc à";
} else if (bmi >= 18.5 && bmi < 25) {
  classification = "Mày đẹp zai đấy";
} else if (bmi >= 25 && bmi < 30) {
  classification = "Mày béo quá rồi đấy";
} else {
  classification = "Thôi ông không cần giảm nữa đâu";
}

alert(`Chỉ số BMI của bạn là ${bmi.toFixed(1)}. ${classification}`);
