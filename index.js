
var cors = require('cors')
var express = require('express');
var app = express();
app.use(cors());


app.get('/pp',function(req,res){
    i=Math.round(Math.random() * Math.floor(10),0);
    if(i>5){
    res.send(JSON.stringify("You won a Lottery"));
    }
    else
    {
        res.send(JSON.stringify("Sorry Next Time"));
    }
    
});


app.listen(3000);
