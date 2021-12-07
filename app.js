const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

var app = express();

app.use(cors()); //cors 미들웨어 

 
const connection = mysql.createConnection({
    host: '3.38.104.18',
    user: 'jaehun',
    password: 'Welcome!1',
    database: 'todo'
  });

connection.connect();

connection.query('SELECT * FROM TODO_LIST', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log('result1',results);
});
    


//api 서비스를 할 배열
const contents = [
    {
        id:1,
        name:'html 공부하기',
        done:true
    },
    {
        id:2,
        name:'CSS 공부하기',
        done:true
    },
    {
        id:3,
        name:'Python 공부하기',
        done:false
    },
    {
        id:4,
        name:'Java 공부하기',
        done:false
    }
] 

// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function(req, res) {
  //res.json(contents);
//});
app.get('/', (req, res) => {
    connection.query('SELECT * from TODO_LIST', (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
});
//app.get('/add', function(req, res) {
    //console.log("add");
    //contents.push({id:contents.length+1 , name: req.query.name , done :false});
    //res.json(contents);
//  });
app.get('/add', function(req, res) {
    var sql = 'INSERT INTO TODO_LIST (name,done) VALUES (?,?)'
    var param = [req.query.name, 'N'];
    connection.query(sql, param, (error, rows) => {
        if (error) throw error;
        res.send(rows);
      });
  });

connection.end();

//express 웹서버 리스닝
app.listen(3000, () => console.log('Listening on port 3000'));