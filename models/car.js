const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({   
    created_on: {type:Date, default: Date.now},
    customerId: {type:String},
    name: {type:String},
    email: {type:String},
    car_location: {type:String},
    manufacturer: {type:String},   
    address: {type:String},
    phone: {type:Number},
    status:{type:String},
    state: {type:String},
    price: {type:String},
    year:{type:String},
    transmission:{type:String},
    registered:{type:String},
    license:{type:String},
    description: {type:String},
    model: {type:String},
    image_url:{type:String}, 
})

module.exports = mongoose.model('Cars', carSchema)