// // number < -- > string ( int,float )

// let price = 20+""; //
// let abc = 20.00.toString();

// console.log(typeof price)
// console.log(typeof abc)

// // string --> number

// // let Age = parseInt("20"); // int
// // let Old = parseFloat("20"); // float

// // console.log(Age)
// // console.log(Old)


// ===========================================

// การรวม Array

// let Buy_one = ["ปากกา","ดินสอ","ยางลบ"]
// let Buy_two = ["ส้ม","มะละกอ","กล้วย"]
// let Buy_three = ["จอคอม","เมาส์","คียบอร์ด"]

// let Buy_all = Buy_one.concat(Buy_two,Buy_three)

// console.log(Buy_all)

// ===========================================

// เรียงลำดับใน Array

// let points = [20,-5,-2,40,100,-500,150];

// console.log("ปกติ = ",points);
// //น้อยไปมาก
// points.sort(function(a,b){
//     return a-b;
// });
// console.log("เรียงจากน้อยไปมาก = ",points);

// //มากไปน้อย
// points.sort(function(a,b){
//     return b-a;
// });
// console.log("เรียงจากมากไปน้อย = ",points);

//======================================================
// javascript Object

//ex
// let product = {
//     name : "Mouse",
//     price : "1500",
//     color : "Black",
//     category : "computer",
//     size : "M",
//     display:function(){
//         return "ชื่อสินค้า ="+this.name,"ราคา = "+this.price+" หมวดหมู่ ="+this.category;
//     }
// }

// console.log(product.display())

// console.log(product.name)