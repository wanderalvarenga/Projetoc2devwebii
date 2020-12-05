const pessoaModel = require('../models/pessoaModel');

exports.index = (req, res) =>{
    pessoaModel.get((err, pessoa) => {
        if(err){
            res.json({
                status: "error",
                message: err.message
            })
        }
        res.json({
            status: "sucess",
            message: "Dados da pessoa retornados",
            dados: pessoa
        })
    })
}

exports.add = (req, res) => {
    let pessoa = new pessoaModel();
    console.log(req.body);
    pessoa.nome = req.body.nome ? req.body.nome : pessoa.nome;
    pessoa.email = req.body.email;
    pessoa.longitude = req.body.longitude;
    pessoa.latitude = req.body.latitude;
    pessoa.data_criacao = new Date();
    pessoa.data_atualizacao = new Date();
    pessoa.data_delecao = new Date();

   
    pessoa.save(err => {
        if(err){
            res.json(err);
        }else{
            res.json({
                message: "pessoa salvo com sucesso!",
                dados: pessoa
            })
        }
               
    })

}

exports.view = (req,res) =>{
    pessoaModel.findById(req.params.id, (err,pessoa) => {
        if(err){
            res.send(err);
        }else{
        res.json({
            message: "Dados da pessoa",
            dados: pessoa
        });
    }
    });
}

exports.update = (req,res) => {
    
    pessoaModel.findById(req.params.id, (err,pessoa) =>{
        
        if(err) {
            res.send(err);
        }else{
        pessoa.nome = req.body.nome;
        pessoa.email = req.body.email;
        pessoa.longitude = req.body.longitude;
        pessoa.latitude = req.body.latitude;
        pessoa.data_criacao = new Date();
        pessoa.data_atualizacao = new Date();
        pessoa.data_delecao = new Date();
        }
        
        pessoa.save(err =>{
            if(err) {
                res.json(err);
            }else{
                res.json({
                    message: "pessoa atualizado com sucesso",
                    dados: pessoa
                })
            }
        })
    })
}


exports.delete = (req, res) =>{
    pessoaModel.deleteOne({
        _id: req.body.id
    },(err, resposta) =>{
        if(err){
            res.send(err);
        } else{
        res.json({
            status: 'pessoa deletado com sucesso!',
            message: 'pessoa não existe mais'
        })
    }
    })
}