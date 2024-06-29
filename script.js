// --------------------------------------HAMBERGER-------------------------------------------------------
const menu = document.querySelector(".menu");
const hamberger = document.querySelector(".hamberger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const menuItems = document.querySelectorAll(".menuItems");
function toggleMenu()
{
    if (menu.classList.contains("showMenu"))
    {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
    else
    {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamberger.addEventListener("click",toggleMenu);

menuItems.forEach(function(menuItems)
{
    menuItems.addEventListener("click",toggleMenu);
})

// ---------------------------------------------SCROLL----------------------------------------------------
ScrollReveal(
    { 
        reset: true,
        distance: '15px',
        duration: 2000,
        delay: 150
      
    });

ScrollReveal().reveal('.Heading, .heading, #p1',{origin:'top'});
ScrollReveal().reveal('.btech, .SSC, #p3, .left, #cl, #java,#css, #dsa',{origin:'left'});
ScrollReveal().reveal('.HSC, #p2, .right, #cpp, #python, #html,#mysql',{origin:'right'});
ScrollReveal().reveal('.ContentA, #p4, .content,.form',{origin:'bottom'});

// ---------------------------------------------PROJECTS--------------------------------------------------
let a=document.querySelector("#p1");
let b=document.querySelector("#p2");
let c=document.querySelector("#p3");
let d=document.querySelector("#p4");
a.addEventListener("click",alert1);
b.addEventListener("click",alert1);
c.addEventListener("click",alert1);
d.addEventListener("click",alert1);
function alert1()
{
    alert("Are you sure to leave the site");
}