    let router = require('express').Router()

router.get('/', function(req,res){
    res.json({
        status: "API jalan",
        pesan: "Selamat Datang"
    });
});

let mahasiswaController = require('./mahasiswaController');

router.route('/mahasiswa')
    .get(mahasiswaController.index)
    .post(mahasiswaController.new);
router.route('/mahasiswa/:mahasiswa_id')
    .get(mahasiswaController.view)
    .put(mahasiswaController.put)
    .delete(mahasiswaController.delete);

module.exports = router;