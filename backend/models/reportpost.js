const mongoose = require('mongoose')

const reportModel = new mongoose.Schema({
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    
    reportedtext:{
        type: String
    },
    
    isreported:{
        type:Boolean,
        default:false
    }
},

{timestamps:true}

) 

module.exports = mongoose.model('Report',reportModel)