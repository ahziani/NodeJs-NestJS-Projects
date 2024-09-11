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

    static findById(id) {
        return products.find(p => p.id === id);
    }

    static fetch() {
        return products;
    }    

    static remove (id) {
        products = products.filter((product) => product.id !== id)
    }
}
