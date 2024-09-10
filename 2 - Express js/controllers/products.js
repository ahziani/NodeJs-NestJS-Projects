const products = [];

exports.addProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page'
    })
}

exports.postProduct = (req, res, next) => {
    products.push({
        name: req.body.title,
        price: req.body.price
    });

    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home Page',
        products: products
    });
}
