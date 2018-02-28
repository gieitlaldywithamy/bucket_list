const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

server.use(bodyparser.json());
server.use(express.static('client/build'));
//server.use(express.static('build'));
server.use(bodyparser.urlencoded({extended: true}));


MongoClient.connect('mongodb://localhost:27017', function(err,client){

  if (err){
    console.log(err);
    return;
  }

  const db = client.db('bucket_list');

  server.get('/countries', function(req, res){
    db.collection('countries').find().toArray(function(err, results){
      if (err) {
        console.log(err);
        res.status(500);
      }
      res.json(results);
    })
  });

  server.post('/countries',function(req,res){
   db.collection('countries').save(req.body, function(err, result){
     if(err){
       console.log(err);
       res.status(500);
       res.send();
     }
     res.status(201);
     res.json(result.ops[0]);
     console.log("saved to database");
   });
 });


  server.listen(3000, function() {
    console.log("Happy days, everything is amazing");
  });



});
