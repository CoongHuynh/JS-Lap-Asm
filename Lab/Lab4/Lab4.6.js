/*Lab 4.6. Các phép toán cơ bản với array (25 phút)

1. Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. 
Lưu array vào biến 'neighbours'.
2. Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn.
 Vậy hãy thêm nó vào cuối array 'neighbours'.
3. Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
4. Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.
5. Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours', rồi sử dụng nó để thay 
đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.*/

'use strict';
const neighbours = ['Sweden', 'Norway', 'Denmark'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

const index = neighbours.indexOf('Norway');
if (index !== -1) {
  neighbours[index] = 'Republic of Sweden';
}

console.log(neighbours);