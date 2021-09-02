const express = require('express');
const app = express();

var query1 = [];

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "elyes",
  password: "123456",
  database: "excel"
});

var query1 = [];

connection.query("select COL3 from table1 LIMIT 4", function(err, rows){
  if(err) {
    throw err;
  } else {
    setValue(rows);
  }
});

function setValue(value) {
  query1 = value;
  console.log(query1);

}






app.get('/index.html', function(req, res){
    var name = 'hello';
    res.sendFile( __dirname + "/" + "index.html",{name:name} );
});


app.get('/api/query',(req,res)=> {

    res.send(query1)
//test 3al query 9a3da tetb3ath    
})

app.get('/', (req,res) => {
  res.send('hello world');
  });
  
  


const port = process.env.PORT || 3000;
app.listen(3080, () => console.log(`listening on port ${port} ...`) )