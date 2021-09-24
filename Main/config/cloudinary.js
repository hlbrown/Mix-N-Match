const cloudinary = require('cloudinary').v2;
require ('dotenv').config();


// Cloudinary configuration settings
// This will be fetched from the .env file in the root directory
const cloudinaryConfig = (req, res, next) => {
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
    });
    next()
}
module.exports = { cloudinaryConfig, uploader: cloudinary.uploader };