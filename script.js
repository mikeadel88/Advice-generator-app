let advice={}
const icon=document.querySelector(".icon")
async function getAdvice(){
    const resopens=await fetch("https://api.adviceslip.com/advice");
    const result=await resopens.json()
     advice=result.slip
     document.querySelector("#adviceId").innerHTML=advice.id
     document.querySelector(".text").innerHTML=`" ${advice.advice} "`
}
getAdvice()
icon.addEventListener("click",getAdvice)