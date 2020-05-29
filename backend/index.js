// INITIAL CONFIG
require("dotenv").config();

// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");


const ImgurStorage = require('multer-storage-imgur');
const multer = require('multer')
const uploader = multer({storage: ImgurStorage({ clientId: process.env.CLIENT_ID })});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS CONFIG
app.use(cors("http://localhost:3000"));

// BACKEND API HANDLERS
const getGalleries = require("./services/imgur");
const getMyUploads = require("./services/getMyUploads");
const getAlbums = require("./services/getAlbums");
const getImageFromName = require("./services/getImageFromName");
const getAlbumFromId = require("./services/getAlbumFromId");


app.get("/", (req, res) => {
  res.send("base url");
});

app.get("/galleries", async function (req, res, next) {
  try {
    const response = await getGalleries();
    res.json({ galleries: response.data.data });
  } catch (err) {
    next(err);
  }
});

app.get("/myImages", async function (req, res, next) {
  try {
    const response = await getMyUploads();
    res.json({ images: response.data.data });
  } catch (err) {
    next(err);
  }
});


app.get("/myAlbums", async (req, res, next) => {
  try{
    const response = await getAlbums();
    res.json({albums : response.data.data})
  } catch (err){
    next(err);
  }
})

app.get("/album/:id", async (req, res, next) => {
  try{
    
    const response = await getAlbumFromId(req.params.id);
    res.json({album : response.data.data})
  } catch (err){
    next(err);
  }
})

app.get("/test", async (req, res, next) => {
  try{
    const response = await getImageFromName();
    res.json({albums : response.data.data})
  } catch (err){
    next(err);
  }
})



app.listen(8000, () => {
  console.log("http://localhost:8000");
});



//https://api.imgur.com/3/account/{{username}}/image/{{imageId}}


























// app.get("/upload", function (req, res, next) {
//   res.sendFile(__dirname + "/test_upload.html");
// });

// app.post("/upload", uploader.single("image"), async function (req, res, next) {
//   //console.log(">>>>>>>>>>>>>>",req.file)
//   try {
//     console.log("uploadé. Link : ", req.body.title, "OOOOO");
//     //console.log("uploadé. Link : ", req.file.data.link);
//     res.redirect("/upload_success")
//   } catch (err) {
//     next(err);
//   }
// });
