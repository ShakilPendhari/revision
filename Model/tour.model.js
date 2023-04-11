const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true},
    destination:{type:String,required:true},
    no_of_travellers:{type:Number,required:true},
    budget_per_person:{type:Number,required:true}
},{ versionKey: false });

const tourModel = mongoose.model("tour",tourSchema);

module.exports = {
    tourModel
}