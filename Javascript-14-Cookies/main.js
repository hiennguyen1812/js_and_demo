function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// cài đặt ngày hết hạn của cookies

function getCookie(cname) { // lấ y tên
  let name = cname + "="; // tạo biến name với văn bản cname + "="
  let decodedCookie = decodeURIComponent(document.cookie); // giải mã cookie để xử lý các kí tự đặc biệt
  let ca = decodedCookie.split(';'); //tách cookie
  for(let i = 0; i < ca.length; i++) { //cho mảng vào vòng lặp
    let c = ca[i]; // đọc ra từng gía trị của c
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
      // nếu được tìm thấy sẽ trae về
    }
  }
  return "";
  // không tìm thấy sẽ về ""
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}