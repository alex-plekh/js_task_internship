// Переменные и выражения

// 1. Создайте три переменные. Присвойте первой переменной числовое значение.
//     Вторая переменная равна первой переменной, увеличенной в три раза. Третья
// переменная равна сумме двух первых. Выведите на экран все три.

// 1)
let first = 5;
let second = first * 3;
let third = first + second;
alert(first);
alert(second);
alert(third);

// 2. Создайте переменные firstName и lastName для хранения имени и фамилии,
//     запишите в них значения из модального окна prompt. Выведите на экран
// приветствие “What’s up (firstName) (lastName)”.

// 2)
let firstName = prompt("Your Name?");
let lastName = prompt("Your Surname?");
alert(`What’s up ${firstName} ${lastName}`);

// 3. Создайте переменные x и y для хранения числа. Значения переменные
// получают из prompt. Рассчитайте произведение, частное, разность и сумму этих
// значений. Результат последовательно отобразите в модальном окне.

// 3)
let x = +prompt("Enter any number!");
let y = +prompt("Enter any number!");
alert(`x * y: ${x * y}`);
alert(`x / y: ${x / y}`);
alert(`x - y: ${x - y}`);
alert(`x + y: ${x + y}`);

// 4. Напишите в переменных формулу для расчета з/п за июль с учетом, что
// количество рабочий часов, количество рабочих дней в неделе и рейт за час –
// значения читаются из prompt. (Просчитывать какой это месяц, 30 или 31 день не
// нужно).

// 4)
let workingHours = +prompt("Number of working hours?");
let workingDays = +prompt("Number of working days per week?");
let rate = +prompt("Rate per hour $?");
let cofWeeks = 4.3;
let salary = workingHours * workingDays * rate * cofWeeks;
alert(salary);

// 5. Напишите программу, которая определяет, является ли число, введенное
// пользователем, нечётным.

// 5)
let num = prompt("Enter number!");
if (num %2===0) {
    alert('even number');
} else{
    alert('odd number');
}
s
// 6. Напишите программу, которая проверяет является ли значение, введенное
// пользователем, числом.

// 6)
let num = prompt("Enter something!");
if (isNaN(num)){
    alert("You entered not a number");
}else {
    alert("You entered the number!");
}

// 7. Запишите в переменную случайное число (Math.random()), умножьте его на 100
// и округлите. Получите второе число из окна prompt. Сравните и отобразите в
// модальном окне: первое число меньше второго или нет, а также оба значения.

// 7)
let random = Math.round(Math.random() * 100);
let userNumber = +prompt("Enter your number");
if (random < userNumber){
    alert("The second number is greater than the first!");
}else if(random > userNumber){
    alert("The first number is greater than the second!");
}else if(random === userNumber){
    alert("Numbers are equal!");
}
alert(`random number:${random}; user number:${userNumber};`);

// 8. Создайте переменную str и запишите в нее из prompt такое предложение «Мне
// нравится изучать Front-end». Также создайте еще одну переменную и запишите
// в нее из prompt то, что вам нравится изучать. С помощью методов строки
// определите существует ли то что вам нравится изучать в исходной строке str.
//     Также возьмите подстроку «Мне нравится изучать » из исходной переменной str
// сохраните ее в отдельной переменной. Создайте еще одну переменную result
// куда запишите результирующую строку объединяющую «Мне нравится
// изучать » и то что вам нравится изучать (примените для этого обратные
// кавычки ` `). Отобразите результат в модальном окне.

// 8)
let str = prompt("", "Мне нравится изучать Front-end");
let str2 = prompt(" What do you like to study?");
let include = str.includes(str2);
let str3 = "Мне нравится изучать";
let result = `${str3} ${str2}`;
alert(result);
alert(include);


// Условные и логические операторы

// 1. В переменную x записывается число, введенное пользователем в диалоговое
// окно. Проверить и вывести на экран, x – отрицательное число, положительное
// или ноль.

// 1)
let x = +prompt("Enter number");
if (x < 0){
    alert("You entered a negative number!")
}else if(x > 0){
    alert("You entered a positive number!")
}else if (x === 0){
    alert("You entered zero!")
}

// 2. У вас и у вашего друга в кармане столько денег, сколько было указано в окнах
// prompt. В зависимости от общей суммы ваших сбережений вы можете полететь
// на Майорку или выпить пива. С помощью условного оператора определите
// ваши возможности и отобразите на экране в alert.

// 2)
let yourMani = +prompt("How much money do you have?($)");
let friendsMoney = +prompt("Your friend's money ($)");
let allTheMoney = yourMani + friendsMoney;
let majorca = 1000;
let beer = 20;
if (allTheMoney >= majorca){
    alert("You are going to Majorca");
}else if(allTheMoney >= beer){
    alert("Congratulations, you will have a beer");
}else if(allTheMoney < beer){
    alert("You are beggars((")
}

