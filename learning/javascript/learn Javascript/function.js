//=============
// แบกปกติ
// console.log("Hello World")
// console.log("Hello World")
//=============

// แบบฟังค์ชั่น แบบไม่มีการรับค่าและส่งค่า
// function Demo(){
//     console.log("Hello World")
// }
// Demo() // เรียกฟังค์ชั่น

// function message(){
//     alert("แจ้งเตื่อนการโอนเงิน")
// }

// message()

// function display_name(){
//     document.write("Wisit Phusakul")
// }

//=============
// แบบฟังค์ชั่นที่มีการรับค่าเข้ามาทำงาน

// อาร์กิวเมนต์ : ตัวแปรหรือค่าที่ต้องการส่งมาให้กับฟังค์ชั่น (ตัวแปรส่ง)
// พารามิเตอร์ : ตัวแปรที่ฟังค์ชั่นสร้างไว้สำหรับรับค่าที่จะส่งเข้ามาให้กับฟังค์ชั่น (ตัวแปรรับ)


// function name(parameter1,paremeter2){
//     คำสั่ง
// }
// EX1 
// function plusnumber(x){
//     console.log("เลขที่ส่งมา",x); //x : พารามิเตอร์
// }
// plusnumber(5) // 5 : อาร์กิวเมนต์

// let Number = 200
// plusnumber(Number)


// function Full_name(Fname , Lname , City){
//     console.log("ชื่อจริง = " , Fname , "นามสกุล = " , Lname , "ที่อยู่ = ", City)
// }

// Full_name("Wisit","Phusakul","กทม")
// Full_name("Wisit","Phusakul","กทม")


// function sum(x,y){
//     let total = x+y;
//     console.log("ผลรวม = ",total);
// }

// sum(10,50)
// sum(100,5000)

//=============

// ฟังค์ชั่น แบบส่งค่าออกมา

// function get_ip(){
//     return "127.0.0.1"
// }

// let ip = get_ip()
// console.log(ip)

// function get_number(){
//     return 100*100;
// }

// let total = get_number()
// console.log("ผลการคูณ = ",total)

//================

// ฟังค์ชั่น รับค่า และ ส่งค่า

// EX.
// function Name(parameter1,paremeter2){
//     return ค่าที่ให้ออกไป
// }
//================
// function set_pay(money){
//     let bonus = 1000;
//     return money+bonus;
// }

// let a = set_pay(15000);
// a-=500;
// console.log("นาย A เงินเดือน = ",a)

// let b = set_pay(20000);
// console.log("นาย B เงินเดือน = ",b)
// //================
// function sum(x,y){
//     return x+y;
// }

// let Summ = (sum(50,100))
// console.log(Summ)
// //================

// function getname(Name,City){
//     return Name + City;
// }

// console.log(getname("Tarn ","BKK"))

// //================

// ฟังค์ชั่นแบบกำหนดค่าเริ่มต้น

//EX
// function Name(name="text",name2="test2"){
//     // คำสั่งต่างๆ
// }

// function Full_name(Fname , Lname , City="ไม่ระบุ"){ 
//     // City : กำหนดค่าเริ่มต้นเป็น ไม่ระบุ
//     console.log("ชื่อจริง = " , Fname , "นามสกุล = " , Lname , "ที่อยู่ = ", City)
// }

// Full_name("Wisit","Phusakul","กทม")
// Full_name("Wisit","Phusakul","กทม")
// Full_name("aa","bb")
// Full_name("cc","dd")
