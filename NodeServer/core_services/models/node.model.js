var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('node_data', new Schema({
  code:{
      type: 'string',
      required : true
  },
  value:{
      type: 'Number',
      required : true
  },
  unit:{
      type: 'string',
      enum:['kW','kWH'],
      defaultsTo:'kW'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
}));