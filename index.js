const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer();

app.use(express.static('.'));

app.post('/size', upload.single('file'),(req, res) => {
  res.json({size: req.file.size});
});

app.listen(8080);