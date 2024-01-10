'use strict';
/*
    dùng hàm mũi tên để thực hiện các yêu cầu sau:
1.  Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population'
    và trả về phần trăm dân số thế giới theo dân số đã cho. Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.
2. Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
3. Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.
4. Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld4' và cũng gọi nó với 3 dân số theo quốc gia (có thể có cùng số dân).
*/

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentage7 = percentageOfWorld3(6);
const percentage8 = percentageOfWorld3(1441);
const percentage9 = percentageOfWorld3(331);

console.log(percentage7);
console.log(percentage8);
console.log(percentage9);

const percentageOfWorld4 = (population) => (population / 7900) * 100;
  
const percentage4 = percentageOfWorld4(6);
const percentage5 = percentageOfWorld4(1441);
const percentage6 = percentageOfWorld4(331);

console.log(percentage4);
console.log(percentage5);
console.log(percentage6);