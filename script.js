alert( null || 2 || undefined );
// 2, бо це перше правдиве значення

alert( alert(1) || 2 || alert(3) );
//сочатку 1, потім 2

alert( 1 && null && 2 );
//null

alert( alert(1) && alert(2) );
//1, а потім undefined

alert( null || 2 && 3 || 4 );
//3

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

if (-1 || 0) alert( 'перший' );
if (-1 && 0) alert( 'другий' );
if (null || -1 && 1) alert( 'третій' );
//перший і третій


let registration = prompt("Введіть логін");
    if (registration === "admin") {
        let password = prompt("Введіть пароль");
            if (password === "host") {
                alert("Ласкаво просимо!");
            } else if (password === '' || password === null) {
                alert("Скасовано");
            } else {
                alert("Невірний пароль");
            }
    } else if (registration === '' || registration === null) {
        alert("Скасовано");
    } else {
        alert("Я вас не знаю!");
    }