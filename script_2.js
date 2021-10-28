// Массивы и объекты

// 1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', '6'];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])) continue;
    arr[i] = Number(arr[i]);
    sum = sum + arr[i];
}
alert(sum);

// 2. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
//     Переберите массив и распечатайте в консоли значения его элементов,
//     возведенные в пятую степень, не используя функцию Math.pow().

// 2)
let arr = [];
let n= +prompt('Enter number');
let arrDeg = [];
for (let i = 0; i < n; i++) {
    let item = (Math.random()).toFixed(2);
    let degreeNum =item ** 5;
    arr.push(item);
    arrDeg.push(degreeNum);
}
console.log(arr);
console.log(arrDeg);

// 3. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a. Добавьте в начало массива значение ‘Backbone.js’
// b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c. Добавьте в массив значение ‘CommonJS’ вторым элементом
// d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert
// со словами “Это здесь лишнее”

// 3)
let arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js');
arr.splice(1, 0, 'CommonJS');
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'jQuery') {
        delete arr[i];
        alert('Это здесь лишнее - jQuery');
    }
}
alert(arr);
console.log(arr);

// 4. Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь
// однажды сломал головой фонарь’ с помощью любых методов массива (indexOf,
//     splice ...). Затем объедините элементы массива в строку и выведите в alert
// исходный и итоговый варианты.

// 4)
let str = "Как однажды Жак звонарь сломал фонарь головой";
let arr = str.split(' ');
let delLastElem = arr.pop();
arr.splice(1, 1);
arr.splice(3, 0, "однажды");
arr.splice(5, 0, "головой");
str = arr.join(' ');
alert(str);

// 5. Создайте ассоциативный массив person, описывающий персону, с
// произвольным количеством произвольных полей. С помощью оператора in или
// typeof проверьте наличие в объекте свойства, прочитанного из prompt, и
// выведите его на экран. Если свойства нет, то добавляйте его в объект со
// значением, которое также запрашивается из prompt.

// 5)
let person ={
    name:"John",
    age : 29,
    married : false,
    position: "Developer"
};
let property = prompt('Enter property');
if (property in person){
    alert(person[property])
}else {
    person[property] = prompt("Please, enter any property!");
}
console.log(person);

// 6. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства
// значениями, прочитанными из prompt (например: brand, model, resolution,
//     color...), не используя вспомогательные переменные. Добавьте этот гаджет
// персоне, созданной ранее.

// 6)
// 1.
let modelPhone = {
    brand: prompt("Enter the brand"),
    model: prompt("Enter model"),
    resolution: prompt("Enter the resolution"),
    color: prompt("Enter color")
};
person.modelPhone = modelPhone;
console.log(person)
// 2.
let modelPhone = {};
modelPhone.brand = prompt("Enter the brand");
modelPhone.model = prompt("Enter model");
modelPhone.resolution = prompt("Enter the resolution");
modelPhone.color = prompt("Enter color");
person.modelPhone = modelPhone;
console.log(person)

// 7. Создайте объект dates для хранения дат. Первая дата – текущая, new Date.
// Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в
// формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат
// объекта dates.

// 7)
let currentDate = new Date();
let oldDate = new Date();
let dates = {
    currentDate : new Date(),
    oldDate : new Date(oldDate.setDate(oldDate.getDate() - 365))
};
let newDate = new Date(prompt("Enter date in format  yyyy-MM-dd"));
console.log(currentDate);
console.log(newDate >= dates.oldDate && newDate <= dates.currentDate);
console.log(newDate);
console.log(dates);

// 8. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt
// для ввода любых символов, полученное значение добавляйте в конец
// созданного массива. После выхода из цикла посчитайте сумму всех чисел
// массива и выведите в alert полученный результат.

// 8)
let arr = [];
for (;;){
    let num = prompt("Введите любой символ!");
    if (!isNaN(+num) && num){
        arr.push(+num);
    }else if (num){
        alert("Вы ввели не число");
    }else{
        break;
    }
}
let res = arr.reduce((acc, item) => acc + item,0)
alert('Сумма - ' + res);
console.log(arr);

// 9. Используя вложенные циклы, сформируйте двумерный массив, содержащий
// таблицу умножения:

// 9)
let arr = [];
for (let i = 1; i < 10; i++) {
    arr[i-1] = [];
    for (let j = 1; j < 10; j++) {
        arr[i-1].push(`${i} x ${j} = ${i * j}`);
    }
}
console.log(arr);

// 10. Создайте структуру данных, полностью описывающую html-разметку картинки.

// 10)
const img = {
    src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    alt: "",
    style: 'border: 1px solid #ccc',
    width: 200
};
console.log(img);

// Функции

// 1. Напишите функцию max, которая сравнивает два числа и возвращает
// большее:

// 1)
function max(a,b){
    if (a > b){
        return a;
    }else if(b > a){
        return b;
    }
}
alert(max());

