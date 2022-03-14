function validateForm() {
	let x = document.forms["myForm"]["fname"].value
	// lấy name trong forms
	if(x == "") { // rỗng thì in ra alert
		alert("Name must be fill out")
		return false
	}
}