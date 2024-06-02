// //SPREAD OPERITER CODE 
// let arr = [56, 565 ,'kirshanan',666, 444, 45, 554,44,44]
// let arr2 =[ 1,2,3,4,5,65,678,8,9,,89,45,8,678,45,678,35,]
// let arr3 =[ ...arr, ...arr2]
// document.write(arr3)

// let obj = {
//     first :'one',
//     last :'two',
//     end :'three'
// }
// let obj2 = {
//     ...obj ,
//     lname :'kiehsnaa'
// }
// console.log(obj2)


// even or odd program

// for (var i = 1; <= 50; i++){
//     i
// }
// var a = 3
// var b = 4 
// var c = 5 
// var d = 1 
// var eq = a-- + b-- + ++c  + d  + a++  - b
//         //  3 +  4  +  6  +  1   +  3
//         document.write(eq)
// var a = 2
// var b = 5
// var eq = ++b + a++ + a++ + b++ + ++a
//         //   6  +   2 +  3  +  6  +  4
//         document.write(eq)
// var a = 5
// var b = 3 
// var c = 6
// var eq =  b-- + ++a + c++ + a
//         //   3  +  6  +  6   + 5
//         document.write(eq)

//EVEN AND ODD NUMBER 
// for (var i= 1; i<=50 ; i++){
//     if ( i%2  !== 0){
//         document.write(i, "<br>")
//     }
// }
// var userInp = +prompt('Enter Value Number ',5)
// var kahanTak = +prompt('Enter kahan tak ka number',10)
// for (var i= 1; i <=kahanTak; i++){
//     // document.write(userInp,"<br>")
//      document.write(`${userInp} x ${i} =${userInp * i } <br >`)
// }

// var userInp = +prompt('enter the value ',2)
// var endoftheGame = +prompt('enter the lastest value as you still find',10)
// for (var i= 1; i<= endoftheGame; i++ ){
//     document.write(`${userInp}x ${i} =${userInp*i } <br>`)
// }
// var userInp =+prompt('ENTER THE VALUE',5)
// var justLast = +prompt('Enter the last value as you still find',10)
// for (var i=1; i<=justLast; i++){
//     document.write(`${userInp}x ${i} =${userInp*i} <br>`)
// }

// console.log(document.childNodes[1].childNodes[2].childNodes[1])

//COLOR CHANGING FUNCTION 
// console.log(getElements)




// //SPREAD OPERITER CODE 
// let arr = [56, 565 ,'kirshanan',666, 444, 45, 554,44,44]
// let arr2 =[ 1,2,3,4,5,65,678,8,9,,89,45,8,678,45,678,35,]
// let arr3 =[ ...arr, ...arr2]
// document.write(arr3)

// let obj = {
//     first :'one',
//     last :'two',
//     end :'three'
// }
// let obj2 = {
//     ...obj ,
//     lname :'kiehsnaa'
// }
// console.log(obj2)
// function colorChange(){
//     let getElements = document.getElementsByTagName('p')
//  for (let i =0; i<getElements.length; i++){
//     getElements[i].style.backgroundColor ='black';
//     getElements[i].style.color = 'white'
//  }
// } 

  //promise function 
//   let pro = new Promise((res, rej)=>{
//    let khilo ='pizza khawogai'
//    if (khilo == 'piazza khawogai'){
//       res ('han bhai zarror khawnogaa')
//    }
//    else{
//       res('nhi khana muji bhai ')
//    }
//   })
//   pro.then((data)=>{
//    document.write (data)
//   })
// .catch((err)=>{
//    console.log(err)
// })
//NORMAL FUNCTION / TREDITIONAL FUNCTION
// function abc (){
//    console.log('Hello Web Developer ')
// }
// abc()
//FUNCTION EXPRESSION
// let foo = function(){
   // console.log('Hello Web Developer This the facts')
// }
// foo()
// ARROW FUNCTION 
// let abc = () =>{
   // console.log('Hello World ')
// }
// abc()

//Ternary Opertor
// var a = (5 == 5 ? 'han ok hai bhai tera': 'kahan ok hai tera bhai')
// document.write(a)

// ecma script
// ye ourhide kardeta hai 
//global scope 

// var firstName = 'Kirshan '
// {
//    var firstName ='Thakur'
//    console.log(firstName)
// }
// console.log(firstName)

// let firstName = 'Kirshan '
//  {
//     let firstName ='Thakur'
//     console.log(firstName)
//  }
//  console.log(firstName)

// promise men 3 stage hoti hain   >>>>>>
// >>>>[1]   panding      [2]   resolve & fullfil       [3]  delete 

// API { application programming interface }>>>>>>>>>>>>>>>>>
// franend data backend men hota haii or en k btwn men server hoya hai 
//   Frantend and backend k btwn men Server hota hai 
// Server and backend k btw men API hota hai
// API men deta hamisha array of Object ki form men hota hai 

// JSON javascript object Notition ki form men hota hai 
//   let pro = new Promise((res,rej) =>{
//    let hanbhai ='kase ho'
// if (hanbhai== 'kase ho bhai'){
//    res('han bhai theek hai')
// }
// else{
//    rej('nhi hai bahi ')
// }
//   })
// pro.then((data)=>{
//    console.log(data)
// }).catch((err )=>{
//    console.log(err)
// })
// let pro = new Promice((res,rej) => {
//    let wordCup ="pakistan"
//     if(WordCup =="PAKISTAN"){
//     res ('har gia apka bhai ')
//     }
//  else{
//      rej('han bhai kua howa apko')})

