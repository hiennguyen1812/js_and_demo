// toString
var numA = 18
document.write("Trước khi ép kiểu chuỗi" + numA+ "</br>")
numA = numA.toString()
document.write(`Sau khi ép kiểu ${typeof numA} +</br>`)

// đếm độ dài: length
var notifi = "Đếm độ dài trong chuỗi"
var notifiLeng = notifi.length;
document.write(`Độ dài của chuỗi là: ${notifiLeng} </br>`)


let thongBao = "Tìm vị trí của một chuỗi trong js"
let vitri = thongBao.indexOf("chuỗi")
document.write(`Vị trí của chuỗi 'chuỗi' là: ${vitri} </br>`)

let lastThongBao = "Tìm vị trí của 1 chuỗi mà nó xuất hiện cuối cùng"
let lastVitri = lastThongBao.lastIndexOf("1")
document.write(`Vị trí của chuỗi 'nó' cuối cùng là: ${lastVitri} </br>`)

let searchThongBao = "Tìm vị trí của 1 chuỗi trong js"
let searchVitriNum = searchThongBao.search("[0-9]")
let searchVitriText = searchThongBao.search("trong")
document.write(`Vị trí của số '1' là: ${searchVitriNum}  </br> Vị trí của chữ 'trong': ${searchVitriText}`)

let ict = searchThongBao.slice(7, 10)
document.write(`Cắt chuỗi dùng slice ${ict} </br>`)


