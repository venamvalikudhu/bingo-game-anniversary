const plane_loader = {
	duration: 3000,
	iterations: 1,
};

const plane_loader_anim = [
{		
transform: "translateX(300px)"
},
];

var timerInterval = '';
let numberPicked = [];
var nextNumber = 0;
var oneMinusNumber = 0;

function shuffleForNextNumber()
{
clearInterval(timerInterval);
document.getElementById("shuffle").disabled= true;
document.getElementById("last-number").innerText = oneMinusNumber;
document.getElementById("plane-loader-area").animate(plane_loader_anim,plane_loader);

do
{	
nextNumber = Math.floor(Math.random() * 100);
}while(numberPicked.includes(nextNumber) || nextNumber==0)
numberPicked.push(nextNumber);			

var text = "count"+nextNumber;
 timerInterval = setInterval(() => {
   document.getElementById("current-value").innerText = nextNumber;
   document.getElementById(text).style.backgroundColor='lightgreen'
   document.getElementById(text).style.borderColor='black'
   document.getElementById(text).style.color = 'black';	
   document.getElementById("sequence-list").innerText = numberPicked;
   document.getElementById("shuffle").disabled= false;
   if(numberPicked.length==99)
	{
    document.getElementById('score-modal').style.display = "flex"
	}
},3000);
oneMinusNumber = nextNumber;

}

