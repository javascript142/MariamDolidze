let password = 'abdjusb368'

//get a length of the string
console.log(password.length);

let usertopics = 'html,css,javascript,react';

//split the string into an array
console.log(usertopics.split(','));

//slice the string
console.log(password.slice(0,4));

//extract a substring
console.log(password.substring(0,4));

// replace a string
console.log(password.replace('abdgs','df22'));

//replace all occurrences of a string
console.log(password.replace(/abdgs/g,'df22'));

//convert to upper case
console.log(password.toUpperCase());

//convert string to lower case
console.log(password.toLowerCase());//changes the original string to lower case


//concatinate strings
console.log(password.concat('1234')); //aq monacemebis martivad shesacvlelad vitenebt amas vwert ra monacemic gvaqvs shemdegshi ki vuwert ra gvindarom chaeweros mis magvivrad 
console.log(password + '1234');

//trim a string
let passwordwithspaces = '       ygt7wdu  '; //gamotovebul sivrcesi spais adgilebs acilebs tolobebi ki gamoyenebulia shedegis ukete dasanxad 
console.log('=' + passwordwithspaces + '=');
console.log('=' + passwordwithspaces.trim() + '=');