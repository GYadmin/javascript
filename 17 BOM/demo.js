/*if(confirm("question")){
	alert("true");
}else{
	alert("false");
}

var box = prompt("message", 0);
if(box != null){
	alert(box);
}

//IE
console.log(window.screenLeft);
console.log(window.screenTop);

console.log(typeof window.screenLeft);

//firefox
console.log(screenX);
console.log(screenY);

// cross bowser
var leftX = typeof window.screenLeft == 'number' ? window.screenLeft:window.screenX;
var topY = typeof window.screenTop == 'number' ? window.screenTop:window.screenY;

//firefox
console.log(innerHeight);	
console.log(innerWidth);

// in chrome inner == outer
// in IE undefinde
console.log(window.outerHeight);
console.log(window.outerWidth);

// IE 
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


// All bowser is OK
var width = window.innerWidth;
var height =  window.innerHeight;

//console.log(document.compatMode);
if(typeof width != 'number'){
	if(document.compatMode == 'CSS1Compat'){
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	}else{
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	}
}

console.log(width);
console.log(height);

// chrome fireFox not work
//moveTo(110, 10);
//moveBy(10,10);
//resizeTo(10,10);
//resizeBy(100,10);


// not a good one
setTimeout("console.log('Lee')",2000);
*/

/*function box(){
	console.log("hello");
}

setTimeout(box,2000);*/

// good one
/*setTimeout(function(){
	console.log("Date to Date");
},2000);*/

/*//
var box = setTimeout(function(){
	console.log("cc");
},2000);

clearTimeout(box);*/

/*var a = setInterval(function(){
	console.log("aa");
},2000);

clearInterval(a);*/

/*var num = 0;
var max = 5;

var box = setInterval(function(){
	num++;
	console.log(num);
	if (num == max) {
		console.log("5 second is click");
		clearInterval(box);
	}
},1000);*/

/*var num = 0;
var max = 5;

function box(){
	num++;
	console.log(num);
	if (num == max) {
		console.log("5 second is click");
	}else{
		setTimeout(box,1000);
	}
}

setTimeout(box,1000);*/

//console.log(location.hash);

/*function getArgs(){
	var qs =  location.search.length > 0 ?location.search.substring(1):'';
	var items = qs.split('&');
	var item = null,name = null,value = 5;

	for (var i = 0; i < items.length; i++) {
		console.log(items[i]);
	};
	return items;
}

console.log(getArgs());*/

//location.reload();
//location.reload(true);

/*function a(){
	location.href = "www.baidu.com";
}

function b(){
	location.replace("www.baidu.com");
}*/
function length(){
	return history.length;
}

function back(){
	history.back();
}

function forward(){
	history.forward();
}



