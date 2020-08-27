$(document).ready(function() {
  $("#inputFile").fileinput({
    showPreview: false,
    showUpload: false,
    elErrorContainer: '#kartik-file-errors',
    allowedFileExtensions: ["json"]
    //uploadUrl: '/site/file-upload-single'
  });
});