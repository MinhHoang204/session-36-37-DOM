function createStudent() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
}

if(studentId.length !== 6) {
    alert("Ma sinh vien phai gom 6 ki tu");
    return;
}

if (age < 18) {
    alert("Tuoi phai lon hon hoac bang 18");
    return;
}

const phoneRegex = / ^[0-9]{10,11}$/ ;
if(phoneRegex.test(phone)) {
    alert("So dien thoai phai co dinh dang 10 haoc 11 chu so");
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(email)) {
    alert("Email khong hop le");
}

const studentInfo = 'Ma sinh vien: $(studentId)<br>Ten sinh vien: $(studentName)<br>Tuoi: $(age)<br>So dien thoai: $(phone)<br>Email: $(email)';
document.getElementById('studentInfo').innerHTML = studentInfo;