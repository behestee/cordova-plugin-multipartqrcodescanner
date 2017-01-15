var exec = require('cordova/exec');

var MulipartQRCodeScanner = function () {};

MulipartQRCodeScanner.prototype.scan = function (arg0, success, error) {
    exec(success, error, "MulipartQRCodeScanner", "scan", [{
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            disableAnimations : true // iOS
        }]);
};


var mulipartQRCodeScanner = new MulipartQRCodeScanner();
module.exports = mulipartQRCodeScanner;