const express = require('express');
const path = require('path')
const app = express();
const { get404 } = require('./controllers/error');
const { mongoConnect } = require('./util/database')

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoConnect();

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes)
app.use(userRoutes)
app.use(get404)

app.listen(3000);