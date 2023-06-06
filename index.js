// const http = require('node:http');
// const app=require('./app');
// // Create a local server to receive data from
// const server = http.createServer();

// // Listen to the request event
// server.on('request', (request, res) => {
//   var a=+app.x;
//   var b=+app.y;
//   var sum=(a+b);
//   res.write("<p>This server is for Rahul Only! sum is dhgfh "+app.z(10,20)+"</p>");
//   res.end();
// });

// server.listen(4300);
const express=require('express');
const app=express();

app.get('',(req,res)=>
{
   res.send("Hello This is home page");
});


app.get('/About',(req,res)=>{
  res.send("hello this is about page");
});
app.listen(3000);