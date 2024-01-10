'use strict';
// 1:Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. 
//   Dựa vào input này, hàm trả về string với định dạng như sau: 'Finland has 6 million people and its capital city is Helsinki'.
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  }
// 2: Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau.
//    Lưu các giá trị trả về ở 3 biến khác nhau, và in chúng ra console.
  const country1 = describeCountry('Finland', 6, 'Helsinki');
  const country2 = describeCountry('China', 1441, 'Beijing');
  const country3 = describeCountry('USA', 331, 'Washington D.C.');
  
  console.log(country1);
  console.log(country2);
  console.log(country3);