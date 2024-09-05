'use strict';

let number1 = +prompt('Стоимость товара', 0);
let number2 = +prompt(`Количество денег`, 100);
if(number1 > 0 && number2 > 0 && Number(number1) && Number(number2)){
    if(number1==number2){
        alert(`покупка прошла успешно`);
    }else if(number1<number2){
        alert(`Покупка совершена. Сдача ${number2-number1}р`);
    }else if(number1>number2){
        alert(`для покупки не хватает ${number1-number2}р`);
    }
}else{
    alert(`Введите коректные значения`);
}

let number = +prompt('Введите число', 10);

if(Number(number)|| number==0){
    if(number > 0){
        alert(1);
    } else if(number < 0){
        alert(-1);
    }else if(number==0){
        alert(0);
    }
} else{
    alert(`Введите коректное число`);
}

let a = prompt(`введите первое число`, 10);
let b = prompt(`введите второе число`, 10);
Number(a);
Number(b);
let result1 = (a + b < 4) ? 'Мало' : 'много';
alert(result1);

let login = prompt('Введите ваш логин', 'xcad');
let message;
let result2 = login=='Директор' ? 'Здравствуйте' : login=='Сотрудник' ? 'привет' : login=='' ? 'Нет логина' : 'все очень плохо';
alert(result2);

let login2 = prompt("Введите логин:");


if (login2 === null || login2 === "") {
  alert("Отменено");
} else if (login2 === "Админ") {
  let password = prompt("Введите пароль:");
  if (password === null || password === "") {
    alert("Отменено");
  } else if (password === "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}

// let age = prompt('age', 0);
// if(age>=18 && age<60){
//     alert('Привет')
// }else if(age>60){
//     alert('Добро пожаловать')
// }else{
//     alert('Вы слишком молоды')
// }

// ?

// let result = условие ? знач1 : знач 2;
// let result = (age>=18) ? 'Привет' : 'Вы слишком молоды';
// alert(result)

// let result = (age>=18 && age<60) ? 'Привет' : (age>60) ? 'Здравствуйте' : 'Вы слишком молоды';
// alert(result);

// a || b или
// a && b и
// !a не

// alert(true || false); //true
// alert(true || true); //true
// alert(false || false); //false
// alert(false || true); //true

// let hour = 8;
// if(hour < 9 || hour > 20){
//     alert('Закрыто');
// }else{
//     alert('Открыто');
// }

// let name = 'pashka';
// let surname = 'pashkovih';
// let nickname = 'pashok228';
// alert(name || surname || nickname || 'user');

// alert(true && false); //false
// alert(true && true); //true
// alert(false && false); //false
// alert(false && true); //false

// let hour = 10;
// let weekDay = 'пн';
// if(hour >= 10 && hour<= 18 && weekDay!='вс'){
//     alert('Открыто')
// } else{
//     alert('Закрыто')
// }

// alert(!true); //false
// alert(!0); //сначало false потом true
// alert(Boolean('Строка'));
// alert(Boolean(!'Строка')) //сначало true потом false

// alert(null || 2 || undefined); //2
// alert(1 && null && 2); //null
// alert(null || 2 && 3 || 4); //3

// a ||= b
// a || (a=b)
// let hasRoot = false;
// hasRoot ||= 'У мужланов нет прав';
// alert(hasRoot);

// let petsName = '';
// petsName ||= 'Неизвестный пiс';
// alert(petsName);

//??
//null undefind
// let user; //undefind
// alert(user??'Анонимус');

// let name = null;
// let surname; //undefind
// let nickname = 0; //true
// alert(name??surname??nickname??'Анонимус');

// || возвращает первое истинное значение
// ?? возвращает первое определенное значение

// let city = null;

// city ??= "Берлин";
// city ??= null;
// city ??= "Кельн";
// city ??= "Гамбург";

// alert(city);

// let number1 = prompt(`Стоимость товара, 100`);
// let number2 = prompt(`Количество денег, 100`);
// let result = (number1>=number2) ? `для покупки не хватает ${number1-number2}р` : (number1<number2) ? `Покупка совершена. Сдача ${number1-number2}р` : 'неверный формат ввода' ;
