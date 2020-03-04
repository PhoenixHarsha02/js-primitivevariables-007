//Data Types: Primitive- Symbol,Strings,Number,Boolean; Reference- Objects,Array; Special Values- Null,Not null,undefined,NaN
let a='hello';
let b='hi harsha';
let c='a                          b';
console.log(a.length);
//returns the length of the String
//output:5
console.log(a.concat(b));
//joins the two Strings
//output:hellohi harsha
console.log(a.endsWith("o"));
//checks whether the string ends with the specified Value
//output:true
console.log(a.includes("a"));
//checks whether the string has that Values
//output:false
console.log(a.indexOf("l"));
//displays the index position of the character in the string
//output:2
console.log(a.split("l"));
//splits the string with the value
//output:2
console.log(b.lastIndexOf("h"));
//displays the position of last occurance of the character
//output:7
console.log(a.repeat(2));
//displays the time of how many times to display the string
//output:7
console.log(b.replace(/a/g,"h"));
//replaces all occurances of the character with global replacement /g
//output:hi hhrshh
console.log(b.search("h"));
//returns 0 if it is in the given Strings
//output:0
console.log(b.slice(0,2));
//prints only a specific part of the string using index Values
//output:hi
console.log(b.startsWith("l"));
//checks whether the given string starts with the Values
//output:false
console.log(b.substr(1,5));
//checks whether the given string starts with the Values
//output:false
console.log(b.substring(1,5));
//returns a substring between indeces of string
//output:i ha
console.log(a.toUpperCase());
//converts the string into UpperCase
//output:HELLO
console.log(a.toLowerCase());
//converts the string into lowerCase
//output:hello
console.log(c.trim());
//trims the string from extra spaces
//output:a b

//-----------------------------------------------------------------------
//Number Methods
var x=5.245;
var y=7.222223;
console.log(x.toFixed(2));
//removes the decimal values into a whole value
//output:5
console.log(x.toExponential());
//changes the value into exponential from
//output:5.245e+0
console.log(x.toString());
//converts the numerical value into String and can convert to octal,decimal and binary formats
//output:5.245
