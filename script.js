//your code here
var btn = document.getElementById("btn");
var numPtag = document.getElementById("num");
var res = document.getElementById("response");
var inputValue = document.getElementById("guess").value;




function rendomNumGenerator(){
	rendomNum = Math.floor(Math.random() * 40) - 20;
	document.getElementById("num").innerText = randomNum;
	guessNum();
	print();
}
function guessNum(){
	input = number( documtent.getElementById("guess").value);
}
function print() {
	
if(Math.abs(randomNum - input) <= 5){
   document.getElementById("response").innerText = "Hot";
}
else(
   document.getElementById("response").innerText = "Cold";
)
	
}
btn.addEventListener('click',rendomNumGenerator);
