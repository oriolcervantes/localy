const cloudinary = require('../utils/cloudinary')

const upload = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ml_default'
    })

    res.status(201).send(uploadedResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Failed to upload picture' });
  }
}

module.exports = { upload }