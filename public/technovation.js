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
events.style.display='none';

btn_nav.addEventListener('click',()=>{
    if(!btn_nav.classList.contains('active')){
        btn_nav.style.width='0';
        btn_nav.classList.add('active');
        navbar.insertBefore(events,navbar.children[1]);
        events.style.display="flex";
    }
    else{
        btn_nav.style.width='2rem';
        btn_nav.classList.remove('active');
        navbar.removeChild(events);
        events.style.display="none";
    }
});

window.addEventListener('scroll',()=>{
    let scrolled=window.scrollY;
    if(scrolled > 780){
        navbar.style.visibility="visible";
        navbar.classList.add('down');
    }
    else{
        navbar.style.visibility="hidden";
        navbar.classList.remove('down');
    }
})