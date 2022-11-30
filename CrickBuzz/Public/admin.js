const btn= document.getElementById("btn");
const content=document.getElementById("content");
const form=document.getElementById("form");
const team1=document.getElementById("team1").value;
const team2=document.getElementById("team2").value;
const submit=document.getElementById("submit");
submit.onclick =()=>{
    console.log(`The values are ${team1} and ${team2}`);
}
btn.onclick = () =>{
    content.style.display = 'none';
    btn.style.display = 'none';
    // form.style.border = '2px solid black';
    form.style.display="flex";
    // btn.innerHTML = 'fdafdaf';
}