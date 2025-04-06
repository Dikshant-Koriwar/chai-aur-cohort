const fs =require("fs");

console.log("starting program...");
fs.readFile("./hello.txt",'utf-8',function(err,content){
    if(err){
        console.log("error in reading file",err);
    }else{
        console.log("Error in file reading",content)
        fs.writeFile('./backup.txt',content,function(err){
            if(err) {
                console.log("Error in writing file",err);
            } else {
                console.log("File saved successfully");
                fs.unlink('./hello.txt',function(err){
                    
                })
            }

        })
    }

});