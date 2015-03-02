/*function box(){
	return "aaa";
}

alert(box());

function (){
	return "bbb";
}

var box = function(){
	return "cccc";
}
alert(box());

(function (){
	alert("ddddd");
})();

var box = (function(){
	return "eeee";
})();

alert(box);

alert((function(){
	return "fffff";
})())

alert((function(age){
	return age;
})(1000));

function box(){
	return function(){
		return 'Lee';
	};
}
alert(box()());

function box(){
	return function(){
		return 'Lee';
	};
}
var b = box();
alert(b());

function box(){
	var age = 100;
	return function(){
		return age;
	};
}
alert(box()());

var age = 100;
function box(){
	age++;
}

alert(age);
box();
alert(age);

function box(){
	var age = 100;
	age++;
	return age;
}

alert(box());
alert(box());

function box(){
	var age = 100;
	return function(){
		age++;
		return age;
	}
}

var b = box();
alert(b());
alert(b());
b = null;
*/

// function box(){
// 	var arr = [];
// 	for(var i =0; i<5; i++){
// 		arr[i] = function(){
// 			return i;
// 		}
// 	}
// 	return arr;
// }

// alert(box()[0]);
// var b = box();
// for (var i = 0; i<5; i++) {
// 	alert(b[i]);
// };

// function box(){
// 	var arr = [];
// 	for(var i =0; i<5; i++){
// 		arr[i] = (function(num){
// 			return function(){
// 				return num;
// 			};
// 		})(i);
// 	}
// 	return arr;
// }

// var b = new box();

// for (var i = 0; i < 5; i++) {
// 	alert(box[i]());
// };


// var b = function (){
// 	alert("message");
// }();

// var box = {
// 	getThis : function(){
// 		return function(){
// 			return this;
// 		};
// 	}
// };

// alert(box.getThis()());

/*var user = "The Window";
var box = {
	user:"The Box",
	getUser:function(){
		var that = this;
		return function(){
			return that.user;
		}
	}
};

alert(box.getUser()());
// alert(box.getUser().call(box));*/


// function box(){
// 	var oDiv = document.getElementById('oDiv');
// 	var text = oDiv.innerHTML;
// 	oDiv.onclick = function(){
// 		alert(text);
// 	};
// 	oDiv = null;
// }
// box();

/*function box(){
	for (var i = 0; i < 5; i++) {
		
	}
	alert(i);
}
box();*/
/*function box(){
	for (var i = 0; i < 5; i++) {
		
	}
	var i;
	alert(i);
}
box();*/

// function box(){
// 	(function(){
// 		for (var i = 0; i < 5; i++) {
			
// 		}
// 	})();
// 	alert(i);
// }
// box();

/*var age = 100;
alert(age);
age = null;
alert(age);*/


// (function (){
// 	var age = 1;
// 	alert(age);
// })();

// alert(age);

/*function box(){
	var age = 100;
}

box();*/

/*function Box(){
	this.age = 100;
	this.run = function(){
		return 'runing...';
	}

}

var box = new Box();
alert(box.age);
alert(box.run());

function Box(){
	var age = 100;
	function run(){
		return "runing";
	}
	this.publicGo = function(){
		return age + run();
	}
}

var box = new Box();
alert(box.publicGo());

function Box(value){
	var user = value;
	this.getUser = function(){
		return user;
	}
	this.setUser = function(value){
		user = value;
	}
}

var box = new Box("ss");
alert(box.getUser());

var box2 = new Box("kk");
alert(box.getUser());

(function(){
	var user = "";
	Box = function(value){
		user = value;
	}
	Box.prototype.getUser = function(){
		return user;
	}
	Box.prototype.setUser = function(){
		return user;
	}
})();

var box = new Box("Lee");
alert(box.getUser());

var box2 = new Box("kkk");
alert(box2.getUser());

var box = {
	user:"Lee",
	run:function(){
		return "runing";
	}
}

var box = function(){
	var user = "Lee";
	function run(){
		return "running";
	}
	return {
		publicGo:function(){
			return user+run();
		}
	}
}();

alert(box.publicGo());

var box = function(){
	var user = "Lee";
	function run(){
		return "running";
	}
	var obj = {
		publicGo:function(){
			return user+run();
		}
	}
	return obj;
}();

alert(box.publicGo());
*/

function Desk(){}
var box = function(){
	var user = "Lee";
	function run(){
		return "runing";
	}
	var desk = new Desk();
	desk.publicGO = function(){
		return user+ run();
	}
	return desk;
}();

alert(box.publicGO)


