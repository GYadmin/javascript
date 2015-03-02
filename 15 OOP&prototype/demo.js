/*var box = new Object();
box.name = 'Lee';
box.age =100;
box.run = function(){
	return this.name+this.box+"runing";
}
alert(box.run());

function createObject(name,age){
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function(){
		return this.name+this.age+"running";
	};
	return obj;
}


var box1 = createObject("Lee",100);
var box2 = createObject("Jack",200);

alert(box1.run());
alert(box2.run());

function Box(name,age){
	this.name = name;
	this.age = age;
	this.run = function(){
		return this.name + this.age+"runing";
	};
}

var box1 = new Box('Lee',100);
var box2 = new Box('Jack',200);

//alert(box1.run());
//alert(box2.run());

//alert(box1 instanceof Object);

function Box(name,age){
	this.name = name;
	this.age = age;
	this.run = function(){
		return this.name + this.age+"runing";
	};
}

var o = new Object();
Box.call(o,'Lee',100);
alert(o.run());

function Box(user,age){
	this.user = user;
	this.age = age;
	this.run = run;
}

function run(){
	return this.user + this.age +"running";
}

var box1 = new Box('Lee',100);
var box2 = new Box('Lee',100);

alert(box1.run == box2.run);

function Box(name,age){
	this.name = name;
	this.age = age;
	this.run = function(){
		return this.name + this.age;
	}
}

alert(Box.prototype.isPrototypeOf(box1))

function Box(){
	this.name = '123';
}

Box.prototype.name = 'Lee';
Box.prototype.age = 100;
Box.prototype.run = function(){
	return this.name + this.age;
}

var box1 = new Box();

box1.name = 'Jack';
var box2 = new Box();
alert(box1.name);
//alert(box1.run());
//alert(box1.run == box2.run);

//alert(box1.prototype);
//alert(box1.constructor);

delete box1.name;
delete Box.prototype.name;
//alert(box1.name);
//alert(box1.hasOwnProperty('name'));
alert(message);

// alert(box.prototype);
// alert(box.__proto__);
// var box = new Box();
// alert(box.run());

// var box = new Box();
// alert(box.run());

Box.prototype = {
	age:200
}

var box = new Box();
alert(box.name);

function Box(){}

Box.prototype ={
	name:'Lee',
	age:100,
	run:function(){
		return this.name+this.age;
	}
}
*/

/*var box = [4,3,2,13,4,5,6];
alert(box.sort());
alert(Array.prototype.sort);
alert(String.prototype.substring);

String.prototype.addString = function (){
	return this+",add String";
}

alert("message".addString());
*/


/*function Box(){}
Box.prototype = {
	constructor:Box,
	name:'Lee',
	age:100,
	family:['borther,sister'],
	run:function(){
		return this.age+this.name;
	}
}

var box1 = new Box();
alert(box1.name);
box1.family.push('father');
alert(box1.family);

var box2 = new Box();
alert(box2.family);*/

/*function Box(name,age){
	this.name = name;
	this.age = age;
	this.family = ['borther,sister'];
}

Box.prototype = {
	constructor:Box,
	run:function(){
		return this.name+this.age;
	}
}

var box1 = new Box('Lee',100);
var box2 = new Box('Jack',200);*/


/*function Box(name,age){
	this.name = name;
	this.age = age;
	this.family = ['borther,sister'];
	if(typeof this.run != 'function'){
		Box.prototype.run = function(){
			return this.name+this.age;history
		}
	}
}*/

/*function Box(name,age){
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function(){
		return this.name+this.age;history;
	}
	return obj;
}*/

/*function Box(){
	this.name = "Lee";
}
Box.prototype.name = 'JACK';
function Desk(){
	this.age = 100;
}*/

/*function Table(){
	this.level = "AAA";
	this.age = 200;
}
//
Desk.prototype = new Box();

var desk = new Desk();
//alert(desk.age)
Table.prototype = new Desk();
// alert(desk.name);
var table = new Table();
// alert(table.name);
// alert(table.age);

alert(desk instanceof Object);*/


/*function Box(name,age){
	this.name = name;
	this.age = age;
	this.family = ['bother','sister'];
}

Box.prototype.family = 'father';
function Desk(name,age){
	Box.call(this,name,age);
}

var desk = new Desk();
alert(desk.name);*/

/*function obj(o){
	function F(){}
	F.prototype = o;
	return new F();
}

var box = {
	name:'Lee',
	age:100,
	family:['botther','father']
};

var box1 = obj(box);
// alert(box1.name);
alert(box1.family);
box1.family.push('sister');
alert(box1.family);

var box2 = obj(box);
alert(box2.family);*/

/*function obj(o){
	function F(){}
	F.prototype = o;
	return new F();
}

function create(o){
	var f = obj(o);
	f.run = function(){
		return this.name + "function";
	}
	return f;
}

var box = {
	name:'Lee',
	age:100,
	family:['bother','sister']
};

var box1 = create(box);
alert(box1.run());*/

function obj(o){
	function F(){}
	F.prototype = o;
	return new F();
}

function create(box,desk){
	var f = obj(box.prototype);
	f.constructor = desk;
	desk.prototype = f;
}

function Box(name,age){
	this.name = name;
	this.age = age;
}

Box.prototype.run = function(){
	return this.name +this.age;
}

function Desk(name,age){
	Box.call(name,age);
}

create(Box,Desk);

var desk = new Desk('Lee',100);
alert(desk.run());
alert(desk.constructor);