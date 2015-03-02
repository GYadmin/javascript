/*
alert(Global);

var box = '//Lee¿Ó';
var a = encodeURI(box);
var b = encodeURIComponent(box);

alert(decodeURI(a));
alert(decodeURIComponent(b));

eval('var box = 100');
alert(box);

alert(eval('alert(100)'));

eval('function box(){return 123}');

alert(box());

alert(Math.E);

alert(Math.PI);

alert(Math.min(2,3,4,5,6,'7'));
alert(Math.max(2,3,4,5,6,'7'));

alert(Math.ceil(25.9));
alert(Math.ceil(25.5));
alert(Math.ceil(25.4));

alert(Math.floor(25.9));
alert(Math.floor(25.5));
alert(Math.floor(25.4));

alert(Math.round(25.9));
alert(Math.round(25.5));
alert(Math.round(25.4));

alert(Math.random());

for (var i = 0; i < 10; i++) {
	document.write(Math.random());
	document.write('</br>')
}

for (var i = 0; i < 10; i++) {
	document.write(Math.floor(Math.random())*10+1;
	document.write('</br>')
}

function select(start,end){
	var total = end - start + 1;
	return Math.floor(Math.random()*total+start);
}

for (var i = 0; i < 10; i++) {
	document.write(select(5,10));
	document.write('</br>')
}
*/

var b = {a:"1"};
if(b.b){
	alert("OK");
}else{
	alert("not OK");
}



