const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: {
        type:String,
        
    },
    register_date:{
        type:Date,
        default:Date.now
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    img:{
        type:String
    }

})
module.exports = mongoose.model('User', UserSchema)