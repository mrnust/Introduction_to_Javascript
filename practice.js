
//------------------------------------Hands on Itntroduction to JavaScript-------------------------------------
////Data types

// let a=null;      // null
// let b = true;   //boolean
// let c = undefined;  // undefined
// let d = "rayyan";  // string
// let e = 9007199254740991n;  // BigInt
// let f = 123;    // number
// console.log(a,b,c,d, e,f)    // prints the variables

// let str = "Rayyan";
// console.log(typeof str)      // returns the data type of variable


// let str = "Rayyan";
// Array.from(str).forEach((item) => {     // converts string to array
//     console.log(item)
// })


//////Math Object------------------------------------------------------------------------

// console.log(Math.sqrt(16))
// console.log(Math.random())
// console.log(Math.ceil(2.3))
// console.log(Math.floor(2.3))
// console.log(Math.sin(Math.PI / 2));
// console.log(Math.log(1))
// console.log(Math.random()*10)    -- generates random number from 0 to 10


// let arr = [1, 2, 3, 4, 'rayyan', true];     // array
// console.log(arr)

// let obj = {
//     name: "rayyan",
//     cgpa:3.77                 // an object
// }
// console.log(obj)

/////////////variables in JS
// let a = 10;
// var b = 111;
// const c=30
// console.log(a,b,c);

// let a = 34;
// if (a > 18) {
//     console.log("eligible to vote")              // if else
// }
// else {
//     console.log("not eligible to vote")
// }

// let age = 28;           // ternary operator
// let str = age > 18 ? "You can cast a vote" : "You cannot cast a vote";
// console.log(str)


// const grade = 'A';
// switch (grade) {
//     case 'A':
//         console.log("aplha");
//         break;
//     case 'B':                                  // switch statement
//         console.log("beta");
//         break;
//     case 'C':
//         console.log("charlie");
//         break;
//     default:
//         console.log("invalid");
// }

// for (let i = 0; i < 10; i++){
//     console.log(i)                  // for loop
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);               // while loop
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;                          // do while loop
// } while (i < 10);

// let arr = [1, 2, 3, 4, 5];
// for (let i in arr) {           // for in loop
//     console.log(arr[i])
// }

// let arr = [1, 2, 3, 4, 5];     // for of loop
// for (let i of arr) {
//     console.log(i)
// }


// let arr = [1, 2, 3, 4, 5];
// arr.forEach((arrItem) => {
//     console.log(arrItem)        // for each loop
// })


// for (let i = 1; i <= 5; i++){
//     if (i % 2 == 0)
//         break;                     // break statement
//     console.log(i);
// }

// for (let i = 1; i <= 5; i++){
//     if (i % 2 == 0)
//         continue;                     // continue statement
//     console.log(i);
// }

// let arr = [1, 2, 3, 4];
// arr.forEach((item) => {
//     if (item == 2)                 // break and continue statement donot work in foreach so you may use return ,...
//         return;
//     console.log(item)
// })

// function sum(a, b) {
//     return a + b;
// }
                                  // simple function
// console.log(sum(2,3))

// let sum = (a, b) => {
//     return a + b;                    // arrow function
// }
// console.log("sum= ",sum(2,3))

/////////////calculator in JS

// let calculator = (a,b,c) => {
//     switch (c) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//     }
// }

// console.log(calculator(2,3,'/'))


////////////////String Methods
//-- strngs are immutable
// let str = "Rayyan";
// console.log(str);
// console.log(str[2]);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat(' Muhammad'));
// console.log(str.slice(1, 3));
// Number.parseInt("23")     // converts string to number
//Number.parseFloat()


////////////////Array Methods

// let arr = [5,4,3,2,1];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);
// console.log(arr.sort());
// console.log(arr.reverse());
// console.log(arr.slice(1, 3))
// arr.push(0);
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.splice(1, 2);  // removes 2 items starting from index 1
// console.log(arr)
// arr.splice(1, 1, 4);  // replaces item at index 1 with 4
// console.log(arr)


// let arr = [1, 2, 3, 4, 5];      // map function in JS
// let newArr=arr.map((item) => {
//     return item * item;
// })
// console.log(newArr)


// let arr = [1, 2, 3, 4, 5];     // filter function in JS
// let newArr = arr.filter((item) => {
//     return item % 2 == 0;     -- filters the array and return those items which are even
// })

// console.log(newArr)

// let arr = [1, 2, 3, 4, 5];    // reduce function in JS
// let newArr = arr.reduce((item1,item2) => {
//     return item1 + item2;
// })
// console.log(newArr)



///////////////////////////////////DOM------------------------------------------------
// console.log(document)
// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.body.parentElement)  -- parent is html
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.head)
// console.log(document.head.childNodes)
// console.log(document.head.firstElementChild)

// --------------- accessing elements of html

