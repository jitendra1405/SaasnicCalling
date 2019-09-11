var express = require('express');
var pg = require("pg");
var app = express();
 
var connectionString = "postgres://leeglxtkajgvtl:76f29beea03eb3bd5b69672f0d292a01ae95d251957282df96e882864c969e50@ec2-23-21-156-171.compute-1.amazonaws.com:5432/daff54nelb3ps6";
 
app.get('/', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT email,lastname FROM webrtc.contact', [1],function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
});
 
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
