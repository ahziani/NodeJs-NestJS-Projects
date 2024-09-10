const Product = require('../models/product')

exports.addProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page'
    })
}

exports.postProduct = (req, res, next) => {
    const title = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;

    const product = new Product(title, price, image, description);
    product.save();

    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetch();
    
    res.render('home', {
        pageTitle: 'Home Page',
        products: products
    });
}

exports.getProduct = (req, res, next) => {
    const products = Product.fetch();
    const id = req.params.id;
    const product = products.find((p) => p.id === id);
    
    res.render('product-detail', {
        pageTitle: 'Product detail',
        product: product
    });
}

exports.removeProduct = (req, res, next) => {
    const id = req.params.id;
    Product.remove(id);
    res.redirect('/')
}