// 2. Напишите функцию-аналог Math.min(). Функция принимает любое количество
// чисел и возвращает меньшее из них:

// 2)
function returnsMin(){
    const arrArg = [...arguments];
    return arrArg.reduce((acc, item) => {
        if (acc > item) return acc = item;
        return acc;
    });
}
console.log(returnsMin());

// 3. Изучите перебирающие методы массивов: forEach, filter, map. Создайте
// массив объектов users (~10 объектов), каждый объект имеет поля firstname,
//     lastname, age с разными значениями. Используя встроенные функции массивов:
//     a. Отфильтруйте пользователей младше 18 лет
// b. Добавьте каждому объекту поле fullName, которое является
// конкатенацией имени и фамилии
// c. Сформируйте новый массив, который содержит только полное имя
// пользователей

// 3)
let users = [
    {firstName: 'John', lastName: 'Smith', age: 24},
    {firstName: 'Kate', lastName: 'Johnson', age: 4},
    {firstName: 'Poll', lastName: 'Williams', age: 21},
    {firstName: 'Lena', lastName: 'Jones', age: 24},
    {firstName: 'Tim', lastName: 'Brown', age: 33},
    {firstName: 'Tom', lastName: 'Davis', age: 45},
    {firstName: 'Chris', lastName: 'Miller', age: 73},
    {firstName: 'Alice', lastName: 'Wilson', age: 12},
    {firstName: 'Dmitrii', lastName: 'Harris', age: 35},
    {firstName: 'Vladimir', lastName: 'Lee', age: 17}
];
//a)
let age = users.filter((item) => item.age < 18);
console.log(age)
//b)
users.forEach((item) => {
    item.fullName = item.firstName+' '+item.lastName;
});
console.log(users);
// c)
let newArr = users.map((item) => {
    return {fullName: item.firstName+' '+item.lastName};
});
console.log(newArr);

// 4. Напишите функцию аналог метода массива shift. Функция удаляет из
// переданного в параметре массива первый элемент.

// 4)
function removeFirstElement(arr){
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(removeFirstElement(['','', '', '', '']));

// 5. Напишите функцию аналог метода массива push. Функция добавляет в конец
// переданного в параметре массив произвольное количество элементов.

// 5)
function addsToTheEnd(arr){
    let newArr = [];
    for (let i = 1; i < arguments.length; i++) {
        newArr.push(arguments[i]);
    }
    return [...arr, ...newArr];
}
console.log(addsToTheEnd(['1', 2, '9', 'a', '1b']));

// 6. Напишите функцию аналог метода Object.assign(). Первый параметр функции -
// целевой объект, поля которого будут изменены или расширены. Остальные
// параметры - объекты-источники, полями которых будет расширяться целевой
// объект.

// 6)
let source = {firstname: 'Kate', age: 4};
let a = extend(source, {firstname: 'Alice'}, {lastname: 'Wilson'});
function extend(source) {
    let obj = {};
    for (let i = 1; i < arguments.length; i++) {
        obj = {
            ...obj,
            ...arguments[i]
        };
    }
    return {
        ...source,
        ...obj
    }
}
console.log(source);
console.log(a);

// 7. Напишите функцию setComment с параметрами: date, message, author. Дата и
// текст сообщения - обязательные параметры, если какой-то из них или оба
// отсутствуют, то выполнение функции должно обрываться, а пользователю
// выдаваться предупреждение (alert) о том, что данные переданы некорректно.
//     Параметр author - опциональный, но должна происходить проверка: если
// параметр не передан, то вместо него подставляется значение ‘Anonymous’.
// Функция распечатывает в консоле текст в формате:
//     <имя_автора>, <дата>
//         <текст_сообщения>

// 7)
function setComment(date, message, author = 'Anonymous') {
    if (!date || !message) {
        return alert('Data transferred incorrectly');
    }
    console.log(author + ', ' + date + '\n' + message);
}
setComment('2021-07-14', 'Hello World', 'Alex');
setComment('2021-07-14', 'Hello World');
setComment('2021-07-14');

// Замыкания

// 1. Используя замыкание, напишите функцию createTimer, которая использует
// метод performance.now() для получения текущей временной метки и служит
// для замера времени выполнения другого кода(код менять, видоизменять
// нельзя, как написан так и должен остаться):

// 1)
function createTimer() {
    let t0 = performance.now();
    return () => {
        let t1 = performance.now();
        return (t1 - t0);
    }
}
let timer = createTimer();
alert('!')
alert( timer() );

// 2. Используя замыкания, создайте функцию createAdder(), которая принимает на
// вход любой примитивный параметр и возвращает функцию, которая добавляет
// к первому параметру второй. Функция работает по следующему принципу:

// 2)
function createAdder(arg1) {
    return (arg2) => arg1 + arg2;
}
let hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

let plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10