let products = [];

module.exports = class Product {
    constructor(title, price, image, description) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        products.push(this);
    }

    static fetch() {
        return products;
    }

    static remove (id) {
        products = products.filter((product) => product.id !== id)
    }
}
