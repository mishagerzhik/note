'use strick';

a = 5;
console.log(a);

//variables переменные


var leftBorderWidth = 1; //  видна везде в функции(устаревшая тема)
let second = 2; //видна только в рамках блока {...}, в котором объявлена.
const pi = 3.14; //

//типы данных 

let number = 5; //число
let string = 'Hello!'; //строка пишеться в кавычках
let sym = Symbol(); //символ
let boolean = true; //булиновая да или нет
null;
undefined;
let obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);


let persone = {
    name: 'Misha',
    age: 26,
    isMarried: false,
};

console.log (persone['name']);

let arr = ['plum.png','orange.jpeg','apple.bpm'];

console.log(arr[0])

// alert('Hello world!');

// let answer = confirm('Are you here?');

// console.log(answer);

// let answer = +prompt('Есть ли вам 18?', 'Да');

// console.log(typeof(answer));

// console.log('arr' + ' - object');
// console.log(4 + +' - object');

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log('2' === 2);


let isChecked = true,
    isClosed = false;

console.log(isChecked || !isClosed);






