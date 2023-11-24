// let Score = prompt("คำแนนของคุณ : ")
// if(Score >= 80){
//     document.getElementById("result").innerHTML = "คุณได้เกรด A"
// }else if(Score >= 70){
//     document.getElementById("result").innerHTML = "คุณได้เกรด B"
// }else if(Score >= 60){
//     document.getElementById("result").innerHTML = "คุณได้เกรด C"
// }else if(Score >= 60){
//     document.getElementById("result").innerHTML = "คุณได้เกรด D"
// }else{
//     document.getElementById("result").innerHTML = " ตกครับ FFF"
// }

// for (เริ่มต้น; เงื่อนไข; การเพิ่มจำนวน) {
//     คำสั่งต่างๆในการวนซำ้
//     คำสั่งต่างๆในการวนซำ้
//     คำสั่งต่างๆในการวนซำ้
// }

// for(var counter = 0; counter <5; counter++){
//     // console.log("Hello" + counter)
//     // alert("Sawadee " + counter)
// }

let qrt = prompt("จำนวนสินค้า")
let sum = 0
for(var i = 1; i <= qrt; i++)
{
    let item_price = prompt("ราคาสินค้าชิ้นที่ " + i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + " : " + item_price + " บาท"+"<br>"
    
}
document.getElementById("result").innerHTML = "ราคารวม" + sum + " บาท"