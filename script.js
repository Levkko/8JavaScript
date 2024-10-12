//Останнє значення циклу
let i = 3;
while (i) {
  alert( i-- );
}
//1. Тому що 0 це false і скрипт обривається


//Яке значення виведе цикл "while"?
let i = 0;
while (++i < 5) alert( i );//1-4
let i = 0;
while (i++ < 5) alert( i );//1-5


//Яке значення виведе цикл "for"?
for (let i = 0; i < 5; i++) alert( i );//1-4
for (let i = 0; i < 5; ++i) alert( i );//1-4


//Виведіть парні числа
for (let mumber = 2; number <= 10; number++) {
    if (mumber % 2 == 0) {
        alert(mumber);
    }
}


//Замініть цикл "for" на "while"
for (let i = 0; i < 3; i++) {
    alert( `число ${i}!` );
  }
//рішення:
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);


//Повторяти цикл, доки ввід невірний
let number;
do {
    number = prompt("Write num > 100", 0)
} while (number <= 100 && number);


//Вивести прості числа
let n = 10;
for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(i);
  }
}