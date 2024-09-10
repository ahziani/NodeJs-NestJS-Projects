let products = [];

module.exports = class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    save() {
        products.push(this);
    }

    static fetch() {
        return products;
    }
}
