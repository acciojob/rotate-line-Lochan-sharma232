//your JS code here. If required.
const rotate=document.getElementById("line");
style.transform=rotate(deg);
rotate.addEventListener("click",(e)=>{
	setInterval(function(){rotate.innerHTML+=line},1000);

})