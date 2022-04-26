const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    title : {type: String, required:true},
    body : {type: String, required:true},
    author : {type: String, required:true}
});

const Tweets = mongoose.model('Tweets', tweetSchema);