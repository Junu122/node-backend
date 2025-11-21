import uploadToS3 from "../services/s3.services.js";




const uploadFile=async(req,res)=>{
    try {
         const file = req.file;
         const key = Date.now() + "-" + file.originalname;

        const result = await uploadToS3(file.buffer, key, file.mimetype);

        res.json({url:result.Location,result:result})
    } catch (error) {
          res.status(500).json({ error: error });
    }
}

export {uploadFile};