const mongoose = require('mongoose');

const casasSchema = mongoose.Schema({
    tipo:{type:String, required:true},
    locacion:{type:String, required:true},
    ciudad:{type:String, required:true},
    provincia:{type:String, require:true},
    foto:{type:String, required:true},
    ambientes:{type:String, required:true}
});

module.exports = mongoose.model('Casas',casasSchema);