//  pro.then((data)=>{ console.log(data)})
//  .catch((err)=>{
//  console.log(err)})
              









var questions = [
   {
       question: ' 1.   What does HTML stand for?',
       option1: 'Hyperlinks and Text Markup Language',
       option2: 'Hypertext Markup Language',
       option3: 'Home Tool Markup Language',
       correctOption: "Hypertext Markup Language"
   },
   {
       question: '2. Who is making the Web standards?',
       option1: 'Google',
       option2: 'The World Wide Web Consortium',
       option3: 'Microsoft',
       correctOption: "The World Wide Web Consortium"
   },
   {
       question: '3.  Choose the correct HTML element for the largest heading:',
       option1: '<heading>',
       option2: '<h6>',
       option3: '<h1>',
       correctOption: "<h1>"
   },
   {
       question: '4. What is the correct HTML element for inserting a line break?',
       option1: '<linebreak>',
       option2: '<br>',
       option3: '<break>',
       correctOption: "<br>"
   },
   {
       question: '5. What is the correct HTML for adding a background color?',
       option1: '<body bg="yellow">',
       option2: '<background>yellow</background>',
       option3: '<body style="background-color:yellow;">',
       correctOption: '<body style="background-color:yellow;">'
   },
   {
       question: '6. Choose the correct HTML element to define important text:',
       option1: '<strong>',
       option2: '<b>',
       option3: '<i>',
       correctOption: '<strong>'
   },
   {
       question: '7. Choose the correct HTML element to define emphasized text:',
       option1: '<italic>',
       option2: '<i>',
       option3: '<em>',
       correctOption: "<em>"
   },
   {
       question: '8. What is the correct HTML for creating a hyperlink?',
       option1: '<a>http://www.w3schools.com</a>',
       option2: '<a href="http://www.w3schools.com">W3Schools</a>',
       option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
       correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
   },
   {
       question: '9.Which character is used to indicate an end tag?',
       option1: '*',
       option2: '/',
       option3: '<',
       correctOption: "/"
   },
   {
       question: '10. How can you open a link in a new tab/browser window?',
       option1: '<a href="url" target="new">',
       option2: '<a href="url" new>',
       option3: '<a href="url" target="_blank">',
       correctOption: '<a href="url" target="_blank">'
   },
   {
       question:  '11. Which of these elements are all <table> elements?',
       option1: '<table> <tr> <td>',
       option2: '<table> <head> <tfoot>',
       option3: '<table> <tr> <tt>',
       correctOption: "<table> <tr> <td>"
   }
]


var ques = document.getElementById('ques')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var index = 0
var btn = document.getElementById('btn')
 var score = 0
 var min = 1
 var sec = 59 
 
// timer = document.getElementById('timer')
//  var interval = setInterval(function(){
//  timer.innerHTML = `${min} : ${sec}`
//  sec--
//  if (sec <0){
//    min--
//    sec = 59
//    if(min<0){
//       min = 1
//       sec =59
//       nextQuestion()
//    }
//  }
//  },100)
// 

function nextQuestion(){
var getOptions = document.getElementsByName('options')
  for (var i= 0 ; i<getOptions.length; i++){

if(getOptions[i].checked){
var selectedValue = getOptions[i].value
var selectedQues = questions[index -1 ]['question']
var selectedAns  =  questions [index -1 ][`option${selectedValue}`]
var correctOption = questions[index -1 ][`correctOption`]
if(selectedAns == correctOption){
 score++
}
console.log(selectedAns)

// console.log(selectedQues)
//  console.log(getOptions[i].value)  
}

   // var selectedValue = getOptions[i].value
   // var selectedQues = questions[index]
   // console.log (selectedQues)
   // // console.log(getOptions[i].value)
   // console.log(getOptions[i])
   getOptions[i].checked = false
  }
btn.disabled = true
  
   if(index > questions.length -1 ){
      document.write('Your Percentage is ' +((score / questions.length)*100).toFixed(2))
   }
   else{
      ques.innerText = questions[index].question
      opt1.innerText = questions[index].option1
      opt2 .innerText = questions[index].option2
      opt3.innerText = questions[index].option3
      index++
   }
  
}
nextQuestion()

function clicked(){
  
   btn.disabled = false
}
// var ques = document.getElementById('ques')
// var opt1 = document.getElementById('opt1')
// var opt2 = document.getElementById('opt2')
// var opt3 = document.getElementById('opt3')

// var index = 0
// var btn = document.getElementById('btn')




// function nextQuestion (){

//      var getOptions = document.getElementsByClassName('options')
//       for ( var i=0; i<getOptions.length; i++ ){
//  var selectedValue = getOptions[i].value 

// //   console.log(getOptions)
//       getOptions[i].checked = false

// }


//  btn.disabled = true

//    if (index > questions.length - 1){
//        console.log('THE END QUESTIONS')
//    }
// else{
//    ques.innerText= questions [index].question
//    opt1.innerText= questions[index].option1
//    opt2.innerText= questions[index].option2
//    opt3.innerText= questions[index].option3
//   index++ 

// }
// }
// nextQuestion()



// function clicked(){
   
//    btn.disabled = false
//  }




























