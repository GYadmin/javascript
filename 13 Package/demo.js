/*
var box = 'Mr.Lee';
alert(typeof box.substring(2));

var box = 'Mr.Lee';
box.name = 'Lee';
box.age = function (){
	return 100;
}
alert(box);
alert(typeof box);
alert(box.name);
alert(box.age());

var box = new String('Mr.Lee');
box.name = 'Lee';
box.age = function (){
	return 100;
}
alert(box);
alert(typeof box);
alert(box.substring(2));
alert(box.name);
alert(box.age());

alert(Number.MAX_VALUE);

var box = 1000;
alert(typeof box.toString());

var box = 1000.123;
//alert(typeof box.toString());
//alert(box.toLocaleString());
alert(box.toFixed(2));

var box = 'Mr.Lee';
alert(box.length);
alert(box.constructor);

var box = 'Mr.Lee';
//alert(box.charAt(1));
//alert(box.charCodeAt(4));
//alert(box[1]);
//alert(box.concat(' is',' Teacher','!'));
//alert(box.slice(1,5));
//alert(box.substring(1,5))
//alert(box.substr(2,6))\
//alert(box.slice(4));
//alert(box.substring(4));
//alert(box.substr(4));

//alert(box.slice(-2));
//alert(box.substring(-2));
//alert(box.substr(-2));

//alert(box.slice(2,-1));
alert(box.substring(1,-2));
alert(box.substr(2,-2));

var box = 'Mr.Lee is Lee';
//alert(box.indexOf("L"));
//alert(box.lastIndexOf("e"));
//alert(box.indexOf("L",5));
//alert(box.lastIndexOf('L',5));

var boxarr = [];
var pos = box.indexOf('L');
while(pos > -1){
	boxarr.push(pos);
	pos = box.indexOf('L',pos + 1);
}
alert(boxarr);
*/

var box = 'Mr.Lee is Lee';
//alert(box.toLowerCase());
alert(box.toUpperCase());
