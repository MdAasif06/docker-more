const fs=require("fs")

fs.readFile("name.txt","utf-8",(err,data)=>{
    if(err){
        console.error("Error reading file",err)
        return
    }
    // console.log("file connect");
    const names=data.split(/\r?\n/)
    // console.log(names)
    names.forEach((name,index)=>{
        if(name.trim()!==""){
            console.log(`${index+1}.${name.trim()}`)
        }
    })
})


// console.log("hello dokcer how are you");
