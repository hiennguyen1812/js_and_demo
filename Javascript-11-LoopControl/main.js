var num = 0 // khởi tạo num =0

while(num < 15) { // điều kiện num < 15
	if(num == 10){
		break
		// nếu như num tăng đến 10 =>
		// break(dừng loop)
	}
	num++
	document.write(`Number break = ${num}  </br>`) //in ra màn hình
}


var conti = 0
while(conti < 12) {
	conti++
	if(conti == 5) {
		continue // skip qua giá trị conti =5 và tiếp tục vòng lặp
	}
	document.write(`Number continue = ${conti} </br>`)
}

document.write("bắt đầu vòng lặp </br>")
for(var i = 0; i < 6; i++) {
   document.write(`Vòng ngoài ${i} </br>`)
   for(var j =0; j < 6; j++){// j sẽ chạy lồng trong i
      if(j > 4) break; // vòng trong chạy từ 0 đến 4 và dừng
      if(i ==3 ) break;
      //khi i đến 3 sẽ không chạy vòng j lồng trong mà sẽ skip 
      // đến i bằng 4 sẽ chạy j lồng trong i bình thường
      if(i == 5) break; // vòng trong và ngoài sẽ dừng tại i = 5
      document.write(`Vòng trong: ${j} </br>`)
   }
}
document.write("End vòng lặp! <br />")

