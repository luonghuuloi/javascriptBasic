function them(sef){
    var row = sef.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("gh").appendChild(row);
    tinhTong();
}
function xoa(sef){
    var row = sef.parentElement.parentElement;
    document.getElementById("gh").removeChild(row);
    tinhTong();
}
function tinhTong(){
    var cart = document.getElementById("gh");
    var row = cart.getElementsByTagName("tr");
    var tong = 0;
    for(var i = 0;i < row.length;i++){
        var cell = row[i].getElementsByTagName("td");
        var price = parseInt(cell[1].innerText.substr(1));
        tong+=price;
    }
    document.getElementById("kq").innerHTML = tong;
    if(tong == 0){
        document.getElementById("empty").style.display = "";
        document.getElementById("not_empty").style.display = "none";
    }
    else{
        document.getElementById("empty").style.display = "none";
        document.getElementById("not_empty").style.display = "";
       
    }
}