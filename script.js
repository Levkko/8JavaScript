
//if (рядок з нулем)
if ("0") { 
    alert( 'Привіт' );
  } //Так, alert спрацює в цьому випадку


//Назва JavaScript
let company = prompt("Яка офіційна назва JavaScript?");

    if (company === "ECMAScript") {
        alert("Правильно!");
    } else {
        alert("Ви не знаєте? ECMAScript!");
    }


//Покажіть знак
let number = Number(prompt("Введіть будь-яке число"));
    if (number > 0) {
        alert(1)
    } else if (number < 0) {
        alert(-1)
    } else {
        alert(0)
    }


// Перепишіть 'if' на '?'
let result;
    result = (a + b < 4) ? 'Нижче' : 'Вище';


//Перепишіть 'if..else' на '?'
let message =
    (login === 'Працівник') ? 'Привіт':
    (login === 'Директор') ? 'Вітаю':
    (login === '') ? 'Немає логіну':
    '';
