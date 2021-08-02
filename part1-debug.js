//1

let admin = 9;
frname = 10.5;
frname = "Guvi";
lsname = "geek"
admin = frname + " " + lsname;
alert(admin);

//2

let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + " " + lname;
alert(`hello ${name}`);

//3

let a = prompt("First number?");
let b = prompt("Second number?");
alert((+a) + (+b));

//4

var ar = 2 > 12;
if (ar) {
  console.log("Code is Blasted")
}
else {
  console.log("Diffused")
}

//5

let ab = prompt("Enter a number?");
let ak = parseInt(ab);
if (ak) {
  console.log('OMG it works for any number inc 0');
}
else {
  console.log("Success");
}
//we should give string as an input..then we will get success in console.

//6

let value = prompt('How many runs you scored in this ball');
let n = parseInt(value);
if (n === 4) {
  console.log("You hit a Four");
} else if (n === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}


//7 

let login = 'Employee';
let message0 = "welcome";
if (login == 'Employee') {
  console.log(message0);
} else {
  console.log("Greetings");
}

//8


let message;
if (null || 2 || undefined) {
  message = "welcome boss";
}
else {
  message = "Go away";
}
console.log(message);

//9

let message1 = 6;
let lock;//Dont change any code below this
if (null || lock || undefined) {
  message1 = "Go away";
}
else {
  message1 = "welcome";
}
console.log(message1);

//10

let message2;
let lock = null;
if (lock && " " || undefined) {
  message2 = "Go away";
}
else {
  message2 = "welcome";
}
console.log(message2);

//11

let i = 3;
while (i <= 3) {
  console.log(i--);
}

//12

for (i = 1; i <= 10; i++) {
  console.log(i);
}

//13

for (let num = 2; num <= 20; num += 1) {
  if (num % 2 === 0) {
    console.log(num)
  }
}

//14

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

//15

let countdown = 100;
while (countdown > 0) {
  countdown++;
  if (countdown == 0) {
    console.log("bomb triggered");
  }
}

// 16

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);

//17

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
} if (lemeout) {
  msg += "Hello";
} console.log(msg);

//It will give hi..because msg represents string