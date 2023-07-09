let addPrice = 0;
let monthPayments = 3;
let discount = 0.10;

class Product {
    constructor(name, price) {
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.sold = false;
    }
    addIva() {
        this.price = this.price * 1.21;
    }
}

const products = [];
products.push(new Product("Look me in the eye", 10000));
products.push(new Product("Rainbow", 5000));
products.push(new Product("Red Lady", 25000));
products.push(new Product("Flamingo", 2000));
products.push(new Product("Abstract Flowers", 3500));
products.push(new Product("Good Vibes Only", 3500));
products.push(new Product("Relaxed", 6000));
products.push(new Product("Candy Horse", 10000));



function calculate(addPrice, monthPayments) {
    let wishContinue;
    let totalWithoutIva = 0
    let subtotal = 0
    let monthPaymentSubtotal = 0 
    do {
        let productName = prompt('Ingrese el nombre del producto. (10% de descuento en Cuadros con montos superiores a $20.000,00): ');
        const product = products.find(product => product.name.toUpperCase() === productName.toUpperCase());
        

        if (product) {
            product.addIva();
            addPrice += product.price;
            totalWithoutIva += product.price / 1.21

            if (product.price >= 10000 && product.price <= 19999) {
                monthPayments = 6;
            } else if (product.price >= 20000) {
                product.price -= product.price * discount;
                monthPayments = 12;
            }

            subtotal += product.price;
            monthPaymentSubtotal += product.price / monthPayments;
            console.log('El cuadro "' + product.name + '" tiene un valor de Pesos Argentinos: $' + product.price, 'iva incluido.');
            console.log('El subtotal es ' + monthPayments + ' cuotas de: $' + monthPaymentSubtotal + ' cada cuota.');
        } else {
            console.log('El producto no fue encontrado.');
        }

        wishContinue = prompt('¿Desea agregar otro producto? (SI/NO):').toUpperCase();

    } while (wishContinue === 'SI');

    console.log('La suma total neta de iva y descuentos de los productos elegidos es de Pesos Argentinos: $' + totalWithoutIva);
    console.log('La suma total con iva incluido y descuentos aplicados de los productos elegidos es de Pesos Argentinos: $ ' + subtotal)
}

calculate(addPrice, monthPayments);