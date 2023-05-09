// Clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    getPrecio(){
        return `El precio es ${this.precio}`;
    }
}

const produto2 = new Producto('Monitor curvo 49"', 800, true);
const produto3 = new Producto('Monitor flexible 29"', 1000, false);

console.log(produto2);
console.log(produto3);
console.log(produto3.getPrecio());

// Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    } 

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('Aprende JS', 2285, '001256');

console.log(libro.formatearProducto());
console.log(produto2.formatearProducto());
