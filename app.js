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
const items = require('./routes/api/item');
const reports = require('./routes/api/report');
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
app.use('/api/users', users)
app.use('/api/reports', reports)
app.use('/api/auth', auth)
app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build/'));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client' ,'build', 'index.html'));
  });
}

  
module.exports = app;


