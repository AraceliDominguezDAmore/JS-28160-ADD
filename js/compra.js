const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody"); //linea 45
const carrito = document.getElementById('carrito'); //linea 44
const procesarCompraBtn = document.getElementById('procesar-compra'); //linea 85

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}

function procesarCompra() {
    if (compra.obtenerProductosLocalStorage().length === 0) {
    }
    else {
        (function () {
            emailjs.init("user_CEozz2F39lJJOLF5mJiDA");
        })();

        var myform = $("form#procesar-pago");

        myform.submit( (event) => {
            event.preventDefault();

            const cargandoGif = document.querySelector('#cargando');
            cargandoGif.style.display = 'block';
        });
    }
}

