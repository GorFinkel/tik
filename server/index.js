//json-server --watch db.json
let dBox=document.querySelectorAll(".d");
let playerX;
let playerY;
let server =' http://localhost:3000/posts/1';
let playerTxt=document.getElementById('player')
let playerOne = confirm('Are you Player 1 (X)?');
let x= "X"
let o="O"
let turnOne=`Now is the Player 1 (X) turn`;
let turnTwo=`Now is the Player 2 (O) turn`;
let turnMsg ;
let winOneMsg=`Player 1 (X) has won!`
let winTwoMsg=`Player 2 (O) has won!`
let tieMsg="End of the round... Tie!"
let winTimesOne =0 ;
let winTimesTwo = 0;
let gameTimes=0;
let s=""
let ss=""
let sss=""
let totalMsg;
let box_1=document.getElementById('1')
let box_2=document.getElementById('2')
let box_3=document.getElementById('3')
let box_4=document.getElementById('4')
let box_5=document.getElementById('5')
let box_6=document.getElementById('6')
let box_7=document.getElementById('7')
let box_8=document.getElementById('8')
let box_9=document.getElementById('9')
let textLog = document.getElementById('winLog')
let obj={
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:'',
    9:'',
    turn:turnOne,
    won:'',
    games:"0",
    winOne:"0",
    winTwo:"0"};
if (playerOne){
        alert('You are Player 1(x)');
        playerX=true
        playerTxt.innerText="You are Player1 (X)"
    }
else if (playerOne==false){
        alert('You are Player 2(O)');
        playerY=true
        playerTxt.innerText="You are Player2 (Y)"
    }
function update(){
    // do whatever you like here
    getServerData()
    setTimeout(update, 1000);
    }
    update()
function restart (){ //restart button
      obj={
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    7:'',
    8:'',
    9:'',
    turn:turnOne,
    won:'',
    games:"0",
    winOne:"0",
    winTwo:"0"}
    document.getElementById('winLog').innerText=''
    winTimesOne =0 ;
    winTimesTwo = 0;
    gameTimes=0;
    continueBtn=document.getElementById('continueBtn')
    if ( continueBtn){
    continueBtn.remove(continueBtn)
}
    sendToServer()
}
function sendToServer (){
        fetch(server, {
            headers: {"Content-type": "application/json; charset=UTF-8"},
            method: 'PUT',
            body: JSON.stringify(obj)
          })
          updateScreen()
           }
function getServerData () {
        fetch(server)
        .then(response => response.json())
        .then(data => {
        object = JSON.stringify(data);
        obj=JSON.parse(object)
        console.log(obj)
        updateScreen()
        })
        };
function updateScreen(){
    let finish
    box_1.innerText=obj[1]
    box_2.innerText=obj[2]
    box_3.textContent=obj[3]
    box_4.textContent=obj[4]
    box_5.textContent=obj[5]
    box_6.textContent=obj[6]
     box_7.textContent=obj[7]
    box_8.textContent=obj[8]
    box_9.textContent=obj[9]
    turnMsg=obj.turn
    winTimesOne =obj.winOne;
    winTimesTwo = obj.winTwo
    gameTimes=obj.games
    finish=obj.won
  document.getElementById('msg').innerText=turnMsg;
  if (gameTimes!==1 ){s='s'}
  if (winTimesOne!==1  ){ss='s'}
  if (winTimesTwo!==1  ){sss='s'}
  if (gameTimes==1 ){s=''}
  if (winTimesOne==1  ){ss=''}
  if (winTimesTwo==1  ){sss=''}
    document.getElementById('winLog').innerText=`During a total of ${gameTimes} game${s}: Player 1 has won ${winTimesOne} time${ss} and Player 2 has won ${winTimesTwo} time${sss} `
  let contBtn=  document.getElementById('continueBtn')

if (gameTimes>0 &&contBtn===null && finish=='yes')
{winButtons()
    ContinueButtonAtStart()
}
function ContinueButtonAtStart (){
    let contBtn=  document.getElementById('continueBtn')
    if ( contBtn==true &&
        box_1.innerText=='' &&
        box_2.innerText=='' &&
        box_3.textContent=='' &&
        box_4.textContent=='' &&
        box_5.textContent=='' &&
        box_6.textContent=='' &&
      box_7.textContent=='' &&
      box_8.textContent=='' &&
      box_9.textContent=='')
       {finish='no'
       contBtn.remove(contBtn)
    } 
    }
    ContinueButtonAtStart()
}
const game = ()=>{
    dBox.forEach((boxEach) => {
    boxEach.addEventListener('click', play);
    })
    }
    game ()
function play (item) {
const box = item.target.textContent
let fox = item.target.id
let msg='yes'
if (playerX==true &&
    turnMsg==turnOne && 
    box!==x && 
    box!==o ){
    obj.turn = turnTwo;
    obj[fox]='X'
    sendToServer ()
    testWinCondition (x,winOneMsg,msg)
} else if (playerY==true &&
    turnMsg==turnTwo &&
    box!==x &&
    box!==o )  {
        obj.turn = turnOne
    obj[fox]='O'
    sendToServer ()
    testWinCondition (o,winTwoMsg,msg)
}
}
function win (message,mes){
    obj.turn = message
    obj.won=mes
    sendToServer()
    winLog()
}
function testWinCondition (value,message,mes){
    if ( 
        box_1.textContent == value && 
        box_2.textContent == value && 
        box_3.textContent == value  ) {
        win(message,mes)
     }else if (
        box_4.textContent == value && 
        box_5.textContent == value && 
        box_6.textContent == value) {
            win(message,mes)
    }else if (
        box_7.textContent == value && 
        box_8.textContent == value && 
        box_9.textContent == value) {
            win(message,mes)
    }else if (
        box_1.textContent == value && 
        box_5.textContent == value && 
        box_9.textContent == value) {
            win(message,mes)
    }else if (
        box_3.textContent == value && 
        box_5.textContent == value && 
        box_7.textContent == value) {
            win(message,mes)
    }else if (
        box_1.textContent == value && 
        box_4.textContent == value && 
        box_7.textContent == value) {
            win(message,mes)
    } else if (
        box_2.textContent == value && 
        box_5.textContent == value && 
        box_8.textContent == value) {
            win(message,mes)
    }else if (
        box_3.textContent == value && 
        box_6.textContent == value && 
        box_9.textContent == value) {
            win(message,mes)
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
            gameTimes++
            obj.games=gameTimes
            obj.turn = tieMsg
            obj.won=mes
        sendToServer()
                winLog()
    }
}
function winLog(){
if (obj.turn == winTwoMsg){
    winTimesTwo++
    gameTimes++
    obj.games=gameTimes
    obj.winTwo=winTimesTwo
}else if (obj.turn == winOneMsg) { 
    winTimesOne++
    gameTimes++
    obj.games=gameTimes
    obj.winOne=winTimesOne
}else{gameTimes++
    obj.won=mes
}
sendToServer()
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
    obj={
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
        8:'',
        9:'',
        turn:turnOne,
        won:'',
        games:gameTimes,
        winOne:winTimesOne,
        winTwo:winTimesTwo}
        sendToServer()
        continueBtn.remove(continueBtn)
        }
    )
    }
 
    




