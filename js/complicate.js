'use strickt';
/* создать массив */

let arr = ['1401', '2402', '3403', '404', '2405', '3406', '407'];
    console.log(arr);
    arr.forEach((item) => {  // .forEach - метод выполняет указанную функцию один раз для каждого элемента в массиве.
        if (item.startsWith('2') || item.startsWith('4')) { // .startsWith - определяет, начинается ли строка с символов
          console.log(item);
        }
      });

let border = '----- Разделение между задачами ------' +
             '\n ---- Вывод простых чисел: ';
console.log(border);

/* Вывести в столбик Все простые числа от 1 до 100 */

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}

