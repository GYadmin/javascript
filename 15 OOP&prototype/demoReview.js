/*
var box = new Object(); // 创建对象
box.name = 'Lee';
box.age = 100;

box.run = function(){
	return this.name + this.age +"runing..." //this 当前作用域下的对象
};

// this 要放在一个作用域下的方法，方可用this

*/


/*

var box2 = box;
box2.name = 'Jack';
box2.age = 200;

box2.run = function(){
	return this.name + this.age +"runing..."
};

console.log(box.run());
console.log(this.name); // this代表的是window
console.log(box2.run());

*/

/*

// 解决以上问题 使用工厂模式方法
function createObject(name,age){
	var obj = new Object(); // 创建对象
	obj.name = name;	//添加属性
	obj.age = age;
	obj.run = function(){ //添加方法
		return this.name + this.age + "runing.."
	};
	return obj; //返回对象
};

var box1 = createObject('Lee',100);
var box2 = createObject('Jack',200);

console.log(box1);
console.log(box2);

// 工厂模式解决了重复实例化的问题 但是无法区分谁是谁的对象
console.log(typeof box1);
console.log(typeof box2);

console.log(box1 instanceof Object);
console.log(box2 instanceof Object);

*/

/*
//构造函数创建对象
function Box(name,age){	//创建一个对象
	this.name = name;	//添加一个属性
	this.age = age;
	this.run = function(){
		return this.name + this.age + "runing...";
	};
};

function Desk(name,age){	//创建一个对象
	this.name = name;	//添加一个属性
	this.age = age;
	this.run = function(){
		return this.name + this.age + "runing...";
	};
};

var box1 = new Box('Lee',100);
var box2 = new Box('jack',200);
var box3 = new Desk("kkk", 20);
console.log(box1.run());
console.log(box2.run());

console.log(box1 instanceof Object);
console.log(box2 instanceof Box);
console.log(box3 instanceof Desk);

// 构造函数与工厂模式的不同

//1. 构造函数美欧new object 后台会自动 var obj ＝ new Object
//2. this 就相当于obj
//3. 构造函数不需要返回对象的引用 后台自动返回

//1.构造函数也是函数 函数名首字母大写
//2.必须new 构造函数 首字母也大些
//3.必须使用new构造函数

// 其实构造方法是改良后的工程方法
*/


// 对象冒充

/*
function Box(name,age){	//创建一个对象
	this.name = name;	//添加一个属性
	this.age = age;
	this.run = function(){
		return this.name + this.age + "runing...";
	};
};

var o = new Object();
Box.call(o,'Lee',100);// 对象冒充
console.log(o.run());
*/


function Box(name,age){	//创建一个对象
	this.name = name;	//添加一个属性
	this.age = age;
	this.run = run;	// 把构造函数内部的方法通过全局来实现引用地址的一致
};

function run(){ // 应该把它封装起来
	return this.name + this.age + "runing...";
}

var box1 = new Box('Lee',100);
var box2 = new Box('Lee',100);

console.log(box1.run() == box2.run());
console.log(box1.run == box2.run);  //因为比较的是引用地址 实例化后地址不同 因为Funciton 是引用类型

// 但是还有一个问题 this 代表了 window



