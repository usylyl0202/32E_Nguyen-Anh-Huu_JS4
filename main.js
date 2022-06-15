/* BÀI TẬP 1
 Mô hình 3 khối 
 đầu vào  : nhập vào 3 số nguyên 
 xử lí :
 Gọi 3 số nguyên nhập vào lần lượt là : a, b, c
 ta tiến hành chia nhỏ từng cặp số và so sánh  : (a,b);(a,c);(b,c)
 nếu a>=b và b>=c => c<b<a
 nếu a>=c và c>=b => b<c<a
 nếu b>=a và a>=c => c<a<b
 nếu b>=c và c>=a => a<c<b
 nếu c>=a và a>=b => b<a<c
 nếu c>=b và b=>a => a<b<c
 đầu ra : xuất ra 3 số theo thứ tự tăng dần 
 */
document.getElementById('btnSapXep').onclick = function () {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var ketQua1 = '';
    if (so1 >= so2 && so2 >= so3) {
        ketQua1 = 'Thứ tự tăng dần của 3 số là: ' + so3 + ', ' + so2 + ', ' + so1;
    }
    else if (so1 >= so3 && so3 >= so2) {
        ketQua1 = 'Thứ tự tăng dần của 3 số là: ' + so2 + ', ' + so3 + ', ' + so2;
    }
    else if (so2 >= so1 && so1 >= so3) {
        ketQua1 = 'Thứ tự tăng dần của 3 số là: ' + so3 + ', ' + so1 + ', ' + so2;
    }
    else if (so2 >= so3 && so3 >= so1) {
        ketQua1 = 'Thứ tự tăng dần của 3 số là: ' + so1 + ', ' + so3 + ', ' + so2;
    }
    else if (so3 >= so1 && so1 >= so2) {
        ketQua1 = 'Thứ tự tăng dần của 3 số là: ' + so2 + ', ' + so1 + ', ' + so3;
    }
    else if (so3 >= so2 && so2 >= so1) {
        ketQua1 = 'Thứ tự tăng dần của 3 số là: ' + so1 + ', ' + so2 + ', ' + so3;
    }
    document.getElementById('ketQua1').innerHTML = ketQua1;
}
/* BÀI TẬP 2 */
/*
Mô hình ba khối bài tập 2
Đầu vào : nhập vào các lựa chọn của mình ở phần dropdown ở bài này là 5 trường hợp
Xử lí : mình lần lượt gắn value cho 5 giá trị là :
+ Ta lần lượt gán  B =  bố khi người dùng tích chọn B => xin chào bố
+ Ta lần lượt gán  M =  mẹ khi người dùng tích chọn => xin chào mẹ
+ Ta lần lượt gán  A = anh trai khi người dùng tích chọn => xin chào anh trai
+ Ta lần lượt gán  E = em gái khi người dùng tích chọn => xin chào em gái 
+ Ta lần lượt gán  C = người lạ khi người dùng tích chọn=> xin chào người lạ
Đầu ra : xuất ra lời chào tương ứng với tên thành viên
*/
document.getElementById('btnChao').onclick = function () {
    var chon = document.getElementById('chon').value;
    var ketQua2 = '';
    if (chon === 'B') {
        ketQua2 = 'Xin chào Bố!';
    }
    else if (chon === 'M') {
        ketQua2 = 'Xin chào Mẹ!';
    }
    else if (chon === 'A') {
        ketQua2 = 'Xin chào Anh Trai!';
    }
    else if (chon === 'E') {
        ketQua2 = 'Xin chào Em Gái!';
    }
    else if (chon === 'C') {
        ketQua2 = 'Xin chào Người nào đó!';
    }
    document.getElementById('ketQua2').innerHTML = ketQua2;
}
// BÀI TẬP 3
/*
Mô hình 3 khối :
đầu vào : Nhập từ màn hình vào 3 giá trị số nguyên bất kì 
xử lí :
+ Ta tiến hành khởi tạo 5 giá trị number1.number2,number3 và 1 biến đếm counter và 1 biến soLe
Nếu x % 2 === 0 thì biến counter + 1
Sau đó ta lấy 3 - soChan = soLe
biến soChan sẽ được hiểu tượng trưng cho số chẵn có trong bài 
đầu ra : xuất ra có bao nhiêu số chẵn và bao nhiêu số lẻ 
*/
document.getElementById('btnDem').onclick = function () {
    var x1 = Number(document.getElementById('x1').value);
    var x2 = Number(document.getElementById('x2').value);
    var x3 = Number(document.getElementById('x3').value);
    var soChan = 0;
    var soLe = 0;
    if (x1 % 2 === 0) {
        soChan = soChan + 1;
    }
    if (x2 % 2 === 0) {
        soChan = soChan + 1;
    }
    if (x3 % 2 === 0) {
        soChan = soChan + 1;
    }
    soLe = 3 - soChan;
    document.getElementById('ketQua3').innerHTML = 'Kết quả là: ' + soChan + ' Số chẵn. ' + soLe + ' Số lẻ';
}
/*
BÀI TẬP 4 :
mô hình 3 khối : 
đầu vào :  nhập vào 3 cạnh của tam giác lần lượt là a,b,c
xử lí : 
TH1 : nếu 3 cạnh nhập a = b =c => tam giác đều
TH2 : nếu 3 cạnh của tam giác có 2 cạnh bằng nhau và khác cạnh còn lại => tam giác đều
TH3 : nếu có 1 cạnh của tam giác bình phương bằng tổng bình phương 2 cạnh còn lại => tam giác vuông
Đầu ra : Tên của tam giác dựa vào 3 cạnh nhập vào
*/
document.getElementById('btnTamGiac').onclick = function () {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var ketQua4 = '';
    if ((a + b > c) && (a + c > b) && (b + c > a) &&
        (a > 0) && (b > 0) && (c > 0)) {
        // Kiểm tra điều các tam giác đặc biệt
        if ((a == b) && (b == c)) {
            ketQua4 = 'Đây là tam giác đều';
        } else if ((a == b) || (a == c) || (b == c)) {
            ketQua4 = 'Đây là tam giác cân';
        } else if ((a * a == b * b + c * c) ||
            (b * b == a * a + c * c) ||
            (c * c == a * a + b * b)) {
            ketQua4 = 'Đây là tam giác vuông';
        } else if (((a * a + b * b == c * c) && (a == b)) ||
            ((a * a + c * c == b * b) && (a == c)) ||
            ((b * b + c * c == a * a) && (b == c))) {
            ketQua4 = 'Đây là tam giác vuông cân';
        } else {
            ketQua4 = 'Đây là tam giác thường';
        }
    } else {
        ketQua4 = '3 cạnh của tam giác không thỏa mãn điều kiện lập thành tam giác!';
    }
    document.getElementById('ketQua4').innerHTML = ketQua4;

}