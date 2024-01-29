const mongoose = require('mongoose')

const savedModel = new mongoose.Schema({
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    

    issaved:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
) 

module.exports = mongoose.model('Savedpost',savedModel)