//node.js:http server handling get and post request
//show html form at get requst
//at post request: grab form data and display them
//get compliate source code from paddy.com

const express = require("express");  //server create

const fs = require('fs');   //file sytem hai isi ke hepl se display krte hai

const server = express.createServer(function(req,res){ //callback fun hai jo res and req generate krta hai
     
    if(req.method === "GET"){
        res.writeHead(200, {"Content-type" :"text/html"}); //agar file ko fontend pr dikhna hai to writehead use krte hai
        fs.createReadStream("./public/index.html").pipe(res);  //read ki hye file ko res ke sath club krna hai to pipe funct use kr fontend pr 
        //console.log("calling by get method");

    }else if(req.method === "POST"){
       
        const data ="";
        req.on("data", function(chunk){
          data +=chunk;
        });
        req.on("end", function(){
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(`
            $(data)
            `);
        });
       // console.log("calling by post method");

    }
});
server.listen(3000);
