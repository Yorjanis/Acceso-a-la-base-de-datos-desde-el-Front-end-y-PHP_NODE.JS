const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');
      
const PORT = 8082
const app = express()

const Server = http.createServer(app)

mongoose.connect('mongodb://localhost/c7')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/users', Routing)
app.use(express.static(__dirname + '/../client'));
Server.listen(PORT, function() {
  console.log('Ya  is listeng on port: ' + PORT)
})
