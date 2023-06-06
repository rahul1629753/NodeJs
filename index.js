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
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,'public');

// app.use(express.static(publicpath)); for call static file and send on browser!
app.get('',(req,res)=>
{
   res.sendFile(`${publicpath}/index.html`);
});
app.get('/About',(req,res)=>{
  res.sendFile(`${publicpath}/about.html`);
});
app.get('*',(req,res)=>{
  res.send("Page not found");
});
app.listen(3000);