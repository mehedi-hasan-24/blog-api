const appRouter = require("express").Router();
const swaggerUi = require('swagger-ui-express');
const allRoutes = require("./../routes");
const swaggerFile = require('./../static/swagger_output.json');

const applyMiddleware = (app)=>{
    appRouter.use(allRoutes);
    app.use(appRouter);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
}
module.exports = applyMiddleware;