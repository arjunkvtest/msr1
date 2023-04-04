require('dotenv').config();

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000
// sndsd
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arjun:Hack123@cluster0.res46s8.mongodb.net/?retryWrites=true&w=majority";

let db;
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  db = client.db("rewards");
});



//Routes go here
app.get('/', (req,res) => { 
  const collection = db.collection('accounts');
  collection.find({}).toArray((err, data) => {
    if (err) throw err;
    res.send(data);
  });
})


app.listen(PORT, () => {
  console.log("listening for requests");
})
