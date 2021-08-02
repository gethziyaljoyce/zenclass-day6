//to get largest of three

var aa = (f, s, t) => {
    if (f > s && f > t) {
        console.log(f);
    } else if (s > f && s > t) {
        console.log(s);
    } else {
        console.log(t);
    }
}
aa(1, 2, 3);

//sum of the digits

let n = 123;
function add(n) {
    let sum = 0;
    let num = n.toString().split("");
    for (var i = 0; i < num.length; i++) {
        sum = sum + (+num[i]);
    }
    return sum;
}
console.log(add(n));

//sum numbers using IIFE

(function () {
    const arr = [9, 8, 5, 6, 4, 3, 2, 1];
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
})();

//title caps

var arr = ["guvi", "geek", "zen", "fullstack"];

var ano = function() {
    for (var i = 0; i <= arr.length; i++) {

    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
   }
   ano();

//return prime numbers 

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    var count = 0;
    for (let i = 1; i <= num; i++) {

        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        return num;
    }

});
console.log(myPrime);



//sum the numbers in array

let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = (a, b) =>
    a + b
sum = num.reduce(sum);
console.log(sum);

//rotate array by k times

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;

(function () {
    var arr = [];
    out = arr.slice(k + 1, arr.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr[i];
        count = count + 1;
    }
    console.log(arr);
})();

//title caps

var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
    for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
   })();

//odd numbers in array using IIFE

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }

    }

})();

//code reverse

(function (str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd");

//remove duplicate

var res = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {

        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);

        }
    }
    console.log(newArr);
}
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);


//show the expected output

var array = [
    [
        ["firstname", "vasanth"], ["lastname", "Raje"], ["age", 24], ["role", "JSWizard"]
    ],
    [
        ["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]
    ]
];
var final = []
while (array.length != 0) {
    var outer_remove = array.shift();
    var new_object = {};
    while (outer_remove.length != 0) {
        var inner_remove = outer_remove.shift()
        var key = inner_remove[0]
        var value = inner_remove[1]
        new_object[key] = value
    }
    final.push(new_object)
    console.log(final);
}
//sum odd numbers
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
    if (c % 2 != 0) {
        return a + c;
    } else { return a + 0; }
}, 0)
console.log(s);

// swap odd and even numbers
var aa = data => {
    var a = data;
    var l = " ";
    for (i = 0; i < a.length - 1; i++) {
        var s = a[i + 1];
        var b = a[i];
        l += s;
        l += b;
        i = i + 1;
    }
    if ((a.length % 2) != 0) {
        l += a[a.length - 1]
    }
    console.log(l);
}
aa("1234");