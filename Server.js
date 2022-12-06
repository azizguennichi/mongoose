const express = require('express');
const app = express();
require('dotenv').config('./.env')
const mongoose = require('mongoose');
app.use(express.json())
const PORT = process.env.PORT || 5500;

//routers
app.use('/Persons', require('./Routers/PersonRouter'))

//connect to the db
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))
app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))

