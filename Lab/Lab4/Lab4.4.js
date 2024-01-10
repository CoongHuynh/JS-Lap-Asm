/*
Lab 4.4. Hàm gọi hàm (15 phút)

1. Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất. Hàm này nhận hai đối số là 'country' và 'population',
 và trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
2. Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.
3. Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ. */
'use strict';
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  }
  
  const description1 = describePopulation('China', 1441);
  const description2 = describePopulation('India', 1393);
  const description3 = describePopulation('USA', 331);
  
  console.log(description1);
  console.log(description2);
  console.log(description3);