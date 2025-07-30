import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINAR_CLOUD_NAME,
  api_key: process.env.CLOUDINAR_API_KEY,
  api_secret: process.env.CLOUDINAR_API_SECRET,
});

const uploadCloudinary = async (localpath) => {
  try {
    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });

    console.log("file is uploaded on cloudinary", response.url);
    fs.unlinkSync(localpath)
    return response
  } catch (error) {
    fs.unlinkSync(localpath);
    return null;
  }
};

export default uploadCloudinary;
