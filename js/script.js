let divProductos = document.getElementById('divProductos')
let listadoProductos = []

fetch('./json/productos.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(el => listadoProductos.push(el))
        mostrarProductos(listadoProductos)
    })
    .catch(error => console.log(error))


    function mostrarProductos (array) {
        for (const productos of array) {
            let div = document.createElement ('div')
            div.className = 'card border-info mb-3 mx-auto'
            div.style.maxWidth = '22rem'
            div.innerHTML = `
                    <h1 class="card-header">${productos.nombre}</h1>
                    <img src="./img/${productos.img}" class="card-img-top">
                    <div class="card-body">
                        <h1 class="precio"><span>$</span><span class="price">${productos.precio}</span></h1>
                        <p>${productos.banda}</p>
                        <p>Formato ${productos.formato}</p>
                        <p>${productos.distribuidora}</p>
                    </div>
                    <a href="" class="btn btn-block btn-info agregar-carrito mb-3" data-id="${productos.id}">Comprar</a>
            `
            divProductos.appendChild(div)
        }
    }