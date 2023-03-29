let mathScore = parseFloat(prompt("Nhập điểm Toán:"));
let physicsScore = parseFloat(prompt("Nhập điểm Lý:"));
let chemistryScore = parseFloat(prompt("Nhập điểm Hoá:"));
let literatureScore = parseFloat(prompt("Nhập điểm Văn:"));
let englishScore = parseFloat(prompt("Nhập điểm Anh:"));

let totalScore = mathScore + physicsScore + chemistryScore + literatureScore + englishScore;
let averageScore = totalScore / 5;
let percentage = averageScore * 10;

let grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

alert(`Điểm trung bình của bạn là ${averageScore.toFixed(1)}, xếp hạng của bạn là ${grade}`);
