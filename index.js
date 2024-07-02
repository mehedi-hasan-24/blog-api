const express = require('express')
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 8000
const allRoutes = require("./routes/index.js");
const appRouter = express.Router();

const swaggerFile = require('./static/swagger_output.json');
appRouter.use(allRoutes);
app.use(appRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get('/', (req, res) => {
res.send('Hello World!')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })


