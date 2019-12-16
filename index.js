//Вывести на экран текст "Silence is golden".
console.log("Silence is golden");

//Вывести на экран текущее название дня недели, название месяца и свое имя. Каждое слово должно быть в отдельной строке.
console.log('sunday\ndecember\nAleksey');

// Вывести на экран пять строк из нулей, причем количество нулей в каждой строке равно номеру строки.
console.log('0\n00\n000\n0000\n00000');

// Вывести на экран прямоугольник, заполненный буквами А. Количество строк в прямоугольнике равно 5, количество столбцов равно 8.
console.log('AAAAAAAA\nAAAAAAAA\nAAAAAAAA\nAAAAAAAA\nAAAAAAAA\n');

// Вывести на экран букву "W" из символов "*" (звездочка).
console.log('*     *     *\n *   * *   *\n  * *   * *\n   *     *');

// Вывести на экран результат вычисления 1+2−4.
console.log(1 + 2 - 4);

// Вычислите 1/2+1/4. Ответ: 0.75
console.log(1 / 2 + 1 / 4);

// Вычислите значение выражения (a+4b)(a−3b)+a2 при a=2 и b=3. Ответ:  -94
const a = 2;
const b = 3;
const number = (num1, num2) => {
  console.log((num1 + 4 * num2) * (num1 - 3 * num2) + num1 * 2)
};
number(a, b);

// Вычислите |x|+x ** 5, если x=−2. Ответ: -30
const x = -2;
const number1 = (num1) => {
  console.log(Math.abs(num1) + Math.pow(num1, 5));
};
number1(x);

// Вычислите значение выражения (x+1) ** 2 +3(x+1) при а) x=1.7; б) x=3. Ответ: а) 15.39 б) 28
const number3 = (num) => {
  console.log(Math.pow(num + 1, 2) + 3 * (num + 1));
};
number3(1.7);
number3(3);

// Вычислите значение выражения (|x−5|−sinx)/3+ √x2+2014   * cos2x−3 при x=−2.34. Ответ: -1.76911 (проверено!)
const x1 = -2.34;
const number4 = (num) => {
  console.log((Math.abs(num - 5) - Math.sin(num)) / 3 + Math.sqrt(num * 2 + 2014) * Math.cos(2 * num) - 3);
};
number4(x1);

// Вычислите значение выражения e**(x−2)+|sin(x)|−x**4⋅cos1/x при x=3.6 Ответ: -156.1276 непонятное число е
const number5 = (num) => {
  console.log(Math.pow(Math.log(num), num - 2) + Math.abs(Math.sin(num)) - Math.pow(num, 4) * Math.cos(1 / num));
};
number5(3.6);

// Пользователь вводит два числа. Найдите сумму и произведение данных чисел.
const number6 = (num1, num2) => {
  console.log(num1 + num2);
  console.log(num1 * num2);
};
number6(2, 3);

// Пользователь вводит число. Выведите на экран квадрат этого числа, куб этого числа.
const number7 = (num) => {
  console.log(Math.pow(num, 2));
  console.log(Math.pow(num, 3));
};
number7(3);

// Пользователь вводит три числа. Увеличьте первое число в два раза, второе числа уменьшите на 3, третье число возведите в квадрат и затем найдите сумму новых трех чисел.
const number8 = (num1, num2, num3) => {
  console.log((num1 * 2) + (num2 - 3) + Math.pow(num3, 2));
};
number8(2, 4, 8);

// Пользователь вводит три числа. Найдите среднее арифметическое этих чисел, а также разность удвоенной суммы первого и третьего чисел и утроенного второго числа.
const number9 = (num1, num2, num3) => {
  console.log((num1 + num2 + num3) / 3);
  console.log(num1 + num3) * 2 - 3 * num2;
};
number9(3, 4, 5);

// Пользователь вводит сторону квадрата. Найдите периметр и площадь квадрата.
const number10 = (num) => {
  console.log(4 * num);
  console.log(Math.pow(num, 2))
};
number10(4);

// Пользователь вводит цены 1 кг конфет и 1 кг печенья. Найдите стоимость: а) одной покупки из 300 г конфет и 400 г печенья; б) трех покупок, каждая из 2 кг печенья и 1 кг 800 г конфет.
const number11 = (num1, num2) => {
  console.log(0.3 * num1);
  console.log(0.4 * num2);
};

// Пользователь вводит время в минутах и расстояние в километрах. Найдите скорость в м/c.
const number12 = (num1, num2) => {
  const time = num1 * 60;
  const distance = num2 * 1000;
  console.log(`${distance / time} ${'м/с'}`);
};
number12(60, 100);

// Даны катеты прямоугольного треугольника. Найдите площадь, периметр и гипотенузу треугольника.
const number13 = (num1, num2) => {
  console.log(`${'Площадь треугольника'} ${num1 * num2 / 2} ${'m2'}`);
  const num3 = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))
  console.log(`${'Гипотенуза треугольника'} ${num3}`);
  console.log(`${'Периметр треугольника'} ${num1 + num2 + num3}`);
};
number13(3,4);

// Дано значение температуры в градусах Цельсия. Вывести температуру  в градусах Фаренгейта.
const number14 = (numcels) => {
  console.log(`${'перевод цельсия в фаренгейт'} ${(9 / 5) * numcels + 32}`);
};
number14(1);

// Пользователь вводит количество недель, месяцев, лет и получает количество дней за это время. Считать, что в месяце 30 дней.
const number15 = (weeks, mon, yers) => {
  const dayWeek = weeks * 7;
  const dayMonth = mon * 30;
  const dayYer = yers * 30 * 12;
  console.log(dayWeek + dayMonth + dayYer);
};
number15(3, 2, 1);

// Даны две переменных с некоторыми значениями. Поменять местами значения этих переменных
let i = 2;
let j = 5;
[i, j] = [j, i];
console.log(i);
console.log(j);

// Даны три переменные a, b и c. Изменить значения этих переменных так, чтобы в a хранилось значение a+b, в b хранилась разность старых значений c−a, а в c хранилось сумма старых значений a+b+c. Например, a=0, b=2, c=5, тогда новые значения a=2, b=3 и c=7.
let aind = 0;
let bind = 2;
let cind = 5;
[aind, bind, cind] = [aind + bind, cind - aind, aind + bind + cind]

console.log(aind);
console.log(bind);
console.log(cind);

// Пользователь вводит сумму вклада в банк и годовой процент. Найдите сумму вклада через 5 лет (рассмотреть два способа начисления процентов)
const contributionBank = (sum, percent, years) => {
  console.log((sum / 100 * percent * years) + sum);
};
contributionBank(2000, 7, 5);

// Дано число a. Не пользуясь никакими арифметическими операциями кроме умножения, получите а) a**4 за две операции; б) a ** 6 за три операции; в) a**15 за пять операций.
let w = 2;
w *= w
w *= w
w *= w

console.log(w);

// Дан прямоугольник размером 647 x 170. Сколько квадратов со стороной 30 можно вырезать из него?
const rectangle = (num1, num2) => {
  const square = 30;
  const height = Math.floor(num1 / square);
  const width = Math.floor(num2 / square);
  console.log(height * width);
};
rectangle(647, 170)
