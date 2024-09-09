const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(express.urlencoded({extended: true}));

app.use(adminRoutes)
app.use(userRoutes)

app.listen(3000);