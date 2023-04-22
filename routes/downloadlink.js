const route=require('express').Router();
const File=require('../models/fileSchema');
route.get('/:uuid', async (req, resp)=>{
  console.log("hello")
  const file= await File.findOne({uuid:req.params.uuid});
  console.log(file);
  if(!file){
    
    return resp.json({error: 'Link expired'});
  }console.log("Hi");
  const download_file=`${__dirname}/../${file.path}`;
  resp.download(download_file);
});
module.exports=route;