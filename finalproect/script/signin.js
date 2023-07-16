function handleLogin() {
    let userlogin=
    {
       "useremail":document.getElementById("useremail").value,
       "userpassword":document.getElementById("userpassword").value, 
    }
    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    localStorage.setItem('usersData', JSON.stringify(usersData));
    if (usersData === null) {
        localStorage.setItem('usersdata', JSON.stringify([userlogin]));
    } else {
        oldUsersData.push(userInf);
        localStorage.setItem('userlogin', JSON.stringify(oldUsersData));
    }}