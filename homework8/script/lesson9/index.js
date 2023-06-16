localStorage.setItem('username', 'fluffyPanda123');

let userData = [
    {"userName": "user1",
    "password": "123123"
    },
    {"userName": "user2",
    "password": "12312399998"
    },
    {"userName": "user3",
    "password": "12312334234"
    }
]

localStorage.setItem('userData', JSON.stringify(userData));

// let username = localstorage.getItem('username');

// console.log(username)
// localstorage.removeItem("username")
// localstorage.clear();
// let usernameinput = prompt("enter your username");
//  let passwordInput = prompt("enter your password");
let userDatafromDB = localstorage.getimet("userdata");
userDatafromDB = JSON.parse(userdatafromDB);
for(let userinfo of userDatafromDB){
    if(userinfo.userName === usernameInput){
       if(userinfo.password === passwordInput) {
        else{
            console.log(' you have logged in')
        }

       }
    }
}
console.log("username is incorrect")
console.log(userDatafromDB);


let username = "user4";
let password = "1234123";

let oldUserData = localStorage.getItem("userData");
oldusewrdata = JSON.parse(oldUserData);
oldUserData.push({"userName": username, "password": password})

localStorage.setItem("userData", JSON.stringify(oldUserData));