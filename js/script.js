let menu = document.getElementById("menu_links");
let sombra = document.getElementById("sombra");
let menu_barras = document.getElementById("menu_barras");

let body = document.getElementsByTagName("body")[0];

function mostrarMenu() {

    // if (menu.style.left != "10px") {
    if (window.getComputedStyle(menu).left != "10px") {
        menu.style.left = "10px"
        sombra.style.right = "-10vw"
        menu_barras.setAttribute("aria-expanded", "true")
        menu_barras.setAttribute("aria-label", "fechar menu")
        body.style.overflow = "hidden"
    } else {
        menu.style.left = "-300px"
        sombra.style.right = "110vw";
        menu_barras.setAttribute("aria-expanded", "false")
        menu_barras.setAttribute("aria-label", "abrir menu")
        body.style.overflow = "auto";
    }
    menu_barras.classList.toggle("ativo")
}