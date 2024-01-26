var bulb = document.querySelector("#bulb")
var btn= document.querySelector("button")


let flag=1
btn.addEventListener("click",function(){
    if(flag==1){
        bulb.style.backgroundColor = "yellow"
flag=0;
    }
    else if(flag==0){
        bulb.style.backgroundColor = "rgb(218, 218, 216)"
        flag=1;
    }
    
})


var greet= document.querySelector("#sub1")
const d = new Date()
let hour = d.getHours()

greet.addEventListener("click",function(){
    if(hour>=5 && hour<=11){
        alert("Good morning")
    }

    else if(hour>=12 && hour<=15){
        alert("Good afternoon")
    }
    else if(hour>=16 && hour<=20){
        alert("Good Evening")
    }

    else if(hour>=21 && hour<=4){
        alert("Good Night")
    }
})







