function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;

    if (u == "") {
        alert("Vui lòng nhập tên!");
        return false;
    }
    if (p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if (p2 != p1) {
        alert("Sai mật khẩu xác minh!");
        return false;
    }

    alert("Đăng ký thành công!");

    return true;
}