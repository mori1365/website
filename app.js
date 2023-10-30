const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const clos = document.querySelector(".clos");
menu.onclick = () =>{
    navbar.style.right = "0px";
    menu.style.display="none";
    clos.style.display="block";
}
clos.onclick = () =>{
    navbar.style.right = "-100%";
    menu.style.display="block";
    clos.style.display="none";
}
window.onscroll = () =>{
    navbar.style.right = "-100%";
    menu.style.display="block";
    clos.style.display="none";
}