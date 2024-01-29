// 1

// let num;
// for (num = 1; num < 100; num++) {
//     console.log(num);
// }
// console.log(num);

// 2

// let num;
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 == 0){
//         console.log(num);
//     }
// }
// console.log(num);

// 3

// let result = 0;
// for (let num = 0; num <= 100; num++) {
//         result += num;
// }
// console.log(result);

// 4

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; arr.length; i++) {
//     console.log(arr[i])
// }

// 5

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// console.log(result);

// 6

// let obj = {
//     green: 'Зеленый',
//     red: 'Красный',
//     blue: 'Голубой'
//   };
  
//   for (let key in obj) {
//     console.log(Ключ: ${key}, Значение: ${obj[key]});
//   }

// 7

// let obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400'
//   };
  
//   for (let key in obj) {
//     console.log(${key} - Зарплата ${obj[key]} долларов.);
//   }

// 8

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// 9

// let arr = [2, -5, 9, -15, 0, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// 10

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log('Есть!');
//     break;
//   }
// }

// 11
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let firstDigit = parseInt(arr[i].toString()[0]);
//   if (firstDigit === 1  firstDigit === 2  firstDigit === 5) {
//     console.log(arr[i]);
//   }
// }

// 12

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let resultString = '-';
// for (let i = 0; i < arr.length; i++) {
//   resultString += arr[i] + '-';
// }
// console.log(resultString);

// 13

// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// for (let i = 0; i < week.length; i++) {
//   if (i >= 5) {
//     console.log(week[i]);
//   } else {
//     console.log(*${week[i]}*);
//   }
// }

// 14

// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// let day = 'Ср';
// for (let i = 0; i < week.length; i++) {
//   if (week[i] === day) {
//     console.log(*${week[i]}*);
//   } else {
//     console.log(week[i]);
//   }
// }

// 15
// let n = 1000;
// let num = 0;
// while (n > 50) {
//   n /= 2;
//   num++;
// }
// console.log(Результат: ${n});
// console.log(Количество итераций: ${num});
