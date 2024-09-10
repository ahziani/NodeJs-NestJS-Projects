const Product = require('../models/product')

exports.addProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page'
    })
}

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;

    const product = new Product(req.body.title, req.body.price);
    product.save();

    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetch();
    console.log(products)
    res.render('home', {
        pageTitle: 'Home Page',
        products: products
    });
}
