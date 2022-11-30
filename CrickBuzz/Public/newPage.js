const plus1=document.getElementById("plus1");
const plus2=document.getElementById("plus2");
const minus1=document.getElementById("minus1");
const minus2=document.getElementById("minus2");
const team1Score=document.getElementById("team1Score");
const team2Score=document.getElementById("team2Score");
const wicket1=document.getElementById("wicket1");
const wicket2=document.getElementById("wicket2");

let cnt1=0;
let cnt2=0;
let wic1=0;
let wic2=0;
plus1.onclick =()=>{
    cnt1++;
    team1Score.innerHTML=cnt1;
}
plus2.onclick =()=>{
    cnt2++;
    team2Score.innerHTML=cnt2;
}
minus1.onclick=()=>{
    if(cnt1>0){
        cnt1--;
        team1Score.innerHTML=cnt1;
    }
}
minus2.onclick=()=>{
    if(cnt2>0){
        cnt2--;
        team2Score.innerHTML=cnt2;
    }
}
// team1Wickets.style.backgroundColor="pink";
wicket1.onclick=()=>{
    if(wic1<10)
    {
        wic1++;
        team1Wickets.innerHTML=wic1;
    }
}
wicket2.onclick=()=>{
    if(wic2<10)
    {    
        wic2++;
        team2Wickets.innerHTML=wic2;
    }
}