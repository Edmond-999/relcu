// let sal = {
//   John: 100,
//   Lia: 900,
//   Ando: 500,
//   Gayan: 1500
// };


// let sum = 0;
// let count = 0;

// function getAverageSum(obj) {
//   for (let key in obj) {
    // count++;
    // sum += obj[key];
//   }
//   return sum / count;
// }

// console.log(getAverageSum(sal));

// let salary = {
//   John: 100,
//   Lia: 900,
//   Ando: 500,
//   Gayan: 400
// };

// let max = 0;
// let person;

// function maxSalary(obj) {
//   for (let key in obj) {
    // if (obj[key] > max) {
    //   max = obj[key];
    //   person = key;
    // }
//   }
//   return person;
// }

// alert(maxSalary(salary));

// let schedule = {}

// function isEmpty(obj) {
  
//   for (let key in obj) {
    // if (obj[key] == undefined) {
    //   return true;
    // }
//   }
//   return false;
// }

// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?");

// alert( user[key] );

// let orange = prompt("Какой фрукт купить?");

// let bag = {
//   [orange]: 4
// };

// alert( bag.an ); // 5, если fruit="apple"

// let codes = {
//   "49": "Германия",
//   "41": "Швейцария",
//   "44": "Великобритания",

//   "1": "США"
// };

// for (let code in codes) {
//   alert(+code); // 1, 41, 44, 49
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390

// const num = 3;
// let res = 0;

// function sumTo() {
//   for (let i = 0; i <= num; ++i){
    // res = res + i;
//   }
  
// }
// sumTo(num);
// console.log(res);

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

// alert( sumTo(6) );

// const str = 'hello';

// alert(str.toUpperCase());

// let fls = 'freelanser';

// let text = `hello! i am ${fls}`;

// alert (text);

// let text = 'Freelanser';

// alert(text.toUpperCase());

// let text = "freelanser";

// alert(text.substr(4,3));

// alert(str.length);

// const calculator = {
    // result: null,
    // expressession: (a) => {
    // const splited = a.split(/([-+*/])/) ;

    // const leftNum = Number(splited[0]);
    // const rightNum = Number(splited[2]);
    // const operator = splited[1];

    // if(operator === '*'){
        // calculator.result = leftNum * rightNum;
    // } else if(operator === '/'){
        // calculator.result = leftNum / rightNum;
    // } else if (operator === '+') {
        // calculator.result = leftNum + rightNum; 
    // } else if (operator === '-') {
        // calculator.result = leftNum - rightNum;
    // }

    // }
// }

// calculator.expressession('50 / 5');

// alert(calculator.result);
// --------------
// function first(name) {

    // return name[0].toUpperCase() + name.slice(1);
// }

// alert(first('vasya')); //Vasya

// function checkSpam(str) {
    // let newStr = str.toLowerCase();

    // return newStr.includes('viagra') || newStr.includes('xxx');
// }

// alert(checkSpam('hello vxx'))


// function truncate( str, maxlength ) {
    // return (str.length > maxlength) ?
        // str.slice(0 , maxlength - 1) + '...' : str;
    
// }

// alert(truncate( 'wfwkemf wefkwkf wkefmweklmfdk kemdlqmed elmdwemd da', 2500 )); // wfwkemf wefkwkf...

// let schedule = {

// };
// function isEmpty (schedule) {
    // for(let key in schedule){
        // return false;
    // } 
    // return true;
// }
// alert(isEmpty(schedule));

// const myForEach = (array, callback) => {
//     for(let i = 0; i < array.length; ++i){
//         callback(array[i])
//     }

// }

// const foo = (item) => {
//     console.log(item);
// }

// myForEach(arr, foo);


// const arr = [1,2,3];

// const arr1 = [4,5,6];

// const arr2 = arr.concat(arr1);

// console.log(arr2);



// const arr = [4,5,78,4,5,2];

// const myEvery = (array, callback) => {
//     let res = true ;

//     for(let i = 0; i < array.length; ++i){
//         if(!callback(array[i])) res = false;
//     }
//     return res;

// }

// const foo = (item) => {
//     return item > 10;
// }

// console.log(myEvery(arr, foo));

// const arr = [4,5,78,4,1,2,3];          

// const myFilter = (array, callback) => {
//     for( let i = 0; i < array.length; i++){
//         callback(array[i])
//     }
// }

// const foo = (item) => {
//     if(item > 4) {
//         console.log(item);
//     } 
    
// }

// myFilter(arr, foo);

 
////////////////////////////////////////lessons new

// function name() {
//     let name = prompt("What is your name?");
//     let lastName =prompt("what is your last name?");
//     let age = prompt('How old are you?');

//     return "Welcome " + name + " " + lastName + " " +  "your age is " + age;
// }

// let info = name();

// alert(info);

// const forTime = new Date();

// const year = forTime.getFullYear();
// const month = forTime.getMonth();

// alert(month);
// alert(year);