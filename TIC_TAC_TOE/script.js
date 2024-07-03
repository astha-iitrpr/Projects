console.log("I'm running...");
document.querySelector(".new").style.visibility="hidden";

//define some variables
let turn0=true;
let boxes=document.querySelectorAll(".btn");
let winPatterns=[[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let cnt=0;
//pressBtn
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O";
            cnt++;
            turn0=false;
            box.style.color="red";
        }
        else{
            box.innerHTML="X";
            cnt++;
            turn0=true;
        }
     box.disabled=true;
     if(cnt==9){
  document.querySelector(".msg").innerHTML= "This Game is Draw";
  document.querySelector(".new").style.visibility="visible"; 
    }
     checkWin();
    });
})
//to check the winner of the game.
const checkWin=()=>{
   for (const pat of winPatterns) {
     let p1=boxes[pat[0]].innerText;
     let p2=boxes[pat[1]].innerText;
     let p3=boxes[pat[2]].innerText;

   if(p1!="" && p2!="" && p2!=""){
    if(p1===p2 && p2===p3){
        document.querySelector(".msg").innerHTML= p1+" wins the game";
        document.querySelector(".new").style.visibility="visible";
       boxes.forEach((box) => {
          box.disabled=true;
       });
    }
   }
   }
}
//function of buttons.
let newBtn=document.querySelector(".new").addEventListener("click",()=>{
     location.reload();
     cnt=0;
     //instead of this we can also reset the game by applying initial conditions after winning
})
let rstBtn=document.querySelector(".rst-btn").addEventListener("click",()=>{
    location.reload();
    cnt=0;
})
//To check Draw



