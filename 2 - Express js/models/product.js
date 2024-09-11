let products = [];
const { getDB } = require('../util/database')
const { ObjectId } = require('mongodb')

module.exports = class Product {
    constructor(title, price, image, description) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    save() {
        const db = getDB();
        return db.collection('products').insertOne(this);
    }

    static edit(id, updatedProduct) {
        const index = products.findIndex(p => p.id === id)
        products[index] = { id, ...updatedProduct };
    }

    static findById(id) {
        const db = getDB();
        return db.collection('products').findOne({ _id: new ObjectId(id) })
        .then(product => {
            return product;
        })
    }

    static fetch() {
        const db = getDB();
        return db.collection('products').find().toArray()
        .then(products => {
            return products;
        })        
    }

    static remove (id) {
        const db = getDB();
        return db.collection('products').deleteOne({ _id: new ObjectId(id) })
    }
}
