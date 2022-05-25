const imageWidth = 200;
const imageHeight = 200;

const red = 0;
const green = 1;
const blue = 2;
const alpha = 3;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = context.createImageData(imageWidth, imageHeight);

console.assert(imageWidth === image.width);
console.assert(imageHeight === image.height);

const halfImageWidth = imageWidth / 2;
const halfImageHeight = imageHeight / 2;

for (var i = 0; i < image.data.length; i += 4) {
  var x = (i / 4) % image.width;
  var y = Math.floor((i / 4) / image.width);

  image.data[i + alpha] = 255;

  if (x < halfImageWidth) {
    image.data[i + red] = 255;
  }

  if (y > halfImageHeight) {
    image.data[i + blue] = 255;
  } else {
    image.data[i + green] = 255;
  }
}

context.putImageData(image, 25, 25);