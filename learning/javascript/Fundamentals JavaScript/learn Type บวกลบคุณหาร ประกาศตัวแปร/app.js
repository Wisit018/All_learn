// console.log("Hello Tarn")
// alert("Hello Tarn")

// var name = "Tarn"
// console.log(name)
// name = "WoW"
// console.log(name)

// var Firstname = ("Wisit")
// var Lastname = ("Phusakul")
// console.log(Firstname)
// console.log(Lastname)

// alert(Firstname+Lastname)

// var String = ("String+")
// var Int = (10)

// // Typeof เช็คค่าใน Var ว่าเป็น Type อะไร
// console.log(typeof 10)
// console.log(typeof true)
// console.log(typeof false)

// console.log(10/2)
// console.log("SS "+"+")
// var Demo = ("Hello "+"World")
// console.log(Demo)

// var age = (4+2*2/2*2+4+1-5+19)+91
// console.log(age)

// {
//     var x = 20
//     let y = 15
//     alert(y)
// }

// var x = 20
// {
//     var x = 100
//     let y = 15
// }
// console.log(x)

let lot_number = prompt("Input Number")
let random_number = document.getElementById("random").innerHTML = (Math.floor(Math.random() * 1000))
document.getElementById("you_number").innerHTML = lot_number

if(lot_number == random_number){
    document.getElementById("result").innerHTML = "ถูกรางวัล"
    
}
else{
    document.getElementById("result").innerHTML = "ว้าย ! ถูกแดก"
}



// console.log( 1 == 1)
// console.log( 2 == 2)
// console.log( 3 == "3")
// console.log( 5 == 6 )

// console.log( 3 === "6")
// console.log( 3 === "3")
// console.log( "3" != "4" )
// console.log( "4" !== 4 )

// console.log( 10 > 5 )
// console.log( 10+10 <= -20 )