const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema ({
    report_date:{type:Date, default:Date.now},
    carId:{type:String},
    manufacturer:{type:String},
    reporter:{type:String},
    email:{type:String},
    report:{type:String}
})

module.exports = mongoose.model('Report', reportSchema);