var {require} = Components.utils.import("resource://gre/modules/commonjs/toolkit/require.js")
	var _moduleFile = require("sdk/io/file") // resource://gre/modules/commonjs/sdk/io/file.js
	
	
function file_read(path) {return _moduleFile.read(path, "r")}


document.body.innerHTML = "<p>" + file_read("/home/user/script.js") + "</p>"