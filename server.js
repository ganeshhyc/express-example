var express = require('express');
var app = express();
const country = require('./country.json')
const city = require('./city.json')
const port = process.env.PORT || 8080
app.get('/country',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});
app.get('/country',(req, res)=>{
  res.json(country);
})
app.get('/city',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});
app.get('/city',(req, res)=>{
  res.json(city);
})
app.listen(port,()=>{
  console.log("Server Established!");
})
