const Product = require('../models/product')

// exports.addProduct = (req, res, next) => {
//     res.render('save-product', {
//         pageTitle: 'Add Product Page',
//         isEdit: false
//     })
// }

exports.postProduct = async (req, res, next) => {
    const title = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;

    try {
        const product = new Product(title, price, image, description);
        await product.save();
    
        res.json({
            message: 'Product Added',
            product: product
        })
    } catch(err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
}

// exports.editProduct = async (req, res, next) => {
//     const id = req.params.id;
//     const product = await Product.findById(id);

//     res.render('save-product', {
//         pageTitle: 'Edit Product Page',
//         isEdit: true,
//         product
//     });
// }

exports.postEditProduct = async (req, res, next) => {
    const id = req.params.id;
    
    try {
        const updatedProduct = {
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        }
        await Product.edit(id, updatedProduct);
    
        res.json({
            message: 'Product Updated',
            product: updatedProduct
        })
    } catch(err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
    
}

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.fetch();
        res.json(products)
    } catch (err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    } 
}

exports.getProduct = async (req, res, next) => {

    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.json(product)
    } catch (err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
}

exports.removeProduct = async (req, res, next) => {
    const id = req.params.id;

    try {
        await Product.remove(id);
        res.json({
            message: 'Product removed'
        })
    } catch (err) {
        res.status(500).json({
            message: 'Error',
            error: err
        })
    }
}
