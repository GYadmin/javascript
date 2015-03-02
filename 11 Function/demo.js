/*
var box = new Function('num1','num2','return num1 + num2');
alert(box(1,2));
alert(typeof box);

function box(sum,num){
	return sum+num;
}

function sum(num){
	return num + 10;
}

var result = box(sum(10),10);
alert(result);

function box(sum,num){
	return sum(num);
}

function sum(num){
	return num + 10;
}

var result = box(sum,10);

alert(result);


function box(num){
	if(num <=1){
		return 1;
	}else{
		return num*box(num-1);
	}
}

alert(box(4));

function box(num){
	if(num <=1){
		return 1;
	}else{
		return num * arguments.callee(num-1);
	}
}
alert(box(4));

alert(Window);

alert(this);

var color = "red";
alert(this.color);

var box = {
	color:'blue',
	sayColor:function(){
		alert(this.color);
	}
}

box.sayColor();

window.color = 'red';

function sayColor(){
	alert(this.color);
}

sayColor();

var box = {
	color:'blue'
};

box.sayColor = sayColor;

box.sayColor();

function box(name,age){
	return name+age;
}

alert(box.length);

function box(num1,num2){
	return num1+num2;
}

function sum(num1,num2){
	return box.apply(this,[num1,num2]);
}

function sum2(num1,num2){
	return box.apply(this,arguments);
}

//alert(box(10,10));

//alert(sum(10,10));
alert(sum2(10,10));

function box(num1,num2){
	return num1+num2;
}

function sum(num1,num2){
	return box.call(this,num1,num2);
}

alert(sum(10,10));
*/

var color = 'red';

var box = {
	color:'blue'
}

function sayColor(){
	alert(this.color);
}

//sayColor();

//sayColor.call(window);
//sayColor.call(this);

sayColor.call(box);