let div = document.getElementsByClassName('hello');
let h2 = document.getElementById('h2');
// console.log(h2.textContent)
// h2.innerHTML="Hii"
// let tag = document.querySelector('.hello');
// console.log(tag)
// let tag = document.getElementsByTagName('h1');
// console.log(tag[0])
// console.log(div[0].hasAttribute('class'))------true

//------------------- create new element using dom
let newItem = document.createElement('h5');
newItem.setAttribute('id', 'mine');
newItem.innerHTML = 'Me created this';
div[0].appendChild(newItem);

let anchor = document.createElement('a');
anchor.setAttribute('href', 'http://www.google.com');
anchor.setAttribute('target', '_blank');
anchor.innerHTML = "Go to google";
div[0].appendChild(anchor)


//----------------changing style of html tags using JS

h2.style.color = 'red';
anchor.style.textDecoration = 'none';
anchor.style.color='grey'



//////////////////set time out and time interval

// setTimeout(() => {
//     alert('hello')       --- hello appears after 2 sec
// }, 2000);

// let v1=setInterval(() => {
//     console.log('hello');             -- continuously prints
    
//     clearInterval(v1)             -- in order to stop it use clear interval
// }, 1000);


/////// Event Listeners---------------------------------------------

// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     alert('hello')
// })

//  btn.addEventListener('mouseover', () => {
//     alert('hello')
// })

//  btn.addEventListener('mouseleave', () => {
//     alert('hello')
// })

///////////////Callbacks----------------------------------------------

// let content = () => {
//     console.log("Hello world")
// }
// let greet = (Callback) => {
//     console.log("Outer function");
//     Callback();
// }

// greet(content)


///////Exception Handling----------------------------------

// try {
//     console.log(alll)
// }
// catch (e) {
//     console.log(e)
// }
// finally {
//     console.log("This statement always executes..")
// }


////////////Promises------------------------------------------------

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let arr = [1, 2, 3, 4];
//         // resolve(arr)  -- if resolve then  then executes
//         reject()        -- if reject then catch executes
//     }, 2000);
// });

// pro.then((arr) => {
//     console.log("data received successfully" ,arr)
// }).catch(()=>{
//     console.log(new Error())
// })
// pro.then(() => {                                 /// multiple handlers
//     console.log("This will also execuet if promise is resolved..")
// })


/////promise chaning---------------------------------------------------------

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let arr = [1, 2, 3, 4];
//         resolve(arr);
//         // reject()
//     }, 2000);
// });

// pro.then((arr) => {
//     console.log("task 1 completed..", arr);
//     let pro2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//     })
//     return pro2;
// }).then(() => {
//     console.log("task2 completed")
// }).catch(()=>{
//     console.log(new Error())
// })


/////// async await in js ---------------------------------------


// async function rayyan() {
//     console.log("inside async rayyan");
//     let response = await fetch("https://api.github.com/users");
//     console.log("data fetched..");
//     let userData = response.json();
//     console.log('data converted to readable form..');
//     return userData;
// };

// console.log("Welcome to asyn await tutorial");
// let a = rayyan();
// console.log(a);
// a.then((data) => {
//     console.log(data)
// }).catch(() => {
//     console.log("failed..")
// })


////// fetch API in js   async and await------------------------------------

    //--- getting response is a 2 stage process--------
    //--- fetch returns a promise

    // let p = fetch("https://api.github.com/users");
    // p.then((d) => {
    //   return d.json();
    // }).then((val) => {
    //   console.log(val);
    // });


// sending post request with fetch API----------------------------------------
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    // method: 'POST',
    // body: JSON.stringify({
    //     title: 'Rayyan',
    //     body: 'Coder',
    //     userId: 1,
    // }),
    // headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    // },
    // })
    // .then((response) => response.json())
    //     .then((json) => console.log(json));
//////////////// Local and session storage----------------------------------------

// localStorage.setItem('name','value')
// localStorage.getItem('name')
// localStorage.removeItem('name');
// localStorage.length;
// localStorage.clear();
// seesion storage same as locals torage but localstorage stores data permanent and seeion stores temporaray


//---------------------------------------------OOP--------------------------------------------------------------

//--------------Prototype
// let obj = {
//     name: "rayyan",
//     cgpa:3.8
// }
// let p = {
//     run: () => {
//         alert("Hello")
//     }
// }
// obj.__proto__ =p;
// obj.run()

//--classess and objects-----------------------------------

// class Square{
//     constructor(l) {
//         this.length = l;
//     }
//     getArea = () => {
//         return this.length * this.length;
//     }
//     getPerimeter = () => {
//         return 4 * this.length;
//     }
// }
// let s = new Square(3);
// console.log("Area= ", s.getArea());
// console.log("Perimeter= ", s.getPerimeter());

////Inheritance--------------------------------------------------------

