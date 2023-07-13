
function handleRegistration() {
    let nameField = document.getElementById('nameField').value;
    let useremail = document.getElementById('useremail').value;
    let userpassword = document.getElementById('userpassword').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);
console.log(oldUsersData)
    let user = {
        nameField: nameField,
        useremail: useremail,
        userpassword: userpassword
    };

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
    }
}
