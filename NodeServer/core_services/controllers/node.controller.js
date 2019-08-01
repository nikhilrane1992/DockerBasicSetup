'use strict';
var nodeModel = require('../models/node.model');
exports.saveNodeData = function(req, res, next) {
    var data = req.body;
    nodeModel.create(data, function(err, doc) {
        if (err) {
            res.json(err);
        }
        res.send(doc)
        res.end('');
    })
}

exports.getNodeData = function(req, res, next) {
    nodeModel.find({}, function(err, docs) {
        if (err) {
            res.json(err);
        }
        res.send(docs)
        res.end('');
    })
};