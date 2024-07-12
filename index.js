require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const allRoutes = require("./routes/index.js");
const appRouter = express.Router();

const swaggerFile = require('./static/swagger_output.json');
appRouter.use(allRoutes);
app.use(appRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get('/', (req, res) => {
res.send('Hello World!')
});
const DB_NAME = process.env.DB_NAME;

const getDbUrlString = ()=>{
    let DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;
    DB_CONNECTION_URL = DB_CONNECTION_URL.replace('<username>', process.env.DB_USERNAME);
    DB_CONNECTION_URL = DB_CONNECTION_URL.replace('<password>', process.env.DB_PASSWORD);
    return DB_CONNECTION_URL;
}
mongoose.connect(getDbUrlString(), { dbName: process.env.DB_NAME }).then(    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
);