AOS.init();
var typed = new Typed('#hero-heading', {
    strings: ['TECHNOVATION-2024<br>Events'],
    typeSpeed: 60,
});

const events=document.getElementById('events-nav');
const mobile_events=document.getElementById('event-mobile-view');
const navbar=document.getElementById('navbar');
const btn_nav=document.getElementById('show-nav');
events.style.display='none';
mobile_events.style.display='none';

btn_nav.addEventListener('click',()=>{
    if(!btn_nav.classList.contains('active')){
        btn_nav.style.width='0';
        btn_nav.classList.add('active');
        navbar.insertBefore(events,navbar.children[1]);
        mobile_events.style.display='block';
        mobile_events.classList.add="right-0";
        navbar.insertBefore(mobile_events,navbar.children[2]);
        events.style.display="flex";
    }
    else{
        btn_nav.style.width='2rem';
        btn_nav.classList.remove('active');
        navbar.removeChild(events);
        navbar.removeChild(mobile_events);
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