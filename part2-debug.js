
//numbers in the array

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
  new_string = new_string + numsArr[i]
} console.log(new_string);

//print numbers in the array

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
  new_string = new_string + numArr[i] + ",";
} console.log(new_string);

//print last to first

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 10; i >= 0; i--) {
  new_string = new_string + numsArr[i] + " ";
}
console.log(new_string);

//replace even number with word Even

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 == 0) {
    numsArr[i] = "Even";
  }
}
console.log(numsArr);

//If the index is even replace it with even

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

//add all the numbers

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
  sum = sum + numsArr[i];
}
console.log(sum);

//add even numbers

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
  if (array[i] % 2 == 0)
    sum = sum + array[i];
}
console.log(sum);

//add even numbers and subract odd numbers

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 == 0) {
    sum = sum + numsArr[i];
  } else {
    sum = sum - numsArr[i];
  }
}
console.log(sum);

//print inner array

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

//print elements in the inner array
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";
var inner_array = [];
for (var i = 0; i < numsArr.length; i++) {
  inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    str_all = str_all + inner_array[j];
  }
}
console.log(str_all);

//replace the even index by word even

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (j = 0; j < inner_array.length; j++) {

    if (j % 2 === 0) {
      inner_array[j] = "even";
    }
  }

}
console.log(numsArr);

//print the elements in reverse

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = inner_array.length - 1; j < 0; j--)
    str_all += str_all + inner_array[j] + " ";
}
console.log(str_all);


//add elements based on odd or even values
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 != 0) {
      sum_odd = sum_odd + inner_array[j];
    }
    else {
      sum_even = sum_even + inner_array[j];
    }
  }
}
console.log(sum_odd);

console.log(sum_even);


//to get the largest of three

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
  var data = n.toString().split("");
  for (i = 0; i < n.toString().length; i++) {
    sum = sum + (+data[i]);
  }
  return sum;
}
console.log(add(n));