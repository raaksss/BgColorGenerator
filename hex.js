const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    let Hexcolor="#";
    for(let i=0;i<6;i++){
        let rand=getRandom();
        Hexcolor +=hex[rand];
    }
    color.textContent=Hexcolor;
    document.body.style.backgroundColor=Hexcolor;

})
function getRandom(){
    return Math.floor(Math.random()*hex.length)
}