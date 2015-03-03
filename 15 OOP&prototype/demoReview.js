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

/*
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

*/


/* 原型 */
//构造函数
/*
function Box(name,age){

	this.name = name;
	this.age = age;
	this.run = function(){
		return this.name + this.age + "runing";
	}
}
*/

// 原型
/*
function Box(){} // 构造函数函数体内什么都没有，这里如果有，叫做势力属性，实例方法

Box.prototype.name = 'Lee';	//原型属性
Box.prototype.age = 100;
Box.prototype.run = function(){ // 原型方法
	return this.name + this.age + "runing...";
};

var box1 = new Box();
console.log(box1.age);
var box2 = new Box();
// 如果是实例方法 不同的实例化 他们的方法地址是不同的
// 如果是原型方法他们的地址是共享的

console.log(box1.run == box2.run);
console.log(box1.prototype);// 是一个对象访问不到
console.log(box1.__proto__);// 这个属性是一个指针指向prototype原型对象

console.log(box1.constructor);// 构造函数属性，可以获得构造函数本身
								// 作用是被原型指针定位，然后获得构造函数本身


// 判断一个对象实例是不是指向了原型对象
console.log(Box.prototype.isPrototypeOf(box1));
var obj = new Object();
console.log(Object.prototype.isPrototypeOf(box1));

// 原型模式的执行流程
box1.name = 'Jack'; //实例属性，并不会重写原型属性 
console.log(box1.name);	//就近原则

// 删除实例中的属性
delete box1.name;
console.log(box1.name);

// 判断实例中是否存在该属性
console.log(box1.hasOwnProperty('age'));

// 判断原型与实例中是否存在该属性
console.log('name' in box1);

// 判断原型中是否有该属性
function isProperty(object,property){
	return !object.hasOwnProperty(property) && (property in object)
};
console.log(isProperty(box1,'name'));

*/

// 属性与方法封装 字面量方式

function Box(){}

/*
var box = new Box();
console.log(box.prototype); //使用对象实例无法访问到 prototype
console.log(box.__proto__); //使用对象实例访问prototype的指针
console.log(Box.prototype);
*/

// 使用字面量的方式创建原型对象，这里{}就是对象
// 打印结果 function Object() { [native code] }
Box.prototype = {
	constructor:Box,	// 强制指向Box
	name:'lee',
	age:100,
	run:function(){
		return this.name+this.age+"runing...";
	}
};

// 打印的结果是 function Box(){}
/*
Box.prototype.name = 'Lee';	//原型属性
Box.prototype.age = 100;
Box.prototype.run = function(){ // 原型方法
	return this.name + this.age + "runing...";
};
*/

var box = new Box();
/*
console.log(box.constructor);
console.log(box.constructor == Object);
*/

// 重写了原型对象

/*
Box.prototype = { //这里把原来的原型对象与构造函数实例联系切断了
				// 不会保留原来的信息
	age:200
}
console.log(box.name);
*/

// 
/*

*/

var box = [5,4,3,1,3,4,3]
console.log(box.sort());
// 查看sort 是否是原型对象里的方法
console.log(Array.prototype.sort);
console.log(String.prototype.substring);

// 扩展已有内置引用类型的方法 不推荐 已引起命名冲突
String.prototype.addString = function() {
	return this+',is been added';
}
console.log("Lee".addString());





