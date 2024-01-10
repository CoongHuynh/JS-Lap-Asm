/*Lab 4.5. Giới thiệu về Array (15 phút)

1. Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Bạn có thể sử dụng các giá trị đã dùng trước đó. 
2. Lưu array này vào một biến là 'populations'.
3. In ra console xem liệu array có 4 phần tử hay không (true hoặc false).
4. Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. Sử dụng hàm 'percentageOfWorld1'
mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm. */
'use strict';
const populations = [6, 1441, 331, 1393];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];

console.log(percentages);