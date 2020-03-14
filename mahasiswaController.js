mahasiswaModel = require('./mahasiswaModel');

// home/tampilkan
exports.index = function(req,res){
    mahasiswaModel.get(function (err, mahasiswa) {
        if(err){
            res.json({
                status: "error",
                pesan: err
            });
        }
        res.json({
            status: "sukses",
            pesan: "Menampilkan data mahasiswa",
            data: mahasiswa
        });
    });
};

// input baru
exports.new = function(req,res){
    let mahasiswa = new mahasiswaModel();
    mahasiswa.nim = req.query.nim ? req.query.nim : mahasiswa.nim;
    mahasiswa.nama = req.query.nama;
    mahasiswa.jurusan = req.query.jurusan;
    mahasiswa.semester = req.query.semester;

    //save
    mahasiswa.save(function (err) {
        if(err)
        res.json(err);
        res.json({
            pesan: "Mahasiswa sudah ditambah",
            data: mahasiswa
        });
    });
};

// cari info
exports.view = function(req,res){
    mahasiswaModel.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if(err)
        res.send(err);
        res.json({
            pesan: "Data mahasiswa sudah di loading ...",
            data: mahasiswa
        });
    });
};

//update data
exports.put = function(req,res){
    mahasiswaModel.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if(err)
        res.send(err);

    mahasiswa.nim = req.query.nim ? req.query.nim : mahasiswa.nim;
    mahasiswa.nama = req.query.nama;
    mahasiswa.jurusan = req.query.jurusan;
    mahasiswa.semester = req.query.semester;

        //save
        mahasiswa.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                pesan: "Mahasiswa sudah diupdate",
                data: mahasiswa
            });
        }); 
    });
};

// hapus data
exports.delete = function(req,res){
    mahasiswaModel.deleteOne({
        _id: req.params.mahasiswa_id
    }, function(err, mahasiswa){
        if(err)
        res.send(err);

        res.json({
            status: "Sukses",
            pesan: "Data Mahasiswa dihapus"
        });
    });
};