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

//--------------------------------------------------------------------------------------------------------
//Global Methods

//Console-info,warn,error,log,table
console.info("Hello Hi");
//sends an information message to the console but does not print into
//output:Hello hi
console.warn("Stop");
//used to display a warning statement in yellow color with a caution cone symbol
//output:Stop
console.error("Close");
//Used to display error statement in red with a cross.
//output:Close
console.log("A");
//prints and displays the value 
//output:A
console.table(["a"],["b"]);
//displays the value in table format in the console
//output:0 a 1 b

//console.log(alert("Ignore this"));
//displays an alert popup after every second
//output: popup with message Ignore this and Ok button

//console.log(prompt("Stop"));
//displays a popup with the given message along with a text box and OK button
//output: popup with message Stop, a text box and OK button.

//console.log(confirm("Alright"));
//displays a popup with the message with ok and cancel button
//output:popup with message Alright,ok and cancel button

console.log(Number("a"));
//checks whether the value is a number and also converts certain values into numbers
//output: null
console.log(isNaN(a));
//checks whether the value is a number or Not
//output: true
console.log(parseFloat("2.345"));
//converts string to float Values
//output:2.345
console.log(parseInt("2.3"));
//converts string to int Values
//output:2
console.log(String(true));
//converts other data type to string
//output:"true"
console.log(Boolean(""));
//displays 0 or 1 if the value is present
//output:false;








//----------------------------------------------------------------------------------------------------------


