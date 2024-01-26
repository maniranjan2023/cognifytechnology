const inpt=document.getElementById("inp");
const output=document.querySelector("#gen");
const last= document.getElementById("last");




const generatepass=(n)=>{

let chara="";
const letters= "ABCDEFGHIJLMNOPQRSTUVWXYZ";
const char = "<{|&%#!\/]+'-*[?'";
const numb= "1234567890";

let p=1;
let x;
for(let i=0;i<n;++i){
    if(p==1){ x= (Math.random() * 25).toFixed(0);
    chara+=letters[x];
    p=2;
    }

    else if(p==2){
         let y=(Math.random() * 16).toFixed(0);
    chara+=char[y];
    p=3;
    }
    else if(p==3){
        let z=(Math.random() * 9).toFixed(0);
    chara+=numb[z];
    p=4;
    }
    else if(p==4){
        let z=(Math.random() * 25).toFixed(0).toLowerCase();
    chara+=letters[z];
    p=1;
    }
    
}
return chara;

};

const genpassword=()=>{
    const noofchar = Number(inpt.value);
    const para = document.createElement("p");
    let data;



  
  data=generatepass(noofchar);
  para.innerHTML=data;
  para.setAttribute("class","paras");
  last.append(para);
};


