const route=require('express').Router();
const File=require('../models/fileSchema');
route.get('/:uuid', async (req, resp)=>{
  const file=await File.findOne({uuid:req.params.uuid});
  if(!file){
    return resp.json({error: 'Link expired'});
  }
  const download_file=`${__dirname}/../${file.path}`;
  resp.download(download_file);
  console.log(download_file);
});
module.exports=route;