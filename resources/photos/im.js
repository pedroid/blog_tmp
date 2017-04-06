var im = require('imagemagick');
im.resize({
  srcPath: 'IMAG2073.jpg',
  dstPath: 'IMAG2073_small.jpg',
  width:   256
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('resized kittens.jpg to fit within 256x256px');
});
