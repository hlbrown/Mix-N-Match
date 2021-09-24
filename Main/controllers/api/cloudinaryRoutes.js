const router = require('express').Router();
const { multerUploads } = require('../../config/multer');
const cloudinary = require('../../config/cloudinary');
const multer = require('../../config/multer');
const cloudinaryConfig = cloudinary.cloudinaryConfig;
const uploader = cloudinary.uploader;
const daturi = multer.datauri;
const db = require('../../models')

router.post('/',multerUploads.single('image-raw'), cloudinaryConfig , (req, res) => {
   const file = daturi(req)
   uploader.upload(file.content,
    {dpr: "auto", responsive: true, width: "auto", crop: "scale" },
    (error, result) => {
        console.log(result)
        
        db.User.update({user_image: result.secure_url}, {where: {id:req.session.user_id}})
        .then(post => {
            res.status(200).json({result})
        })
        .catch(error => {
            res.status(500).json({message: "Error"})
        })
    }
    )
});

module.exports = router;