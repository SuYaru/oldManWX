var mongoose = require('mongoose'),
    materializedPlugin = require('mongoose-materialized'),
    Schema             = mongoose.Schema;

var CateSchema = new Schema({
  type: {type:Number},
  text: {type: String}
});

CateSchema.plugin(materializedPlugin);
module.exports = mongoose.model('Cate', CateSchema);  // Category