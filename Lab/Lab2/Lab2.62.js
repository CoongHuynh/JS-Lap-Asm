'use strict';
/*Mark và John đang cố so sánh chỉ số BMI (Body Mass Index) của họ, được tính bằng công thức:
 BMI = mass/[(height)^2)] = mass/(height*height) (mass tính bằng kg và height tính bằng mét).

1. Nhiệm vụ của bạn:

Lưu khối lượng và chiều cao của Mark và John vào các biến.
Tính chỉ số BMI của John và Mark theo công thức (bạn có thể tính cả hai).
Tạo biến Boolean 'markHigherBMI' chứa thông tin về việc liệu
 chỉ số BMI của Mark có cao hơn BMI của John không.
 
Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.*/
//thông tin của Mark
let markMass = 78;
let markHeight = 1.69;
//Thông tin của John
let johnMass = 92;
let johnHeight = 1.95;

// //Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.
// markMass = 95;
// markHeight = 1.88;
// //Thông tin của John
// johnMass = 85;
// johnHeight = 1.76;

//Chỉ số BMI của Mark và John
let markBMI = markMass (markHeight * markHeight);
let johnBMI = johnMass (johnHeight * johnHeight);

//So sánh chỉ số của Mark và John
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI} is heigher than John's BMI(${johnBMI}) )`);
}else if (markBMI < johnBMI){
    console.log(`John's BMI (${johnBMI}) is heigher than Mark's BMI (${markBMI})`);
}else {
    console.log("Mark and John have the same BMI!")
}
