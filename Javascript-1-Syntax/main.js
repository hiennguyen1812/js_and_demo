document.write("I'm Javascripts")

// sử dụng dấu ;
const a = 10
const b =1
// khi đặt cùng 1 dòng thì phải có dấu ; để ngăn cách
const a  = 10 const a = 1 // bug

// fix
const a = 10; const a = 1

// chữ thường và hoa khi đặt tên biến
 var Abc = 10 // đúng
 var aBc = 1 //đúng
 const _123 = "Right" // đúng
 const 1cat  = "Wrong" //sai
 const &error = 1 //sai (không được chứa kí tự & * , (,))