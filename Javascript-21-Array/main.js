var age = [1,2,3,4,7]
var foo = age.length // thuộc tính đưa ra độ dài của mảng
document.write(foo + "</br>")

age.push(5) // thêm phần tử vào cuối
document.write(age + "</br>")
age.pop()
document.write(age + "</br>")// xóa phần tử ở cuối
age.shift()
document.write(age + "</br>")// xóa phần tử đầu


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.splice(2,2); //["Tuesday"]
document.write(days+ "</br>"); //["Sunday", "Monday", "Wednesday", "Thursday", "Friday"]
days.splice(2,0,'Tuesday');
document.write(days) //["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// cú pháp slice("bắt đầu","phần tử xóa","đối số được chèn vào")

//includes: kiểm tra sự tồn tại
document.write(age.includes(2)) // true
document.write(age.includes(6))// false