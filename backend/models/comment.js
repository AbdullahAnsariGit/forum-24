const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    postid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
        require:true
    },
    comments:{
        type: String,
        default:null
    },
   
}, 

{ timestamps: true }

);

const Comment = mongoose.model('Comment', commentSchema );
module.exports = Comment;