//some basics
var hash = { a: 'wow', b: 'yo'};
var b = 'a';
console.log(hash[b]);

var res_b = hash["b"]
console.log(res_b); //wow

var arr = [ 'wow', 'yo'];
console.log(typeof hash) //object
console.log(typeof arr) //object

var emptyStr = "" // is false, also 0, null and undefined
var emptyarr = [] //is true, objects are truthy

var a = "42";
var b = 42;
var c = 43;
var d = "ops";

a == b;	    // compare with coercion ->true -> will coerced b to "42"
a === b;	// compares wo coersion -> false

a < b // true BUT will coered a to 42 (!)

a < d & a > d & a == d // all will be false! because d coered to NoN which ie neither big or smalle from a number 

    // dig deep into == and === http://www.ecma-international.org/ecma-262/5.1/

// general rules of equality
a === b //if a or be are T/F , 0, "", []
a == b // else , if you not sure what are the types use ==

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
    // == will coerced arr to a atring presentation with , 
a == c;		// true
b == c;		// true
a == b;		// false

(function SOMENAME(){ console.log("I run")})(); //immediately invoked function expression (IIFE)

// Closures - not like in dating...

function makeAdder(x) {

	function add(y) {
		return y + x;
	};

	return add;
}

var plusOne = makeAdder(1); // will referance to add with x=1 
plusOne(5) //6


// Modules - example of how to use closures 

function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// do the rest of the login work
    }
	var publicAPI = {
		login: doLogin  // login referanced to doLogin
    };
	return publicAPI;
}

    // create a `User` module instance
var fred = User(); // User function was ended but its properties are still accessible from publicAPI

fred.login( "fred", "12Battery34!" );

// who is this?

function myFunc(){
    console.log(this.someVar);
}

var someVar = 'global var';
var someHash = { someVar: 'someHash definition to someVar', someHashFunc: myFunc };
var someOtherHash = { someVar: 'Other also deinfes someVar' };

    //ways to define this
myFunc(); // will return undefine since its strict mode -> global is not allowed 
someHash.someHashFunc(); // someHash definition to someVar
myFunc.call(someOtherHash); //Other also deinfes someVar 
new myFunc(); // also undefined since new set this to a new empty object 
