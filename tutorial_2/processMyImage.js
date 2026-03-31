const cv = require("@techstark/opencv-js");
const { Image, ImageData } = require("canvas");

function processImage(img, cv) {
	const src = cv.imread(img);
	const dst = new cv.Mat();
	cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
	cv.adaptiveThreshold(
		dst,
		dst,
		200,
		cv.ADAPTIVE_THRESH_GAUSSIAN_C,
		cv.THRESH_BINARY,
		11,
		2
	);
	src.delete();
	return dst;
}

module.exports = { processImage };
