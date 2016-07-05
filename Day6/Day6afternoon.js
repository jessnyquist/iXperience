function allUniqueCharacters(sentence) {
	var sentenceNew = sentence.split("").sort().join().trim();
	for(var i = 0; i < sentenceNew.length; i++){
		for(var j = i+1; j < sentenceNew.length; j++){
			if(sectenceNew[i] === sentenceNew[j] && sentenceNew[i] !== " "){
				return 'no';
			}
		}
	}
	return 'yes';
  
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var numSort = numbers.sort();
	for(var i = 1; i < numbers.length; i++){
		if(numSort[i] !== i){
			return i;
		}
	}
return 10;
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	for(var i = 0; i < array1.length; i++){
		for(var j = 0; j<a rray1.length; j++){
			if(array1[i]===array2[j]){
			}
		}
	}

}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {

}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	return f() + f();

}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {
    	firstname: first,
    	lastname: last,
    	ages: age,
    	emailadd: email,
    	favcol: color

    };
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	return obj.children.length;

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
var name = first + last;
return greet(name);
}