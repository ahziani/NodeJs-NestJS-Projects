const express = require('express');
const fs = require('fs');
const app = express();

const userRoutes = require('./routes/user');

app.use(express.urlencoded({extended: true}));
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/post-product" method="POST">'+
        'Title : <input type="text" name="title"/>'+
        '<button>Add</button>'+
    '</form>')
})

app.post('/post-product', (req, res, next) => {
    const product = req.body.title;
    fs.writeFileSync('file.txt', product);
    res.redirect('/')
});

app.use('/', userRoutes)

app.listen(3000);