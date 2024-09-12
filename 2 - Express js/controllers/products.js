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

    product.save().then((result) => {
        res.redirect('/')
    })
}

exports.editProduct = (req, res, next) => {
    const id = req.params.id;
    
    Product.findById(id).then(product => {
        res.render('save-product', {
            pageTitle: 'Edit Product Page',
            isEdit: true,
            product
        })
    })
}

exports.postEditProduct = (req, res, next) => {
    const id = req.body.idProduct;

    const updatedProduct = {
        title: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    }

    Product.edit(id, updatedProduct).then(()=> {
        res.redirect('/')
    })
    
}

exports.getProducts = async (req, res, next) => {
    const products = await Product.fetch();

    res.render('home', {
        pageTitle: 'Home Page',
        products: products
    });  
}

exports.getProduct = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id).then(product => {
        res.render('product-detail', {
            pageTitle: 'Product detail',
            product: product
        });
    })
}

exports.removeProduct = async (req, res, next) => {
    const id = req.params.id;
    await Product.remove(id);

    res.redirect('/');
}
