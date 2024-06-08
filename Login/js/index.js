var user = [];
user = JSON.parse(localStorage.getItem('user'))

var singInEmail = document.getElementById('signEmail');
var singInPassword = document.getElementById('signPassword');



document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value == '' || singInPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class = 'text-center'>All inputs is required</p>`
    }
    else {
        checkUser();
    }
})



function checkUser() {
    for (var i = 0; i < user.length; i++) {
        if (singInEmail.value == user[i].email && singInPassword.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('userName', y);
            location.href = "file:///C:/Users/Dodo/Desktop/loginTask/home/index.html";
            break;
        }
    }
}

// function checkUser() {
//     for (var i = 0; i < user.length; i++) {
//         if (singInEmail.value == user[i].mail && singInPassword.value == user[i].password) {
//             var y = user[i].name;
//             localStorage.setItem('userName', y);
//             // location.href = '../../home/index.html';
//             // location.href = "../Sing Up/index.html";
//             break;
//         }
//     }

// }
















