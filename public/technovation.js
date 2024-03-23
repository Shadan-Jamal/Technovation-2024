AOS.init();
var typed = new Typed('#hero-heading', {
    strings: ['TECHNOVATION-2024<br>Events'],
    typeSpeed: 60,
});

const hero_section=document.getElementById('hero-section').innerW;
const hero_heading=document.getElementById('hero-heading');
const events=document.getElementById('events');
window.addEventListener('scroll',()=>{
    console.log(window.innerHeight) 
})