AOS.init();
var typed = new Typed('#hero-heading', {
    strings: ['TECHNOVATION-2024<br>Events'],
    typeSpeed: 60,
});

const hero_section=document.getElementById('hero-section');
const hero_heading=document.getElementById('hero-heading');
const events=document.getElementById('events-nav');
const navbar=document.getElementById('navbar');
const btn_nav=document.getElementById('show-nav');
console.log(btn_nav.classList);

btn_nav.addEventListener('click',()=>{
    btn_nav.style.transition= "transform .3s linear";
    if(!btn_nav.classList.contains('active')){
        btn_nav.style.width='0';
        btn_nav.classList.add('active');
        navbar.appendChild(events);
    }
    else{
        btn_nav.style.width='44px';
        btn_nav.classList.remove('active');
        navbar.removeChild(events)
    }
});