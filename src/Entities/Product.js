import { readJson } from '../FileManager.js';

function Product(name, rentability, price){
    this.name = name;
    this.rentability = rentability;
    this.price = price;
}


var products = readJson("products");
products.forEach(object => {
    product = new Product(object.name, object.rentability, object.price);
    var productsObj = product.push();
    console.log(productsObj);
});