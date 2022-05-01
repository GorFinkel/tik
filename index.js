let d=document.querySelectorAll(".d");
let server =' http://localhost:3000/posts/';
let clickTimes = 1;
let playerOne = prompt(`Player 1 (X) what is Your name?`);
let playerTwo = prompt ('Player 2 (O) what is Your name?');
let turnMsg;
turnOne=`Now is the ${playerOne} (X) turn`;
turnTwo=`Now is the ${playerTwo} (O) turn`;
turnMsg = turnOne;

function updateScreen(){
document.getElementById('msg').innerText=turnMsg;
}
updateScreen();
const game = ()=>{
    d.forEach((boks) => {

    boks.addEventListener('click', play);
  
    })
}


function play (a) {
const box = a.target.textContent
if (clickTimes % 2 !== 0 && box!=="O"&& box!=="X" ){
    a.target.textContent ="X";
    turnMsg = turnTwo;
    updateScreen()
clickTimes++
console.log(clickTimes)

} else if (clickTimes % 2 == 0 && box!=="X"&& box!=="O" )  {
    a.target.textContent ="O";
    turnMsg = turnOne;
    updateScreen()

clickTimes++
console.log(clickTimes)
}
}
game ()
  
//not activeted yet
fetch(server, {
    method: 'POST',
    body: JSON.stringify({
      userId: user_id,
      title: new_title,
      body: new_body
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('response: ' + JSON.stringify(data));
  })



// get data from json file and transform it to an object

let object ='';


document.getElementById('getMessage').onclick= () => {
fetch(server)
.then(response => response.json())
.then(data => {
  object = JSON.stringify(data);
object=JSON.parse(object)
document.getElementById('message').innerHTML = object[0].title+' '+object[5].body

console.log(object[0].title)

})

};

