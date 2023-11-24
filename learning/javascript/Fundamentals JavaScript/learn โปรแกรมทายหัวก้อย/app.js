// let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
// let score = 0
// for (var i = 0; i < round ; i++){
//     var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !")
//     var random_answer = ""
//     if(Math.floor(Math.random() *10) <= 4){
//         // หัว
//         random_answer = "หัว"
//     }
//     else{
//         // ก้อย
//         random_answer = "ก้อย"
//     }

//     if(answer == random_answer){
//         alert("ยินดีด้วยคุณตอบถูก")
//         score = score+1
//     }
//     else{
//         alert("แย่จัง คุณตอบผิด")
//     }
//     console.log(random_answer + " : " + answer)
//     document.getElementById("round").innerHTML = "รอบที่คุณเล่น" + " : " + round
//     document.getElementById("score").innerHTML = "ผลรวมคะแนน " + " : " + score
//     document.getElementById("game-list").innerHTML += "คำตอบที่ถูก" + random_answer + " : " + answer + "<br>"
// }


// วนลูปแบบ While ลูปแบบไม่มีจำกัด
// while(prompt("ถ้าจะออกพิมพ์ Exit") != "Exit"){
//     document.getElementById("game-list").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
// }

function sayhello()
{
    alert("hello234")
}
sayhello()

console.log()