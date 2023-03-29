let a = +(prompt("Nhập số a: "));
let b = +(prompt("Nhập số b: "));
let c = +(prompt("Nhập số c: "));
let max = a;
let min = b;

if (c > max) {
    max= c;
} 
if (b > max) {
    max= b;
}
if (a < min) { 
    min = a;
}
if (c < min) { 
    min = c;
}

alert("Max là "+ max);
alert("Min là "+ min);
