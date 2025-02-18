import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

    connectedCallback() {
        this.classList.add("md-tab", "fixed")

        this.innerHTML = /* HTML */ `
   <a ${resaltaSiEstasEn(["/gps.html"])} href="gps.html">
    <span class="material-symbols-outlined">location_on</span>
    Gps
   </a>

   <a id="navbar" ${resaltaSiEstasEn(["/archivos.html"])} href="archivos.html">
    <span class="material-symbols-outlined">perm_media</span>
    Archivos
   </a>

   <a ${resaltaSiEstasEn(["/camara.html"])} href="camara.html">
    <span class="material-symbols-outlined">photo_camera</span>
    Cámara
   </a>
   
   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`
    }

}

customElements.define("nav-tab-fixed", NavTabFixed)