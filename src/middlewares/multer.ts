import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}.jpg`);
    },
});

const uploadMulter = multer({ storage: storage });

export default uploadMulter.single('image');
