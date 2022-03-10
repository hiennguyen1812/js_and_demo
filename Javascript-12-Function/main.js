function clickBtn (first, last) { // tạo function với 2 tham số
	var fullName = first + last //tạo biểu thức để kết hợp giữa 2 tham số
	return fullName //trả về
}
function printOut() { // tạo function 2 để in ra
	var printUI;
	printUI = clickBtn("Nguyễn", "Hiển")
	document.write(printUI)
}


clickBtn()