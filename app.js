const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json());
const config = require('config');
var cors = require('cors');
app.use(cors())


// connection to database

const db = config.get('mongoURI');
//const db = "mongodb://127.0.0.1:27017/ecomart";
mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex:true
})
.then(() => console.log("MongoDB Connected...."))
.catch(err => console.log(err));

//api routes
const cars = require('./routes/api/car');
const reports = require('./routes/api/report');
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
app.use('/api/users', users)
app.use('/api/reports', reports)
app.use('/api/auth', auth)
app.use('/api/cars', cars);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client' ,'build', 'index.html'))
    })
  }
  
module.exports = app;


