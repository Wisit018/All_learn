// *****************************************
// เงื่อนไข แบบ Switch Case

// รูปแบบคำสั่ง  
// [ คำสั่ง break = จำทำให้โปรแกรมกระโดดออกไปทำงานนอกคำสั่ง switch ถ้าไม่มีคำสั่ง break โปรแกรมจะทำคำสั่งต่อไปเรื่อยๆ จนจบการทำงาน]

// switch(สิ่งที่ต้องการตรวจสอบ){
//     case ค่าที่ 1 : คำสั่งที่ 1;
//     break;    
//     case ค่าที่ 2 : คำสั่งที่ 2;
//     break;
//     ......
//     case ค่าที่ N : คำสั่งที่ N;
//     break;

//     default:คำสั่งเมื่อไม่มีค่าที่ตรงกับที่ระบุใน case
// }

// *****************************************
// EX1 

// let month = 16
// let name_month;

// switch(month){
//     case 1 : name_month="เดือนมกราคม ภาษาอังกฤษ January"
//     break;
//     case 2 : name_month="เดือนกุมภาพันธ์ ภาษาอังกฤษ February"
//     break;
//     case 3 : name_month="เดือนมีนาคม ภาษาอังกฤษ March"
//     break;
//     case 4 : name_month="เดือนเมษายน ภาษาอังกฤษ April"
//     break;
//     case 5 : name_month="เดือนพฤษภาคม ภาษาอังกฤษ May"
//     break;
//     case 6 : name_month="เดือนมิถุนายน ภาษาอังกฤษ June"
//     break;
//     case 7 : name_month="เดือนกรกฎาคม ภาษาอังกฤษ July"
//     break;
//     case 8 : name_month="เดือนสิงหาคม ภาษาอังกฤษ August"
//     break;
//     case 9 : name_month="เดือนกันยายน ภาษาอังกฤษ September"
//     break;
//     case 10 : name_month="เดือนตุลาคม ภาษาอังกฤษ October"
//     break;
//     case 11 : name_month="เดือนพฤศจิกายน ภาษาอังกฤษ November"
//     break;
//     case 12 : name_month="เดือนธันวาคม ภาษาอังกฤษ December"
//     break;
    
//     default: name_month="ไม่พบข้อมูล"

// }

// console.log(name_month)

// *****************************************

// EX2 แบบ if else

// let status = 2; // ปิดไฟ // ๅ ปิดไฟ
// let light;

// if(status==0){
//     light="ปิดไฟ"
// }else if(status == 1){
//     light="เปิดไฟ"
// }else{
//     light="ไม่พบข้อมูล"
// }
// // console.log(typeof status)
// console.log(light)

// *****************************************

//EX2 แปลงเป็นรูปแบบ Switch

// let status = 2; // ปิดไฟ // ๅ ปิดไฟ
// let light;

// switch(status){
//     case 0 : light="ปิดไฟ"
//     break;
//     case 1 : light="เปิดไฟ"
//     break;
//     default : light="ไม่พบข่อมูล"
// }

// console.log(light)
