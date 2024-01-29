const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
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
    reactions:{
        type: String,
        enum:['like','heart','dislike','noreaction'],
        default:'noreaction'
    },
   
}, 

{ timestamps: true }

);

const Reaction = mongoose.model('Reaction', reactionSchema);
module.exports = Reaction;