
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = context.createImageData(200, 200);

const red = 0;
const green = 1;
const blue = 2;
const alpha = 3;

for (let i = 0; i < image.data.length; i += 4) {
  image.data[i + red] = 255;
  image.data[i + green] = 0;
  image.data[i + blue] = 0;
  image.data[i + alpha] = 255;
}
context.putImageData(image, 25, 25);

function drawColors(context, image) {
  for (var pixel of image.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < image.getWidth() / 2){
      pixel.setRed(255);
    } 
    if (y > image.getHeight() / 2){
      pixel.setBlue(255);
    } else {
      pixel.setGreen(255);
    }
  }
  context.putImageData(image, 25, 25);
}