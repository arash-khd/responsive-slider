var menu_icon = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu")[0];
menu_icon.addEventListener("click",function(){
    this.classList.toggle("change");
    menu.classList.toggle("active-menu");
});