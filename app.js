var express = require('express');

const cors = require('cors');

var app = express();

app.use(cors()); //cors 미들웨어 

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
app.get('/', function(req, res) {
  //res.send('hello world');
  res.json(contents);
});

app.get('/add', function(req, res) {
    console.log("add");
    contents.push({id:contents.length+1 , name: req.query.name , done :false});
    res.json(contents);
  });

//express 웹서버 리스닝
app.listen(3000, () => console.log('Listening on port 3000'));