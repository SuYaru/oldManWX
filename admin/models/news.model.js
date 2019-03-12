var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({ title:String,contents:String,author:String });
schema.plugin(mongoosePaginate);

var News = mongoose.model('news', schema, 'news'); // Model.paginate()

module.exports = News;