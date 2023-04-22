const routes = require("express").Router();
const multer = require("multer");
const path = require("path");
const File = require("../models/fileSchema");
const express=require('express')
const app=express();
const { v4: uuid4 } = require('uuid');
let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    console.log(file);
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1E9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
   }
   
});
let upload = multer({
  storage: storage
}).single("myfile");
routes.post("/test", (req, resp) => {
upload(req, resp, async (error) => {
  console.log(req.file);
   if (!req.file) {
    return resp.json({ error: "Please upload your file" });
  }
  if (error) {
     return resp.status(500).send({ error: error.message });
  }
  const file = new File({
      filename: req.file.filename,
      uuid: uuid4(),
      path: req.file.path,
      size: req.file.size,
      sender_email: "",
      reciever_email: ""
    }) 
       const response = await file.save();
      console.log(response);
       const file_uuid=File.findOne({uuid: req.params.uuid});
       console.log(file_uuid);
       if(!file_uuid){
         return resp.json("Link is expired");
        }
         return resp.json({download:`${process.env.APP_BASE_URL}/file/download/${response.uuid}`})
            // message: "File uploaded successfully",
            // download: 
            
          
      } 
   )
 });
module.exports = routes;
