var express = require('express');
var app = express();
const data = require('./country.json')

app.get('/country',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});
app.get('/country',(req, res)=>{
  res.json(data);
})
app.listen(3000,()=>{
  console.log("Server Established!");
})
