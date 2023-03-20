console.log("Script running");

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
