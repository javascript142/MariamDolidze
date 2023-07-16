function handleRegistration(){
    let userInf=
    {
       "username":document.getElementById("username").value,
       "useremail":document.getElementById("useremail").value,
       "userpassword":document.getElementById("userpassword").value, 
    }
     let oldUsersData = localStorage.getItem('userInf');
     oldUsersData = JSON.parse(oldUsersData);
    //  let user = {
    //     username: username,
    //     useremail: useremail,
    //     userpassword: userpassword,
    // }
    if (oldUsersData === null) {
        localStorage.setItem('ldUsersData', JSON.stringify([userInf]));
    } else {
        oldUsersData.push(userInf);
        localStorage.setItem('userInf', JSON.stringify(oldUsersData));
    }
}
     

