const imageWidth = 200;
const imageHeight = 200;

const red = 0;
const green = 1;
const blue = 2;
const alpha = 3;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = context.createImageData(imageWidth, imageHeight);

console.log("image width: " + image.width + " height: " + image.height);
console.log("image data length: " + image.data.length);

for (var i = 0; i < image.data.length; i += 4) {
  var x = (i / 4) % image.width;
  var y = Math.floor((i / 4) / image.width);
  image.data[i + alpha] = 255;

  if (x < image.width / 2) {
    image.data[i + red] = 255;
  } 
  if (y > image.height / 2) {
    image.data[i + blue] = 255;
  } else {
    image.data[i + green] = 255;
  }
}
context.putImageData(image, 25, 25);