var express = require('express');
var app = express();
const data = require('./country.json')
const port = process.env.PORT || 8080
app.get('/country',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});
app.get('/country',(req, res)=>{
  res.json(data);
})
app.listen(port,()=>{
  console.log("Server Established!");
})
