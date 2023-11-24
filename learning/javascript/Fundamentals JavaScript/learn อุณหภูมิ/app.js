// function tocelsius()
// {
//     let fahrenheit = prompt("Fahrenheit: ")
//     let value = (fahrenheit - 32) * 5 / 9 
//     document.getElementById("answer_section").innerHTML = value.toFixed(2) + " ° C"
// }

// function toFah()
// {
//     let toFah = prompt("Celsius: ")
//     let value = (toFah *9/5)+32
//     document.getElementById("answer_section").innerHTML = value.toFixed(2) + " °F "
// }

// let Choose = prompt("ระบุค่าที่จะแปรง FC หรือ CF ")
// if(Choose == "FC"){
//     tocelsius()
// }
// else{
//     toFah()
// }

function tocelsius(fahrenheit)
{
    let value = (fahrenheit - 32) * 5 / 9 
    return value.toFixed(2) + " ° C"
}

function display(elementId, value)
{
    document.getElementById(elementId).innerHTML = value
}

function toFah(toFah)
{
    let value = (toFah *9/5)+32
    return value.toFixed(2) + " °F "
}

// alert(tocelsius(150))
// display("tocelsius",tocelsius(150))

// alert(toFah(150))
// display("toFah",toFah(1520))
function tocelsiusProgram(value)
{
    alert(tocelsius(value))
}

function tofahProgram(value)
{
    alert(toFah(value))
}