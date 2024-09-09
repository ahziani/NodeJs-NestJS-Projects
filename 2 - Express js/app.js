const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(express.urlencoded({extended: true}));

app.use(adminRoutes)
app.use(userRoutes)
app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(3000);