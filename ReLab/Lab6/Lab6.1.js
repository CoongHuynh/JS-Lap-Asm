"use strict";
/*Cho một loạt các nhiệt độ tối đa đã được dự báo, nhiệt kế hiển thị một string với các nhiệt độ đã cho.
 Ví dụ: [17, 21, 23] sẽ in ra console "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."

1. Nhiệm vụ của bạn

Tạo hàm 'printForecast' lấy array 'arr' và in một string như trên ra console. Hãy thực hành với 
cả hai dữ liệu kiểm tra.
2. Dữ liệu kiểm tra

Dữ liệu 1: [17, 21, 23]
Dữ liệu 2: [12, 5, -5, 0, 4]*/

//1
function printForecast(arr) {
  let forecast = "";
  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(forecast);
}

//Dữ liệu 1
const temperatures1 = [17, 21, 23];
printForecast(temperatures1);

//Dữ liệu 2
const temperatures2 = [12, 5, -5, 0, 4];
printForecast(temperatures2);
