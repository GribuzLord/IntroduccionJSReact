//Eventos clicks
const heading=document.querySelector('.heading');
const enlaces=document.querySelectorAll('.navegacion a');

heading.addEventListener('mouseenter',function() {
    heading.textContent="Nuevo heading";
});

heading.addEventListener('mouseleave',function() {
    heading.textContent="Javascript intermedio - Manipulacion de DOM";
});

enlaces.forEach(enlace=>{
    enlace.addEventListener('click',(e)=>{
        e.preventDefault();
        e.target.textContent="Diste click";
        console.log("Diste click");
    })
})