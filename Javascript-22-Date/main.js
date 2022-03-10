function get() {
    var date = new Date();
    var data = 'Ngày trong tháng: ' + date.getUTCDate() + '<br />';
    //getUTCDate: lấy ngày trong tháng
    data += 'Ngày trong tuần: ' + date.getUTCDay() + '<br />';
    // lấy ngày trong tuần
    data += 'Tháng trong năm: ' + date.getUTCMonth() + '<br />';
    data += 'Năm đầy đủ: ' + date.getUTCFullYear() + '<br />';
    data += 'Giờ: ' + date.getUTCHours() + '<br />';
    data += 'Phút: ' + date.getUTCMinutes() + '<br />';
    data += 'Giây: ' + date.getUTCSeconds() + '<br />';
    data += 'Mili Giây: ' + date.getUTCMilliseconds() + '<br />';
    document.getElementById('result').innerHTML = data;
}
get()