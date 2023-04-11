//variable id 
let incrementalId = 1

//creo la clase ProductManager con su elemento products como un array vacio

class ProductManager {
    constructor() {
        this.products = [];
    }

    //creo el metodo addProduct, debe crear el producto con un title, description, price, thumbnail, code, stock
    addProduct(title, description, price, thumbnail, code, stock) {
        this.products.push({ title, description, price, thumbnail, code, stock, id: incrementalId });
        incrementalId++;
    };

    //creo el metodo getProducts, debe mostrar el array con todos los productos cargados hasta el momento.
    getProducts() {
        return this.products;
    };

    //creo el metodo getProductById
    getProductById(id) {
        if (this.products.find((product) => product.id === id)) {
            console.log("el producto encontrado es el siguiente:")
            console.log((this.products.find((product) => product.id === id)));
        } else {
            console.log("el resultado de la busqueda es el siguiente:")
            console.log("not found")
        }
    }
};

const productsArray = new ProductManager();

//primer console.log para mostrar el array vacio (testeo)
console.log(productsArray.getProducts());

//agrego el producto 1
productsArray.addProduct("remera 1", "slimFit, tecnología AeroCool", 2000, "imagenremera1.jpg", "abc121", 10);


//agrego el producto 2
productsArray.addProduct("remera 2", "Algodon 100%", 2000, "imagenremera2.jpg", "abc122", 5);

//agrego el producto de testeo
productsArray.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);


//compruebo que el array products  acumule los objetos con sus respectivos id 
console.log(productsArray.getProducts());

//busco el producto por id (testeo)
productsArray.getProductById(3);

