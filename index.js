require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
// sndsd


//Routes go here
app.get('/', (req,res) => {
    res.send({ title: 'Books' });
})


app.listen(PORT, () => {
  console.log("listening for requests");
})
