const express = require("express");
const app = express();
const dbconfig = require('./db');
const productRoutes = require('./routes/product');

app.use(express.json());

app.use('/api', productRoutes);

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Node Server Started using nodemon`));
