var http=require("http");
var url=require("url")
function start(route,hanlder){
	function onRequest(request,response){
		
		//console.log("Request received.")
		var pathname=url.parse(request.url).pathname;
		//console.log("Request for "+pathname+" received.");

		//route(hanlder,pathname,response);

		request.setEncoding("utf8");
		var postData="";
		request.addListener("data",function(postDataChunk){
			postData+=postDataChunk;
			console.log("Received POST data chunk'"+postDataChunk+"'.");
		});

		request.addListener("end",function(){
			route(hanlder,pathname,response,postData);
		});
		//var content=route(hanlder,pathname,response)

		//response.writeHead(200,{"Content-Type":"text/plain"});
		//response.writeHead(404,{"Content-Type":"text/plain"});
		//response.write(content);
		//response.end();
	}

	http.createServer(onRequest).listen(7777);
	console.log("Server has started.");
}


exports.start=start;