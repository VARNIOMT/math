let n1=document.querySelector("#n1")
let n2=document.querySelector("#n2")
let sum=document.querySelector("#sum")
let plus=document.querySelector("#plus")
let zarb=document.querySelector("#zarb")
let taghsim=document.querySelector("#taghsim")
sum.addEventListener("click",function(){
	document.querySelector("h1").innerHTML=Number(n1.value)+Number(n2.value)
})
plus.addEventListener("click",function(){
	document.querySelector("h1").innerHTML=Number(n1.value)-Number(n2.value)
})
zarb.addEventListener("click",function(){
	document.querySelector("h1").innerHTML=Number(n1.value)*Number(n2.value)
})
taghsim.addEventListener("click",function(){
	document.querySelector("h1").innerHTML=Number(n1.value)/Number(n2.value)
})