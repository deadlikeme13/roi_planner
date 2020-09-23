//var express = require('express');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + '/../public/data');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '.json');
  }
});
  
var upload = multer({ storage : storage }).single('userData');
  
exports.uploadFile = function(req, res) {
  upload(req,res,function(err) {
    if (err) {
      //console.log('Error', err);
      return res.end("Error uploading file.");
    }
    res.redirect('/schedule');
    //console.log('File is uploaded');
  });
};