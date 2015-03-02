
//console.log(Window.navigator.appName);
/*
console.log(navigator.userAgent);
console.log(navigator.platform);

for (var i = 0; i < navigator.plugins.length; i++) {
	console.log(navigator.plugins[i].name);
	console.log(navigator.plugins[i].filename);
	console.log(navigator.plugins[i].description);
};
*/

function hasPlugin(name){
	for (var i = 0; i < navigator.plugins.length; i++) {
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
			console.log(navigator.plugins[i].name);
			console.log(navigator.plugins[i].filename);
			console.log(navigator.plugins[i].description);
			return true;
		}
	}
	return false;
};



function hasIEPlugin(){
	try{
		new ActiveXObject(name);
		return true;
	}catch(e){
		console.log(e);
		return false;
	}
}

function hasFlash(){
	var result = hasPlugin("flash");
	if(!result){
		hasIEPlugin();
	}
	return result;
}

console.log(hasFlash());

console.log(navigator.mimeTypes.length);