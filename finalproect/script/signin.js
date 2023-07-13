function handleLogin() {
    let useremail = document.getElementById('useremail').value;
    let password = document.getElementById('userpassword').value;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExists = false;

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].useremail === useremail && usersData[user].password === password) {
            let sessionToken = generateString(36).replace(' ', '');
            localStorage.setItem('sessionToken', sessionToken);
            usersData[user].sessionToken = sessionToken;
            userExists = true;
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
    }
    );

    if (userExists === false) {
        window.location.href = 'loginFailed.html';
    } else {
        window.location.href = 'loginSuccess.html';
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}