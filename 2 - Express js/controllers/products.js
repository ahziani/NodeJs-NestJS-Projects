const Product = require('../models/product')

exports.addProduct = (req, res, next) => {
    res.render('save-product', {
        pageTitle: 'Add Product Page',
        isEdit: false
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

exports.editProduct = (req, res, next) => {
    const id = req.params.id;
    const product = Product.findById(id);

    console.log('product', product)

    res.render('save-product', {
        pageTitle: 'Edit Product Page',
        isEdit: true
    })
}

exports.postEditProduct = (req, res, next) => {
    console.log('postEditProduct', id)
    // const title = req.body.name;
    // const price = req.body.price;
    // const image = req.body.image;
    // const description = req.body.description;

    // const product = new Product(title, price, image, description);
    // product.save();

    // res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetch();
    
    res.render('home', {
        pageTitle: 'Home Page',
        products: products
    });
}

exports.getProduct = (req, res, next) => {
    const id = req.params.id;
    const product = Product.findById(id);
    
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
