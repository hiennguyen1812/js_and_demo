var petName = {dog: "tun", cat:"cho", fish: "chim" }
//khởi tạo obj gồm 3 phần tử
for (const props in petName) {
	document.write(`${props}: ${petName[props]} </br>`)
}
