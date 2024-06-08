var singUpName = document.getElementById('signName');
var singUpEmail = document.getElementById('signEmail');
var singUpPassword = document.getElementById('signPassword');
var user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
}
else {
    user = [];
}

function add() {
    if (singUpName.value == '' || singUpEmail.value == '' || singUpPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class='text-center'>All Inputs Is Required</p>`
    }
    else {
        var obj = {
            name: singUpName.value,
            email: singUpEmail.value,
            password: singUpPassword.value,
        }
        user.push(obj);
        // location.href = "../../Login/index.html";
        location.href = "C:/Users/Dodo/Desktop/loginTask/Login/index.html";
        
        localStorage.setItem('user', JSON.stringify(user));
    }
}

