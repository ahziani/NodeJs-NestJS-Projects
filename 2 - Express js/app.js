const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/post-product" method="POST">'+
        'Title : <input type="text" name="title"/>'+
        '<button>Add</button>'+
    '</form>')
})

app.post('/post-product', (req, res, next) => {
    const product = req.body.title;
    console.log('product', product)
    fs.writeFileSync('file.txt', product);
    res.redirect('/')
});

app.use('/', (req, res, next)=> {
    res.send('<h1>Product List</h1>')
})

app.listen(3000);