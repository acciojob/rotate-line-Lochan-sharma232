//your JS code here. If required.
let deg=0;
const rotate=document.getElementById("line");
rotate.style.transform=`rotate(${deg}deg)`;
rotate.addEventListener("click",(e)=>{
	setInterval(function(){
		rotate.innerHTML+=line},1000);

})