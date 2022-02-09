const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017//my-blog-app');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name: String,
    username: String,
    comments: Array,
    title:String,
    content:String
});

var ArticleInfo = mongoose.model('articles', articleSchema);

module.exports = ArticleInfo;