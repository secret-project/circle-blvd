var fs = require('fs');
var path = require('path');
var version = "0.0.0";

var packagePath = path.join(__dirname, "..", "package.json");
fs.readFile(packagePath, "utf-8", readPackageJson);

function readPackageJson(err, data) {
	if (err) {
		console.log("index: Could not read package.json at: " + packagePath);
		return;
	}
	var packageJson = JSON.parse(data);
	version = packageJson.version;
}

exports.index = function renderIndex(req, res){
	var params = {
		host: req.get('Host'),
		version: version
	};
	res.render('index', params);
};