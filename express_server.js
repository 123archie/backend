var express = require("express");
var cors=require("cors");
var bodyparser=require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const app=express();
app.use(express.json());
app.use(express.urlencoded({
  extended:false
}));
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5500;
const connectDB = require("./database");
app.set("./views", path.join(__dirname, "/views"));
app.set("view engine");
app.use("", require("./routes/files"));
app.use("/file/download", require("./routes/downloadlink"));
connectDB();
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