// 3. В переменную age запишите возраст человека. Если значение больше или
// равно 20 и меньше 27, в alert выводится “Выслать повестку”.

// 3)
let age = +prompt("Your age?");
if(age >= 20 && age < 27){
    alert("Выслать повестку.");
}else{
    alert("Вам повезло.");
}

// 4. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая
// маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в
// противном случае – ожидаете.

// 4)
let numBus = +prompt("Which minibus arrived?");
if ((numBus === 7) || (numBus === 225) || (numBus === 255)){
    alert("Have a good trip!");
}else {
    alert("Wait!!");
}

// 5. В переменную day записан текущий день недели. Если это не суббота и не
// воскресенье, выведите в alert сообщение о необходимости идти на работу.

// 5)
let day = new Date().getDay();
let saturday = 6;
let sunday = 0;
if ((day !== saturday ) && (day !== sunday)){
    alert('You need to go to work!');
} else{
    alert('Today is a day off!');
}

// 6. Запросите из prompt переменные x и y значения от -20 до 20. Если переменная
// x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то
// выведите сумму этих переменных, иначе выведите 'Неверно!'.

// 6)
let x = +prompt("Enter a value from -20 to 20");
let y = +prompt("Enter a value from -20 to 20");
if ((x > 20 || x < -20) || (y > 20 || y < -20)){
    alert('You enter incorrect parameter. It should be between -20 and 20');
}else if (x <= 1 || y >= 3 || y < 0){
    alert( x + y);
}else {
    alert("Неверно!");
}

// 7. Если переменная x больше 2 и меньше 11, или переменная y больше или
// равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5.
// Выведите новое значение переменной на экран.

// 7)
let x = +prompt("Enter your number!");
let y = +prompt("Enter your number!");
if ((x > 2 && x < 11) || (y >= 6 && y < 14)){
    x += 2;
}else {
    x += 5;
}
alert(x);

// 8. Получите из prompt значение для имени пользователя. Выведите на экран
// приветствие. Учтите вариант, что пользователь может не ввести ничего или
// нажать на Отмена.

// 8)
let userName = prompt("Enter your name!");
if (userName === "" || userName === null){
    alert("error");
}else {
    alert(`Hello ${userName}!`);
}

// 9. Создайте две переменные: greeting и lang. Переменная greeting – пустая
// строка. Переменная lang может принимать три значения: 'ru', 'en',
//     'de' (например, из prompt). Если она имеет значение 'ru', то в переменную
// greeting запишите приветствие на русском языке, если имеет значение 'en' – то
// на английском, если 'de' – на немецком. Выведите на экран приветствие в
// зависимости от значения переменной lang. Решите задачу через if-else и через
// switch-case.

// 9)
let greeting = "";
let lang = prompt("Please enter one of the languages: ru, en, de!");

if (lang === "ru"){
    greeting += "Привет!";
} else if (lang === 'en'){
    greeting += "Hello!";
} else if (lang === 'de'){
    greeting += "Hallo!";
}
alert(greeting);
// 2.switch-case
switch (lang){
    case "ru":
    greeting += "Привет!";
    break;

    case "en":
        greeting += "Hello!";
        break;

    case "de":
        greeting += "Hallo!";
        break;
}
alert(greeting)

//10. В переменной month хранится текущий месяц (new Date()). Определите в какую
// пору года попадает этот месяц (зима, лето, весна, осень).

// 10)
let month = new Date().getMonth();
if (month === 11 || month === 0 || month === 1){
    alert("Winter");
}else if(month === 2 || month === 3 || month === 4){
    alert("Spring");
}else if(month === 5 || month === 6 || month === 7) {
    alert("Summer");
}else {
    alert("Autumn");
}

// 11. Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day
// принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в
// переменную result запишите название дня недели на русском языке в
// соответствии со значением переменной day (0 – воскресенье, 1 – понедельник,
//     2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день
// недели будет на английском.

// 11)
let lang = prompt("Please enter one of the languages: ru, en!");
let day = +prompt("Enter a value from 0 to 6");
let days_ru = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
let days_en = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let result;
if (lang === "ru"){
    result = days_ru[day];
}else if(lang === "en"){
    result = days_en[day];
}
alert(result);

// 12. 1. Получить от пользователя имя и возраст. Записать это в разные переменные.
// 2. Написать конструкцию switch, которая проверяет 2 случая
// - Если имя === "John" и возраст === 29 вывести в консоль "Привет (имя)
// (возраст)"
// - Если имя === "Kate" и возраст === 15 вывести в консоль "Привет (имя)
// (возраст)"
// - Если не совпадает ни одно условие вывести в консоль "Пока"
// (Написать решение задачи еще и через оператор ?)

