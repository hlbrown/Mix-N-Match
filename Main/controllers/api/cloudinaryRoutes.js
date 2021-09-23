const router = require('express').Router();
const { multerUploads } = require('../../config/multer');
const cloudinary = require('../../config/cloudinary');
const multer = require('../../config/multer');
const cloudinaryConfig = cloudinary.cloudinaryConfig;
const uploader = cloudinary.uploader;
const daturi = multer.datauri;

router.post('/',multerUploads.single('image-raw'), cloudinaryConfig , (req, res) => {
   const file = daturi(req)
   uploader.upload(file.content,
    {dpr: "auto", responsive: true, width: "auto", crop: "scale" },
    (error, result) => {
        console.log(result)
        
        // db.editpost({img_url: result.secure_url}, req.params.id)
        // .then(post => {
        //     res.status(200).json({result})
        // })
        // .catch(error => {
        //     res.status(500).json({message: "Error"})
        // })
    }
    )
});

module.exports = router;