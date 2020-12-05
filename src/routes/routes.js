const router = require('express').Router();
const pessoaController = require('../controllers/pessoaController');


router.get('/', (req,res) => {
    res.json({
        status: 'API ok!',
        message: 'Olá minha API'
    })
});

router.route('/pessoa')
    .get(pessoaController.index)
    .post(pessoaController.add);

router.route('/pessoa/:id')
    .get(pessoaController.view)
    .patch(pessoaController.update)
    .put(pessoaController.update)
    .delete(pessoaController.delete);

module.exports = router;