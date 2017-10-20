var server=require('./server');
var router=require('./router')
var requestHandlers=require("./requestHandler");

var handler={}
handler["/"]=requestHandlers.start;
handler["/start"]=requestHandlers.start;
handler["/upload"]=requestHandlers.upload;
server.start(router.route,handler);