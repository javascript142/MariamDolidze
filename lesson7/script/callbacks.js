function readfilesync(path, callback){
//simulating asynchronous file read
setTimeout(()=> {
    const content = "file content";
    callback(null,content); //calling callback with null error and
 },1000);
}

readfilesync("path/to/file",(err,content) =>{
    if (err){
        console.error("error:", err);
        return;
    }
    console.log("file content:",content);
});



function readfileAsyncUsingpromises(path){
    return new Promise((resolve, reject) =>{
        //simulating asynchronous file read
        setTimeout(() =>{
            const content = "file content";
            resolve(content); //calling resolve with content
        },1000);
    })}

    readfileAsuncUsingpromises("path/to/file"). then((content)=>{
        console.log("file content:", content);
     }).catch((err) =>{
        console.error("error:",err);
     });
