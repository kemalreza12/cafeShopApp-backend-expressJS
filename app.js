require('dotenv').config()

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
// const routes = require('./src/routes/index')
const productsRoutes = require('./src/routes/products')
const categoriesRoutes = require('./src/routes/categories')
const historiesRoutes = require('./src/routes/histories')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/products', productsRoutes);
app.use('/categories', categoriesRoutes);
app.use('/histories', historiesRoutes);

// app.use('/api/v1/', routes)
const PORT = process.env.PORT;
app.listen(PORT, ()=>{console.log(`server is running ${PORT}`)})