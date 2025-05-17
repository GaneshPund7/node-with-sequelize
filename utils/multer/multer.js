// File uploading in node js
const multer = require('multer');
 
const uploadFile = multer.diskStorage({
    destination: function ( req, file, cb) {
        cb(null, './folder/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname.split(".")[0] + path.extname(file.originalname))
    }
})