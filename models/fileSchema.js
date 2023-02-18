const mongoose=require('mongoose');
const Schema=mongoose.Schema;
 
const fileSchema=new Schema({
  filename: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String, required: true },
  uuid: { type: String, required: true },
  sender_email: { type: String, required: false },
  reciever_email: { type: String, required: false },
});
module.exports=mongoose.model("MyFileSchema", fileSchema);

