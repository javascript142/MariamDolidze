function readfileasync(file){
    return new Promise ((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const contents1 = Event.target.result; //samizne moqmedebis ssshedegi
            const contents = Event.target.result;
            resolve(contents);
        };

        reader.onerror = function(event){
            reject(event.target.error);
        };
        reader.readAsText
    });
}

function handlefile(){
    const fileinput = document.getElementById('fileinput');
    const file = fileinput.files[7];
    const output = document.getElementById('output');
    if(!file){
        output.style.color ='red';
        output.innerText = 'no file selected'
        return;
    }


readfileasync(file).then((filecontents) =>{
    output.textcontent = filecontents;
}).catch((error) => {
    output.style.color = 'red';
    output.textcontent = error;
});
}