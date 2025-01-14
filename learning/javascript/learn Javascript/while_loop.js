// =============================
// ทำซำ้ ( Loop ) มี 3 แบบ จะทำงานเรื่อยๆจนกว่าเจอเงื่อนไข เท็จจึงหยุดทำงาน
// 1. While 2. For 3. Do..While
// คำสั่งเกี่ยวกับ Loop
// break = ( คำสั่งจะหลุดจากการทำงานในลูปทันที เพื่อไปทำคำสั่งนอกลูป )
// continue = ( คำสั่งจะทำให้หยุดทำงานแล้วย้อนกลับไปเริ่มต้นการทำงานที่ต้นลูปใหม่ )

// =============================

// ข้อแตกต่างและการใช้งาน Loop
// For : ใช้ในกรณีรู้จำนวนรอบที่ชัดเจน
// While : ใช้ในกรณีที่ไม่รู้จำนวณรอบ
// Do..While ใช้ในกรณีที่อยากให้ลองทำก่อน 1 รอบแล้วทำซำ้ไปเรื่อยๆ ตราบที่เงื่อนไขเป็นจริง

// # 1 =============================

// While loop 

// while(เงื่อนไข){
//     คำสั่งที่จะทำซำ้เมื่อเงื่อนไขเป็นจริง;
// }

// EX 1 While loop =============================

// let count = 1; // ตัวแปรนับจำนวนรอบ

// while(count <= 3){
//     console.log("Hello world") // 1 | 2
//     count++; // 1 => 2 | 2 => 3
// }

// EX 2 While loop =============================

// let count = 1; // ตัวแปรนับจำนวนรอบ

// while(count <= 5){
//     console.log("ผลิตสินค้าชิ้นที่ = ",count) // 1 | 2
//     if(count==3){
//         break;
//     }
//     count++;
// }

// # 2 =============================

// for Loop

// for(ค่าเริ่มต้นของตัวแปร; เงื่อนไข; เปลี่ยนแปลงค่าตัวแปร){
//     คำสั่งเมื่อเงื่อนไขเป็นจริง;
// }

// for(let count =1; count<=5; count++){
//     console.log("*")
// }

// # 3 =============================

// Do..While : ลองทำก่อน 1 ครั้ง false ค่อยออก ต่างกับ While ที่ไม่ลองทำเลย

// do{
//     คำสั่งต่างๆเมื่อเงื่อนไขเป็นจริง;
// }while(เงื่อนไข);

// EX 1 Do..While =============================

// let count = 10;

// do{
//     console.log(count);
//     count++;
// }while(count>5);

// =============================

// for(let count = 1 ; count<=10;count++){
//     if(count==5)break;
//     console.log(count);
// }

// console.log("จบโปรแกรม")

// =============================

// เข้าถึงสมาชิกใน Array ด้วย For loop

// =============================
//ex1

// let coler = ["แดง","นำ้เงิน","ฟ้า","เหลือง"]

// // i = 0 i<5
// // console.log(coler[0])
// // console.log(coler[1])
// // console.log(coler[2])
// // console.log(coler[3])
// // console.log(coler[4])  // เข้าถึงแบบปกติ

// for(let i = 0; i<coler.length;i++){
//     console.log(i);
// }

// =============================

// เข้าถึงสมาชิกใน Array ด้วย ForEach

// =============================
// ex1

// let coler = ["แดง","นำ้เงิน","ฟ้า","เหลือง"]

// coler.forEach(mydata);

// function mydata(item){
//     console.log(item);
// }






