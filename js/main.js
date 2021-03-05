(function () {

    window.addEventListener("resize", function () {
        mostrarMenu();
    })
    window.addEventListener("load", function () {
        mostrarMenu();
    })
    function mostrarMenu() {
        let ancho = window.innerWidth;
        let menu = document.querySelector(".menu");
        let menu__ul = document.querySelector(".menu__ul");
        let content = document.querySelector(".content")
        let div__correo=document.querySelector(".div__correo")
        let correo=document.querySelector(".correo")

        if (ancho <= 980) {
            content.appendChild(menu)
            content.appendChild(correo)
        } else {
            menu__ul.appendChild(menu)
            div__correo.appendChild(correo)
        }
    }

}())