var fs=require("fs");
fs.readFile("sample.txt",function(err,data){
    
    if(err){
        console.log(err);
    }else{
        // console.log(data.toString('gbk2312'));
        // console.log(data.length+' bytes');
        console.log(data.toString("utf-8"));
        console.log(data.length+' bytes');
    }
});


try{
    var data=fs.readFileSync("sample.txt","utf-8");
    console.log(data.toString("utf-8"));
}catch(err){
    console.log(err);
}


var text="你好";
console.log(text);
var buf=Buffer.from(text,"utf-8");
console.log(buf);


var data="Hello, Node.js";
fs.writeFile('output.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok.')
    }
});

fs.writeFileSync('outputsync.txt',data);



fs.stat("sample.txt",function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log('isFile:'+stat.isFile());

        console.log("isDirectory:"+stat.isDirectory());

        if(stat.isFile()){
            console.log('size:'+stat.size);
            console.log("bitrh time:"+stat.birthtime);
            console.log("modified time:"+stat.mtime);
        }
    }
});





