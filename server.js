var express = require('express');
var app = express();
app.set( 'port', ( process.env.PORT || 5000 ));
const country = require('./country.json');
const city = require('./city.json');
const statecity = require('./statecity.json');
app.use(express.static(__dirname))
app.get('/country',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(country));
});
app.get('/country',(req, res)=>{
  res.json(country);
});
app.get('/country',(req, res)=>{
  res.json(country);
})
app.get('/city',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(city));
});
app.get('/city',(req, res)=>{
  res.json(city);
})
app.get('/statecity',(req,res)=>{
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(statecity));
});
app.get('/statecity',(req, res)=>{
  res.json(statecity);
})
app.get('/',(req, res)=>{
  res.json(index);
})
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