// class Square{
//     constructor(l) {
//         this.length = l;
//     }
//     getArea = () => {
//         return this.length * this.length;
//     }
//     getPerimeter = () => {
//         return 4 * this.length;
//     }
// }

// class Rectangle extends Square{
//     constructor(l, w) {
//         super(l); // -- calls the constructor of Parent class
//         this.width = w;
//     }
//     getArea = () => {
//         return this.length * this.width;
//     }
//     getPerimeter = () => {
//         return 2 * (this.length + this.width);
//     }
//     get Length() {
//         return this.length;
//     }
//     get Width() {          //get keyword
//         return this.width;
//     }
//     set Length(l) {
//          this.length=l;
//     }
//      set Width(w) {      //set keyword
//          this.width=w;
//     }
//     static slogan = () => {         // static method independent of an object
//         console.log("Try try again")
//     }
// }

// let r = new Rectangle(4, 3);
// console.log("Area ", r.Length, "*", r.Width, "=", r.getArea());
// console.log("Perimeter= ", r.getPerimeter());
// r.Length = 5;
// r.Width = 6;

// console.log("Area ", r.Length, "*", r.Width, "=", r.getArea());
// console.log("Perimeter= ", r.getPerimeter());
// Rectangle.slogan();
// console.log(r instanceof Rectangle)        // check whether an object belongs a particular class or not!


// ----------------------------------------------------------------------------------------------------------------
// spread Operator

// let arr = [1, 2, 3, 4];
// let obj = [...arr];
// console.log(obj)


// let obj = {
//     name: 'Rayyan',
//     cgpa:3.8
// }

// console.log({ ...obj, name:"Ahmad" })

////Destructuring----------------------------------------------------

// let arr = [1, 2];
// let [a, b] = arr;
// console.log(a,b)

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, b, c, d, ...rest] = arr;
// console.log(a,b,c,d,rest)

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, , , c] = arr;    a=>1    c=>4
// console.log(a,c)

// let arr = [1, 2, 3, 4, 5, 6];
// let [a, , b, , ...rest] = arr;
// console.log(a,b,rest)

////Regular Expression--------------------------------------------------

 // let reg=/rayyan/i;          // i here means case insensitive
    // let reg1=/rayyan/
    // let reg1=/rayyan/g ;      // g means global
    // let str="The Rayyan is best ";

    // exec()  checks whether particular expression is present or not returns an array if match and return null
    // if not match

    // let result= reg.exec(str);
    // console.log(result);        // other methods are search()  replace()

    // test()   returns true or false

    // let a=reg.test(str);
    // console.log(a)

    //match()  return an array or NULL
    // let a=str.match(reg);
    // console.log(a)

    //search() return index of first occurence otherwise -1
    // let a=str.search(reg);
    // console.log(a)

    // replace()  returns new replaced string (if flag is not global then first occurence is replaced)
    // let a= str.replace(reg,'Kaif');
    // console.log(a)

    //Metacharacter in regular expressions in JS

    /*let regex=/^I/;  // (^) expressions checks whether the text starts with
    regex=/an$/;     // ($)  expresssion checks whether the expressions ends with 
    regex=/r.yyan/;  // (.) expressions checks for a character exactly any one char can occur between r yyan
    regex=/r*yyan/;  // (*) matches any zero or more character
    regex=/r[aty]yyan/;   // can be a,t and y character between text
    regex=/r[a-z]yyan/;  regex=/r[0-9]yyan/;  regex=/r[A-Z]yyan/; // can be any character from a to z between text or  0-9
    regex=/r[^aty]yyan/;   // cannot come a,t,y between text
    regex=/r[-]yyan/;     // checks '-' between r()yyan
    regex=/r[0-9][a-z]yyan/;   // check the multiple regular expression r(any number)(any character)yyan

    regex=/r{1}yyan/;       // r can occur 1 time after r
    regex=/r{0,2}yyan/;     // r can occur 0-2 times after r
    regex=/(ra){2}/;       // ra should comes 2 times
    let str='I am  rayyan';
    if(regex.test(str)){
        console.log(`the string matches the expression ${regex.source}`)
    }
    else{
        console.log(`the string does not matches the expression ${regex.source}`)
    }*/

    // Q: Checks your CNIC whether correct or not!
    /* let s=prompt('Enter your CNIC ');
     let r=/[0-9][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][0-9][0-9][0-9][-][0-9]/;   
     //or
     r=/([0-9]){5}[-]([0-9]){7}[-]([0-9]){1}/;
     if(r.test(s)){
        console.log('CNIC matched ');
     }else{
        console.log('Sorry!')
     }*/


// Closures-------------------------------------------------------------------
// function func1(){
//     let name = "Rayyan";
//     function func2() {
//         console.log(`Hello ${name}`);
//     }
//     return func2()
// }
 
// func1()