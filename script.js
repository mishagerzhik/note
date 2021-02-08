// 'use strick';

// a = 5;
// console.log(a);

//variables переменные


// var leftBorderWidth = 1; //  видна везде в функции(устаревшая тема)
// let second = 2; //видна только в рамках блока {...}, в котором объявлена.
// const pi = 3.14; //

//типы данных 

// let number = 5; //число
// let string = 'Hello!'; //строка пишеться в кавычках
// let sym = Symbol(); //символ
// let boolean = true; //булиновая да или нет
// null;
// undefined;
// let obj = {};

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);


// let persone = {
//     name: 'Misha',
//     age: 26,
//     isMarried: false,
// };

// console.log (persone['name']);

// let arr = ['plum.png','orange.jpeg','apple.bpm'];

// console.log(arr[0])

// alert('Hello world!');

// let answer = confirm('Are you here?');

// console.log(answer);

// let answer = +prompt('Есть ли вам 18?', 'Да');

// console.log(typeof(answer));

// console.log('arr' + ' - object');
// console.log(4 + +' - object');

// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log('2' === 2);


// let isChecked = true,
//     isClosed = false;

// console.log(isChecked || !isClosed);



// let num = 50;

// if (num < 49) {
//     console.log('неверно!')
// } else if (num > 100) {
//     console.log('много!')
// } else {
//     console.log('верно!')
// };

// (num == 50) ? console.log('верно') : console.log('неверно');


// switch (num) {
//     case num < 49:
//         console.log('неверно!'); 
//         break;
//     case num > 100:
//         console.log('много!');
//         break;
//     case num > 80:
//         console.log('все еще много!');
//         break;
//     case 50:
//         console.log('верно!');
//         break;
//     default:
//         console.log('чтото пошло не так');
//         break;
// }


// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue
//     }
//     console.log(i)
// }

// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);


// let calc = function(a,b) {
//     return (a + b);
// }

// let calc = (a,b) => a+b

// console.log(calc(3,4));

// console.log(calc(8,4));


// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = 'test';
// console.log(str.length);


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2px';

// // console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// setInterval(sayHello, 3000);

// function sayHello() {
//     alert('Hello world!');
// }

let btn = document.querySelector('.btn'),
    blueBox = document.querySelector('.blue_box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 400) {
            clearInterval(id);
        } else {
            pos++;
            blueBox.style.top = pos + 'px';
            blueBox.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn_bg'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

// let govno = 10;
//     ebanoe = 10;

// console.log(++govno)

// function message(a, b) {
//     return (a + b)
// };
// console.log(message(4, 6));
// // одно и тоже
// let calc = (a, b) => a + b;
// console.log(calc(4, 6));

// let huynja = (a, b, c) => a + b + c;
// console.log(huynja('huy ', 'na', ' blude'));

// function learnJS (a, b) {
//     console.log('Я учу ' + a);
//     b();
// }
// learnJS ('Java script', function () {
//     console.log('Я охуел!')
// });

// function done () {
//     console.log('Я охуел!')
// };
// learnJS('Java script', done);

// let govno = {
//     color: 'black',
//     size: 'big',
//     smell: 'poisonous'
// };
// for (let sss in govno) {
//     console.log('Параметр ' + sss + ' имеет значение ' + govno[sss]);
// };

// let timerId = setTimeout (sayHello, 3000);
// function sayHello() {
//     alert('Hello World!');
// };

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             cinsole.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// let user = {
//     name: 'John',
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Snow', ' huy', ' chmo']);

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

let btnHz = document.querySelector('.hz');

btnHz.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    }
    show();
})