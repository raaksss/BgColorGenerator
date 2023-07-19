const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
btn,addEventListener('click',function(){
const gtRandom=getRandomNumber();
document.body.style.backgroundColor=colors[gtRandom];
color.textContent=colors[gtRandom];
console.log(gtRandom);
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}