import s3  from "../config/s3aws.js"

function uploadToS3(buffer, fileName, mimeType) {
  const params = {
    Bucket: "aws-admin-demo-file", 
    Key: fileName,
    Body: buffer,
    ContentType: mimeType,
  };

  return s3.upload(params).promise();
}





export default uploadToS3;