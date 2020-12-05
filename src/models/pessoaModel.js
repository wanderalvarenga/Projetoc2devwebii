const mongoose = require ('mongoose');

const pessoaSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    longitude:{
        type: Number,
        required:true
    },
    latitude:{
        type: Number,
        required:true
    },
    data_criacao:{
        type: Date,
        required:true
    },
    data_atualizacao:{
        type: Date,
        required:true
    },
    data_delecao:{
        type: Date,
        required:true
    }

});

let pessoa = module.exports  = mongoose.model('pessoa', pessoaSchema);

module.exports.get = (callback,limit) => {
    pessoa.find(callback).limit(limit);
}