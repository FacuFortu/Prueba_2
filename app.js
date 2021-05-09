
class Product {
    constructor(nombre, precio, ano){
        this.nombre = nombre;
        this.precio = precio;
        this.ano = ano;
    }
}

class UI{
    addProduct(product) {
        const productList = document.getElementById('lista de productos')
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-8">
            <div class="card-body">
                <strong>Nombre del Producto</strong>: ${product.nombre}
                <strong>Precio del Producto</strong>: ${product.precio}
                <strong>Año del Producto</strong>: ${product.ano}
                <a href="#" class="btn btn-danger" name="delete">Borrar</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('formulario de producto').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

}


document.getElementById('formulario de producto')
    .addEventListener ('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const ano = document.getElementById('ano').value;


    //console.log(nombre, precio, año);

    const product = new Product(nombre, precio, ano)

    const ui = new UI();
    ui.addProduct(product);
    ui.resetForm();

    e.preventDefault();
});

document.getElementById('lista de productos').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})