// 12)
// switch case
let name = prompt("Enter your name!");
let age = +prompt("Enter your age!");
switch (name, age){
    case "John", 29:
    case  "Kate", 15:
        alert(`Привет ${name} ${age}`);
        break;
    default:
       alert("Пока") ;
}

// ?
((name === 'John' && +age === 29) || (name === 'Kate' && +age === 15)) ? alert(`Привет ${name} ${age}`) : alert('Пока');

// Циклы

// 1. Сформируйте строку вида " .#.#.#.#.#. " с помощью цикла for.

// 1)
let str = "";
for (let i = 0; i < 5; i++) {
    str += ".#";
}
alert(`${str}.`);

// 2. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого
// четного значения счетчика.

// 2)
let str = " ";
for (let i = 1; i < 10; i++) {
    if(i %2 === 0){
        str += " " + i * i;
    }
}
alert(str);

// 3.Используя любой цикл, напишите программу, которая в консоли выводит
// текстовое поздравление. Программа поздравляет того, чье имя определяется в
// переменной username:

// 3)
let userName = prompt('Enter your name');
let str1 = 'Happy birthday to you';
let str2 = `Happy birthday dear ${userName}`;
for(let i = 0; i < 4; i++) {
    if (i === 2) {
        alert(str2);
    } else {
        alert(str1);
    }
}

// 4. Напишите цикл с confirm, который продолжается при нажатии на Отмена и
// прерывается при нажатии на Ok.

// 4)
let conf;
while (!conf){
    conf = confirm('click on cancel or ok!');
    alert(conf);
}

// 5. В окно prompt вводится число. Напишите цикл, в котором суммируются все
// нечетные числа до диапазона, введенного пользователем. Результат
// отобразите в окне alert.

// 5)
let num = +prompt("Enter your number!");
let sum = 0;
for (let i = 1; i < num; i += 2) {
    sum += i;
    alert(sum);
}

// 6. Напишите бесконечный цикл, который прерывается при помощи команды break,
// когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее
// цикл, и количество итераций цикла.

// 6)
let i = 0;
while (true){
    let num = Math.random();
    i++;
    if (num > 0.9){
        alert(`Число прервавшее цикл: ${num}`);
        alert(`Количество итераций ${i}`);
        break;
    }
}

// 7. Используя вложенные циклы, распечатайте в консоли значения таблицы
// умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...

// 7)
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i * j);
    }
}

// 8. С помощью цикла for с пустым телом сформируйте строку, представляющую
// из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...

// 8)
let str="";
let fn1 = 0;
let fn2 = 1;
let fn = fn1 + fn2;
for (let i = 0; i <= 10; str += fn1 + "  ", fn = fn1 + fn2, fn1 = fn2, fn2 = fn, i++);
console.log(str);

// 9. Запустите цикл, в котором пользователю предлагается вводить число с
// клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла
// распечатайте количество введенных чисел, их общую сумму и среднее
// арифметическое.

// 9)
let num;
let i = -1;
let sum = 0;
while (num){
    num = +prompt("Enter your number!");
    i++;
    sum += num;
}
alert("number of entered numbers:" + i + "total amount" + sum + "arithmetical mean" + sum / i);

// 10. Напишите проверку пароля, введенного пользователем (заведомо определите
// пароль). Если введенный пароль правильный, то программа выдает сообщение
// “Вы успешно авторизованы”. Если пароль неправильный, программа снова
// выдает запрос пароля – до тех пор, пока пользователь не введет правильный
// пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно
// подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”.
// Если ответ утвердительный, тогда выдать сообщение “Вы отменили
// авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля

// 10)
let pass = "React";
let que;
while (pass !== que) {
    que = prompt("Пожалуйста,введите пароль!");
    if (pass === que) {
        alert("Вы успешно авторизованы!");
        break;
    } else if (que === "" || que == null) {
        let cancel = confirm("Вы уверены, что хотите отменить авторизацию?");
        if (cancel === true) {
            alert("Вы отменили авторизацию!")
            break;
        }
    }
}

// 11. Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1
// до 50, но есть условия:
//     - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово
// «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а
// слово «FizzBuzz»;

// 11)
for (let i = 0; i <= 50; i++){
    if (i %3 === 0 && i %5 === 0){
        alert('FizzBuzz');
    } if (i%3 === 0){
        alert('Fizz');
    } if (i%5 === 0){
        alert('Buzz');
    } else {
        alert(i);
    }
}
