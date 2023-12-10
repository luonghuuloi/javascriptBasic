function getGia(){
    var a = document.getElementById("xe");
    var s;
    s = a.innerText;
    document.getElementById("name").innerHTML = "Bạn đã mua Xe điều khiển thế hệ 1" + s;
    var gia = a.getAttribute("data-price");
    var s1 = document.getElementById("s1").value;
    document.getElementById("soluong").innerHTML = "Số lượng: " + s1;
    document.getElementById("amount").innerHTML = "Số tiền: $" + (s1*gia);
    
}