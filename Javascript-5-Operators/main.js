var a = 18 
var b = 10
var c = " Dog"

document.write("Toán tử số học </br>")
var tong = a + b
document.write("a + b = ", tong, "</br>")
//có thể cộng cả chữ 
document.write(`a + b + c = ${a + b +c} </br>`)

var hieu = a -b
document.write("  a - b = ", hieu, "</br>")

var tich = a * b
document.write("  a * b = ", tich, "</br>")

var division = a / b 
document.write("  a / b = ", division,"</br>")
// lấy b chia a

var modun = a % b //chia lấy dư
document.write("  a % b = ", modun, "</br>")
//tiền tố
a= ++a // ++ tăng 1 đơn vị
document.write(`++a = ${a} </br>`)
b= --b // -- giảm 1 đơn vị
document.write(`--b =  ${b} </br>`)


document.write("Toán tử so sánh </br>")
// lớn hơn
document.write(`a > b => ${a > b} </br>`)
//nhỏ hơn
document.write(`a < b => ${a < b} </br>`)
// bằng
document.write(`a == b ${a ==b } </br>`)
// không bằng 
document.write(`a!= b ${a!=b} </br>`)
// lớn hơn hoặc bằng
 document.write(`a >= b = ${a >= b} </br>`)
 //nhỏ hơn hoặc bằng
 document.write(`a <= b = ${a<=b} </br>`)