
const sections=document.querySelectorAll('.section');

window.addEventListener('scroll',()=>{
sections.forEach(section=>{
if(section.getBoundingClientRect().top < window.innerHeight-120){
section.style.opacity="1";
section.style.transform="translateY(0)";
}
});
});
