//Перепишіть функцію, використовуючи '?' або '||'
  function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
  }


//Функція min(a, b)
function minLetter(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


//Функція pow(x, n)
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
  } else {
    alert( pow(x, n) );
  }
//Я це так і не зміг зробити, то дуже складне логічне завдання :/