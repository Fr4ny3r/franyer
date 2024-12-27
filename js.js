const contPlatos = document.querySelector(".cont-platos");
const cont2Platos = document.querySelector(".cont2-platos");
const shaPlatos = document.querySelector(".sha-platos");
let wp = contPlatos.clientWidth;
let wp2 = cont2Platos.clientWidth;
let fr = ("1fr ");

let next = document.querySelector(".next");
let back = document.querySelector(".back");




// document.addEventListener("DOMContentLoaded", function () {window.scroll(0,0)}); ${fr.repeat(i)}

class platos{
    constructor(nombre, imagen, descripcion, numero) {
        this.nom = nombre;
        this.img = imagen;
        this.desc = descripcion;
        this.num = numero;

    }


contenedorPlatos(j){    

    for (let i = 0; i < j; i++) {
        let divPlatos = document.createElement(`div`);
        let imgPlatos = document.createElement("img");
        let desPlatos = document.createElement("p");
        let textPlatos = document.createElement("a");
        divPlatos.classList.add(`plato`);
        divPlatos.classList.add(`plato-${i}`);
        imgPlatos.classList.add(`imgPlato-${i}`);
        desPlatos.classList.add(`descPlato-${i}`);
        textPlatos.classList.add(`textPlato-${i}`);
        wp = contPlatos.clientWidth;
        contPlatos.setAttribute("style", `width: ${(wp+(1000*50))}px; grid-template-columns: ${fr.repeat(i+1)};`);
        imgPlatos.setAttribute("src", `${this.img}`);
        textPlatos.textContent = this.nom;
        desPlatos.textContent = this.desc;
        contPlatos.appendChild(divPlatos);
        divPlatos.appendChild(imgPlatos);
        divPlatos.appendChild(textPlatos);
        divPlatos.appendChild(desPlatos);
    }


   

} 



}





pla  = new platos("xd", "foto1.jpg", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia reprehenderit nesciunt error odit. Temporibus, veritatis. Accusantium aliquam dolores");

let v = 5;

pla.contenedorPlatos(v);




next.addEventListener("click",()=>{
    t = 0;
    if (t <= v){
    let t = v;
    contPlatos.children[t].setAttribute("style", `
    position: relative;
    left: 0px;
    top: 0px;
    grid-column: 1/1;
    grid-row: 1/1;
    `)
    }
})





// function cero(){window.scrollX(0)};
// setInterval(cero, 0);
