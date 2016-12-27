var exec = require('cordova/exec');

var MulipartQRCodeScanner = function () {};

MulipartQRCodeScanner.prototype.scan = function (arg0, success, error) {
    exec(success, error, "MulipartQRCodeScanner", "scan", [arg0]);
};


var mulipartQRCodeScanner = new MulipartQRCodeScanner();
module.exports = mulipartQRCodeScanner;