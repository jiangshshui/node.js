var exec=require("child_process").exec;
//var iconv = require('iconv-lite');

var queryString=require("querystring");
function start(response,postData){
	console.log("Request handler 'start' was called.");
	// function sleep(milliSeconds){
	// 	var startTime=new Date().getTime();
	// 	while(new Date().getTime()<startTime+milliSeconds);
	// }
	// sleep(10000);



	// var content="empty";
	// exec("dir",{encoding: 'gbk2312',
	// 		timeout:100000,
	// 		maxBuffer:200*1024,
	// 		killSignal:'SIGTERM',
	// 		cwd:null,
	// 		env:null},function(error,stdout,stderr){
	// 	content=stdout;
	// 	//console.log(content);
	// 	response.writeHead(200,{"Content-Type":"text/plain;charset=gbk2312"});
	// 	response.write(stdout);
	// 	response.end();
	// });
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();



	//return content;
	//return "Hello Start";
}

function upload(response,postData){
	console.log("Request handler 'upload' was called.");
	//return "Hello Upload";
	response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	//response.write("You're sent:"+postData);
	response.write("You're sent "+queryString.parse(postData).text);
	response.end();
}

exports.start=start;
exports.upload=upload;