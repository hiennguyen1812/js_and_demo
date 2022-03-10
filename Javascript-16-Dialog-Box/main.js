function getInfo() { // khai báo function
	var putInfo = confirm("Có muốn tiếp tục?") // khai báo putInfo với bảng hiển thị confirm
	if(putInfo == true) {
		document.write("User muốn tiếp tục!")
		return true
		//user click vào có sẽ in ra document.write
	}
	else {
		document.write("User không muốn tiếp tục!")
		return false
		//user click vào không sẽ in ra document.write
	}
}