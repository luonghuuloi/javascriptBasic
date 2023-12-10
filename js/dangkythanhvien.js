function checkEmail(email){
    return /^\w+(\.\w+)*@\w+(\.\w+)+$/.test(email);
 }
 function save(){
     var acc = document.getElementById("acc").value;
     var pass = document.getElementById("pass").value;
     var passagain = document.getElementById("passagain").value;
     var fullname = document.getElementById("fullname").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var address = document.getElementById("address").value;
     var gender = "";
     if(document.getElementById("male").checked){
         gender = document.getElementById("male").value;
     }
     else if(document.getElementById("famale").checked){
         gender = document.getElementById("famale").value;
     }

     if(_.isEmpty(acc)){
         acc = "";
         document.getElementById("acc-error").innerHTML = "Tên tài khoản không được trống";
     }
     else if(acc.length <= 5){
         acc = "";
         document.getElementById("acc-error").innerHTML = "Tên tài khoản phải dài hơn 5 ký tự";
     }
     else{
        document.getElementById("acc-error").innerHTML = "";
     }

     if(_.isEmpty(pass)){
         pass = "";
         document.getElementById("pass-error").innerHTML = "Mật khẩu không được trống";
     }
     else{
        document.getElementById("pass-error").innerHTML = "";
     }
     if(_.isEmpty(passagain)){
         passagain = "";
         document.getElementById("passagain-error").innerHTML = "Bạn phải nhập lại mật khẩu";
     }
     else if(passagain != pass){
         passagain = "";
         document.getElementById("passagain-error").innerHTML = "Nhập lại phải giống mật khẩu";
     }
     else{
        document.getElementById("passagain-error").innerHTML = "";
     }
     if(_.isEmpty(fullname)){
         fullname = "";
         document.getElementById("fullname-error").innerHTML = "Vui lòng nhập họ tên";
     }
     else if(fullname.length <= 2){
         fullname = "";
         document.getElementById("fullname-error").innerHTML = "Họ tên phải lớn hơn 2 ký tự";
     }
     else{
         document.getElementById("fullname-error").innerHTML = "";
     }
 
     if(_.isEmpty(email)){
         email = "";
         document.getElementById("email-error").innerHTML = "Vui lòng nhập Email";
     }
     else if(!checkEmail(email)){
         email = "";
         document.getElementById("email-error").innerHTML = "Email không đúng định dạng";
     }
     else{
         document.getElementById("email-error").innerHTML = "";
     }
 
     if(_.isEmpty(phone)){
         phone = "";
         document.getElementById("phone-error").innerHTML = "SĐT không được trống";
     }
     else if(phone.trim().length > 10 || phone.trim().length < 10){
         phone = "";
         document.getElementById("phone-error").innerHTML = "SĐT phải là 10 số";
     }
     else{
         document.getElementById("phone-error").innerHTML = "";
     }
 
     if(_.isEmpty(address)){
         address = "";
         document.getElementById("address-error").innerHTML = "Địa chỉ không được trống";
     }
     else{
         document.getElementById("address-error").innerHTML = "";
     }
     if(_.isEmpty(gender)){
         gender = "";
         document.getElementById("gender-error").innerHTML = "Vui lòng chọn giới tính";
     }
     else{
         document.getElementById("gender-error").innerHTML = "";
     }
     if(acc && pass && passagain && fullname && email && phone && address && gender){
         var students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
         students.push(
             {
                 acc: acc,
                 pass: pass,
                 passagain: passagain,
                 fullname: fullname,
                 email: email,
                 phone: phone,
                 address: address,
                 gender: gender,
             }
         );
             localStorage.setItem("students", JSON.stringify(students));
             this.renderListStudent();
   
     }
 }
 function renderListStudent(){
     var students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
     if(students.length === 0){
         document.getElementById("list-student").style.display = "none";
         return false;
     }
     document.getElementById("list-student").style.display = "block";
     var tableContent = ` <tr>
     <td>STT</td>
     <td>Tên tài khoản</td>
     <td>Mật khẩu</td>
     <td>Nhập lại mật khẩu</td>
     <td>Họ và tên</td>
     <td>Email</td>
     <td>SĐT</td>
     <td>Địa chỉ</td>
     <td>Giới tính</td>
     <td>Hành động</td>
 </tr>`;
 
 students.forEach((student, index) =>{
     var studentID = index;
     var genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
     index++;
     tableContent += ` <tr>
     <td>${index}</td>
     <td>${student.acc}</td>
     <td>${student.pass}</td>
     <td>${student.passagain}</td>
     <td>${student.fullname}</td>
     <td>${student.email}</td>
     <td>${student.phone}</td>
     <td>${student.address}</td>
     <td>${genderLabel}</td>
     <td>
         <a href='#' onclick = 'deleteStudent(${studentID})' >Xóa</a>
     </td>
 </tr>`;
 })
 document.getElementById("grid-students").innerHTML = tableContent;
 }
 function deleteStudent(id){
     var students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : [];
     students.splice(id, 1);
     localStorage.setItem('students', JSON.stringify(students));
     renderListStudent();
 }