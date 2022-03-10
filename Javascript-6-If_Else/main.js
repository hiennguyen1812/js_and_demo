var birthday = Number(prompt("Nhập ngày sinh của bạn"))
var ramdom = Number(prompt("Dự đoán ngày sinh người vừa nhập"))

if (ramdom < birthday) {
	document.write("Sai rồi, chưa đến đâu")
	//nhập random < birthday sẽ chạy if và không chạy qua 2 điều kiện dưới
} else if (ramdom == birthday) {
	document.write("Đúng rồi đấy");
	// khi điều kiện if sai sẽ xét đến else if, đúng thì in ra
	// "đúng rồi đấy" sai sẽ xét đến else
} else {
	document.write("Sai, sinh nhật qua rồi")
}