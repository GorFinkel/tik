
let dBox=document.querySelectorAll(".d");
// let server =' http://localhost:3000/posts/'; not activated
let playerOne = prompt(`Player 1 (X) what is Your name?`,"Mike");
let playerTwo = prompt ('Player 2 (O) what is Your name?',"Jake");
let x= "X"
let o="O"
let turnOne=`Now is the ${playerOne} (X) turn`;
let turnTwo=`Now is the ${playerTwo} (O) turn`;
let turnMsg = turnOne;
let winOneMsg=`${playerOne} (X) has won!`
let winTwoMsg=`${playerTwo} (O) has won!`
let tieMsg="End of the round... Tie!"
let winTimesOne =0 ;
let winTimesTwo = 0;
let gameTimes=0;
let box_1=document.getElementById('1')
let box_2=document.getElementById('2')
let box_3=document.getElementById('3')
let box_4=document.getElementById('4')
let box_5=document.getElementById('5')
let box_6=document.getElementById('6')
let box_7=document.getElementById('7')
let box_8=document.getElementById('8')
let box_9=document.getElementById('9')



function updateScreen(){
document.getElementById('msg').innerText=turnMsg;
}
updateScreen();

const game = ()=>{
    dBox.forEach((boxEach) => {
    boxEach.addEventListener('click', play);
    })
}
game ()


function play (item) {
const box = item.target.textContent
if (
    turnMsg==turnOne && 
    box!==x && 
    box!==o ){
    item.target.textContent =x;
    turnMsg = turnTwo;
    updateScreen()
    testWinCondition (x,winOneMsg)

} else if (
    turnMsg==turnTwo &&
    box!==x &&
    box!==o )  {
    item.target.textContent =o;
    turnMsg = turnOne;
    updateScreen()
    testWinCondition (o,winTwoMsg)
}
}

function testWinCondition (value,message){
    if ( 
        box_1.textContent == value && 
        box_2.textContent == value && 
        box_3.textContent == value  ) {
            turnMsg = message
            updateScreen()
            winLog()
     }else if (
        box_4.textContent == value && 
        box_5.textContent == value && 
        box_6.textContent == value) {
            turnMsg = message
            updateScreen()
            winLog()
    }else if (
        box_7.textContent == value && 
        box_8.textContent == value && 
        box_9.textContent == value) {
            turnMsg = message
            updateScreen()
            winLog()
    }else if (
        box_1.textContent == value && 
        box_5.textContent == value && 
        box_9.textContent == value) {
            turnMsg = message
            updateScreen()
            winLog()
    }
    else if (
        box_3.textContent == value && 
        box_5.textContent == value && 
        box_7.textContent == value) {
            turnMsg = message
            updateScreen()
            winLog()
    }
    else if (
        box_1.textContent == value && 
        box_4.textContent == value && 
        box_7.textContent == value) {
            turnMsg = message
            updateScreen()
            winLog()
    }
    else if (
        box_2.textContent == value && 
        box_5.textContent == value && 
        box_8.textContent == value) {
            turnMsg = message
            updateScreen()
            winLog()
    }
    else if (
        box_3.textContent == value && 
        box_6.textContent == value && 
        box_9.textContent == value) {
            turnMsg =message
            updateScreen()
            winLog()
    }else if ( 
        box_1.textContent && 
        box_2.textContent && 
        box_3.textContent &&
        box_4.textContent && 
        box_5.textContent && 
        box_6.textContent &&
        box_7.textContent && 
        box_8.textContent && 
        box_9.textContent
        ) {
        turnMsg = tieMsg
            updateScreen()
            winLog()
    }
}
function winLog(){
if (turnMsg == winTwoMsg){
    winTimesTwo++
    gameTimes++
}else if (turnMsg == winOneMsg) { 
    winTimesOne++
    gameTimes++
}else{gameTimes++}
  
let textLog = document.getElementById('winLog')
let s=''
let ss=''
let sss=''
if (gameTimes>1 ){s='s'}
if (winTimesOne>1 || winTimesOne===0  ){ss='s'}
if (winTimesTwo>1 || winTimesTwo===0  ){sss='s'}

textLog.innerText=`During a total of ${gameTimes} game${s}: ${playerOne} has won ${winTimesOne} time${ss} and ${playerTwo} has won ${winTimesTwo} time${sss} `
winButtons()
}
function winButtons(){
    let btn=document.createElement('button')
    btn.textContent="One more game!"
    btn.id='continueBtn'
    document.body.append(btn)
    restartGame ()
    


}
function restartGame (){
    let continueBtn = document.getElementById('continueBtn')
    continueBtn.addEventListener('click',()=>{
    turnMsg=turnOne;
    const refresh = function (){
        dBox.forEach((boxEach) => {
        boxEach.textContent='';
        })
    }
    refresh ()
    updateScreen()
    continueBtn.remove(continueBtn)
    }
 )
    }



// more complicated version
// let clickTimes = 1;
//  if (clickTimes % 2 !== 0 && box!=="O"&& box!=="X" ){
//     a.target.textContent ="X";
//     turnMsg = turnTwo;
//     updateScreen()
// clickTimes++
// console.log(clickTimes)

// } else if (clickTimes % 2 == 0 && box!=="X"&& box!=="O" )  {
//     a.target.textContent ="O";
//     turnMsg = turnOne;
//     updateScreen()







  
//not activeted yet
// fetch(server, {
//     method: 'POST',
//     body: JSON.stringify({
//       userId: user_id,
//       title: new_title,
//       body: new_body
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('response: ' + JSON.stringify(data));
//   })



// // get data from json file and transform it to an object

// let object ='';


// document.getElementById('getMessage').onclick= () => {
// fetch(server)
// .then(response => response.json())
// .then(data => {
//   object = JSON.stringify(data);
// object=JSON.parse(object)
// document.getElementById('message').innerHTML = object[0].title+' '+object[5].body

// console.log(object[0].title)

// })

// };

