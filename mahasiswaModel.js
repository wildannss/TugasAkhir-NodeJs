let mongoose = require('mongoose');

let mahasiswaSchema = mongoose.Schema({
    nim: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jurusan: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false});

//export
let mahasiswaModel = module.exports = mongoose.model('mahasiswas', mahasiswaSchema);
module.exports.get = function(callback, limit){
    mahasiswaModel.find(callback).limit(limit);
}