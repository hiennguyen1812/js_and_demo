function myFunction() {
  const message = document.getElementById("p01"); // lấy id của p
  message.innerHTML = ""; // in ra html
  let x = document.getElementById("demo").value; // lấy id của input
  try { //khi try lỗi sẽ nhảy xuống catch
    if(x == "")  throw "is empty"; //nếu không điền gì vào inout thì in ra ""
    if(isNaN(x)) throw "is not a number";// trong input là chữ hoặc kí tự
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) { //in ra "Input" ở try và err(lỗi ở try)
    message.innerHTML = "Input " + err;
  }
}
myFunction()