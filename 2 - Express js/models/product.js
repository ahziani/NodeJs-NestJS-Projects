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
        const db = getDB();
        return db.collection('products').updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedProduct }
        )
    }

    static findById(id) {
        const db = getDB();
        return db.collection('products').findOne({ _id: new ObjectId(id) });
    }

    static fetch() {
        const db = getDB();
        return db.collection('products').find().toArray();       
    }

    static remove (id) {
        const db = getDB();
        return db.collection('products').deleteOne({ _id: new ObjectId(id) })
    }
}
