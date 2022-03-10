var inputName = prompt("Nhập chữ cái viết hoa nào đó")
            switch (inputName) {
               case 'A': document.write("Đúng là chữ A <br />");
               break;
            
               case 'B': document.write("Đây là chữ B <br />");
               break;
            
               case 'C': document.write("Chính là chữ C <br />");
               break;
            
               case 'D': document.write("Chữ D <br />");
               break;
            
               case 'F': document.write("Chữ cuối cùng là F <br />");
               break;
            
               default:  document.write("Không biết đây là chữ gì.. <br />")
            }
            document.write("Exiting switch block");

// trong switch sẽ có một biểu thức giống như điều kiện
// case : '..' sẽ xét đeiều kiên trong switch nếu đúng chính xác sẽ hiện ra sau :
// nếu không có giá trị nào của switch phù hợp với case thì code sẽ chạy đến default 
// break rất quan trọng, nếu không có sẽ không thể sext từng ddeiefu kiện mà sẽ in ra tất cả các case