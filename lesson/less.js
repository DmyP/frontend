

alert('hi');
document.writeln("<pre>hi</pre>");
document.write("hi");
console.log("hi");
var a = parseFloat(prompt("enter num", "0"));
document.write(+a + 10);
var c = confirm("are you admin")? prompt("enter password") : alert("get out");

///

function f() {
    var a = 10;
    b = 20;
}
f();

document.write(a);//error
document.write(b);

///

a(); // error var a undefined
b();
var a = function f() {
    var a = 10;
    b = 20;
}
function b() {
    var a = 10;
    b = 20;
}

////

var str1 = "hello";
var str2 = new String("hello");

str1.name = "Stroka";
str2.name = "Stroka";
document.write(str1 + "</br>");
document.write(str2 + "</br>");
document.write(str1.name + "</br>");
document.write(str2.name+ "</br>");

/////

c.toFixed(2.6);
Math.round(2.6);
Math.floor(2.6);

////
if (Infinity) { // все что не 0 не "" не инф фалс
    document.write("hi");
} else {
    document.write("bye");
}

/////
var arr = new Array(10,20,30);
var arr2 = Array(10,20,30);
var arr3 = [10,20,30];
document.writeln(arr);
document.writeln(arr2);
document.writeln(arr3);

///

var a = prompt("enter length");
var arr = new Array(a);
var arr2 = new Array(100);
document.writeln(arr.length);
document.writeln(arr2.length);

////

var a = new Array[null, undefined, "hi", arr];
a[999] = "hi";