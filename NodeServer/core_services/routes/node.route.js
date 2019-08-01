var express = require('express');
var nodeController = require('../controllers/node.controller');
module.exports = (function () {
    var router = express.Router();
    router.post('/save/data/', nodeController.saveNodeData);
    router.get('/get/data/', nodeController.getNodeData);
    return router;
})();