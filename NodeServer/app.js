const express = require('express')
const app = express();
var router = require('express').Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var nodeRoutes = require('./core_services/routes/node.route');
app.use(bodyParser.json({}));
mongoose.connect('mongodb://nikhil:nikhil123@mongo_database:27017/NodeDatabase', { useNewUrlParser: true });

app.use('/', router);
router.use('/node', nodeRoutes);

app.listen(8000, () => {
  console.log('app listening on port 8000!')
});

