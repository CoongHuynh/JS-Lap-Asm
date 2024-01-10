'use strict';

// Dữ liệu của Mark
let markMass = 78; // khối lượng của Mark (kg)
let markHeight = 1.69; // chiều cao của Mark (m)

// Dữ liệu của John
let johnMass = 92; // khối lượng của John (kg)
let johnHeight = 1.95; // chiều cao của John (m)

//Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.
markMass = 95;
markHeight = 1.88;
//Thông tin của John
johnMass = 85;
johnHeight = 1.76;

// Tính chỉ số BMI của Mark và John
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

// So sánh chỉ số BMI của Mark và John
let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Mark's BMI is higher than John's:", markHigherBMI);