function checkValue(){
    var id = document.getElementById("dn").value;
    var password = document.getElementById("mk").value;
    if(id == ""){
        document.getElementById("dn").style.backgroundColor = 'red';
        return false;
    }
    else{
        document.getElementById("dn").style.backgroundColor ='white';
    }
    if(password == ""){
        document.getElementById("mk").style.backgroundColor = 'red';
        return false;
    }
    else{
        document.getElementById("mk").style.backgroundColor ='white';
    }

    if(document.getElementById("ghinho").checked == false){
        alert("Bạn chưa check ghi nhớ tài khoản");
        return false;
    }
    else{
        alert("Bạn đã chọn chức năng ghi nhớ tài khoản");
        alert("Đăng nhập thành công");
    }
    return true;
}