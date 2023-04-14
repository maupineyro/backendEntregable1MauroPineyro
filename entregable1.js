
//creo la clase ProductManager con su elemento products como un array vacio
// debo recordar que los metodos van dentro de la clase al igual que el id
class ProductManager {
    constructor() {
        this.products = [];
        this.incrementalId = 1; //variable id para identificar los productos
    };

    //Métodos
    addProduct(title, description, price, thumbnail, code, stock) { // agrega el producto nuevo, le da un id.

        //validación de ingreso de valores
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Error: debe completar todos los valores para agregar producto");
            return;
        }
        //duda: respecto a ! en el caso de q stock del producto a agregar sea "0". (preguntar)

        //validación de repetición de code
        const existingCode = this.products.find(product => product.code === code);
        if (existingCode) {
            console.log(`Error: Ya existe un producto con el code ${code}, no se puede agregar`);
            return;
        }

        //instancio la estructura del producto
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.incrementalId,
        }
        this.products.push(product);
        console.log(`se agregó el producto satisfactoriamente con un Id : ${this.incrementalId} (autogenerado y único)`);
        this.incrementalId++;

    };


    getProducts() {//creo el metodo getProducts, debe mostrar el array con todos los productos cargados hasta el momento.
        return this.products;
    };


    idInCollection(id) {// creo un "sub-metodo" para ver si el id existe en la colección products
        return this.products.find((product) => product.id === id);
    }


    getProductById(id) {//creo el metodo getProductById
        console.log("el resultado de la busqueda por Id de producto es:");
        this.idInCollection(id) ? console.log(this.idInCollection(id)) : console.log("not found");
    }
};



//creo la constante productManager
const productManager = new ProductManager();



//Comprobaciones

//primer console.log para mostrar el array vacio (testeo)
console.log(productManager.getProducts());

//agregar producto de testeo
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25);

//agrego producto con codigo diferente para comprobar, que lo agregue con un id nuevo
productManager.addProduct("producto prueba 2", "Este es un producto prueba", 200, "sin imagen", "abc124", 10);

//agrego producto con codigo repetido para comprobar
productManager.addProduct("producto prueba 3", "Este es un producto prueba", 200, "sin imagen", "abc123", 10);

//agrego un producto que no cumple con completar todos los valores
productManager.addProduct("producto prueba 4", "Este es un producto prueba", 200, "sin imagen", 1);

//compruebo que el array products  acumule los objetos con sus respectivos id 
console.log(productManager.getProducts());

//busco el producto por id (testeo)
productManager.getProductById(2);
productManager.getProductById(3);

