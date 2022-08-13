let productos = [];
let carrito = [];
let prodCarrito = [];

function getProductos(){
    return productos;
}

function getProducto(id){
    return productos.find(prod => prod.id === id) || { error: 'producto no encontrado' };
}

function setProducto(objProducto) {
    if(productos.length == 0){
        objProducto.id = 1;
    }else{
        let id = productos[productos.length-1].id
        objProducto.id = id + 1;
    }
    productos.push(objProducto);

    return productos;
}

function borrarProducto(id){
    const productosNuevos = productos.filter(prod => prod.id !== id);
    productos = productosNuevos;
    return productos;
}

//CARRITO
function setCarrito(objCarrito) {
    if(carrito.length == 0){
        objCarrito.id = 1;
    }else{
        let id = carrito[carrito.length-1].id
        objCarrito.id = id + 1;
    }
    carrito.push(objCarrito);

    return carrito;
}

function borrarCarrito(id){
    const carritoNuevo = carrito.filter(carProd => carProd.id !== id);
    carrito = carritoNuevo;
    return carrito;
}

function getCarrito(id){
    return carrito.find(car => car.id === id) || { error: 'carrito no encontrado' };
}

function agregarCarritoProductos(id, productoCarrito){
    let carritoEncontrado = carrito.find(car => car.id === id);
    carritoEncontrado.productos = prodCarrito;

    if(prodCarrito.length == 0){
        productoCarrito.id = 1;
    }else{
        let id = prodCarrito[prodCarrito.length-1].id
        productoCarrito.id = id + 1;
    }

    // prodCarrito = [...prodCarrito, productoCarrito];
    prodCarrito.push(productoCarrito);

    return carrito;
}

function borrarCarritoProducto(idCarrito, idProducto){
    let carritoFind = carrito.find(carrito => carrito.id === idCarrito);

    let carritoFilter = carritoFind.productos.filter(carritoProd => carritoProd.id !== idProducto);
    // let carritoFilter = carritoFind.filter(carritoProd => carritoProd.id !== idProducto);
    prodCarrito = carritoFilter;

    return prodCarrito;
}

module.exports = {
    productos,
    getProductos,
    setProducto,
    getProducto,
    borrarProducto,
    setCarrito,
    borrarCarrito,
    getCarrito,
    agregarCarritoProductos,
    borrarCarritoProducto
}