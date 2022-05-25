
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = context.createImageData(200, 200);

const red = 0;
const green = 1;
const blue = 2;
const alpha = 3;

drawColors(context, image);

function drawColors(context, image) {
  for (let i = 0; i < image.data.length; i += 4) {
    var x = image.data.getX();
    var y = image.data.getY();
    if (x < image.getWidth() / 2){
      image.data[i + red] = 255;
    } 
    if (y > image.getHeight() / 2){
      image.data[i + blue] = 255;
    } else {
      image.data[i + green] = 255;
    }
  }
  context.putImageData(image, 25, 25);
}