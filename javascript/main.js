document.getElementById("header").innerHTML = `
<div>
            <div class="head" id="menu-big">
                <div>
                    <div class="icon col-2 col-m-2">
                        <a href="index.html"><img src="./imagenes/tree2.jpg" alt="icon"></a>
                        
                    </div>
                    <div class="col-8 col-m-8">
                        <h1 class="title" id="jar1" >Jardinería "La Magnolia"</h1>
                    </div>
                    
                    
                </div>
                <div class="menugrid-bg col-12">
                    <div class="col-2 col-s-5 boton"><a href="index.html">Inicio</a></div>
                    <div class="col-2 col-s-5 boton"><a href="armarjardin.html">Tips Para Jardines</a></div>
                    <div class="col-2 col-s-5 boton"><a href="tienda.html">Tienda</a></div>
                    <div class="col-2 col-s-5 boton"><a href="contacto.html">Contacto</a></div>
                    <div class="col-2 col-s-5 boton"><a href="sobrenosotros.html">Sobre Nosotros</a></div>
                </div>
            </div>
            <div id="menu-drop">
                <div class="dropdown col-s-2">
                    <button class="dropbtn"><img src="./imagenes/tree3.jpg" width="100px" alt="tree2"></button>
                    <div class="dropdown-content">
                        <div class="menugrid">
                            <div class="item1"><a href="index.html">Home</a></div>
                            <div class="item2"><a href="armarjardin.html">Tips Para Jardines</a></div>
                            <div class="item3"><a href="tienda.html">Tienda</a></div>
                            <div class="item4"><a href="contacto.html">Contacto</a></div>
                            <div class="item5"><a href="sobrenosotros.html">Sobre Nosotros</a></div>
                            <div class="item6"><img src="./imagenes/root2.jpg" height="200px" alt="root"></div>
                        </div>
                    </div>
                </div>
                <div class="col-s-10">
                    <h1 id="jar2">Jardineria</h1>
                </div>
                <div class="head-s col-s-12"></div>
            </div>
        </div> 
`
document.getElementById("footer").innerHTML = `

        <a target="_blank" href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
        <a target="_blank" href="https://wa.me/+5491112345678?text=Hello,%20please%20send%20me%20info"><i class="fa-brands fa-whatsapp"></i></a>
        <a target="_blank" href="mailto:codojardines@plantas.com"><i class="fa-solid fa-envelope"></i></a>
        <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
        <p>Pagina creada para el TP </p>
`



function ocultar() {
    document.getElementById('obj1').style.display = 'none';
}
function mostrar() {
    document.getElementById('obj1').style.display = 'block';
}
function ocultar() {
    document.getElementById('obj2').style.display = 'none';
}
function mostrar() {
    document.getElementById('obj2').style.display = 'block';
}
function ocultar() {
    document.getElementById('obj3').style.display = 'none';
}
function mostrar() {
    document.getElementById('obj3').style.display = 'block';
}


// CREACIÓN TARJETAS

let url = "./json/plantas.json"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {  
        console.log(data)
        datos = data.productos
        console.log(datos)  
        let cad = `<div id="app" class="flex-container col-11 col-m-11 col-s-12 ">`

        for (producto of datos) {
            cad += `
            <div class="tarjeta zoom" v-for="producto in productos">
            <img class="card-img-top" : src="${producto.imagen}" alt="${producto.nombre}" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">Precio &#36;${producto.precio}</p>
                <p class="card-text"  id="textitext">${producto.descripcion}</p>
                <!--  <a href="#" class="btn btn-primary">Ver Producto</a>-->
            </div>
        </div>   
    `
        }
        cad += `</div>
        `
        console.log(cad)
        document.getElementById("itemstienda").innerHTML = cad;
    }
    );



let titulo = document.getElementById("jar1");

document.addEventListener("DOMContentLoaded", function()
{
    titulo.style.display = "inline-block";
});
