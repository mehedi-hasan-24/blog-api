const appRouter = require("express").Router();
const swaggerUi = require('swagger-ui-express');
const allRoutes = require("./../routes");
const swaggerFile = require('./../static/swagger_output.json');
const express = require('express');

const applyMiddleware = (app)=>{
    app.use(express.json());
    appRouter.use(allRoutes);
    app.use(appRouter);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
}
module.exports = applyMiddleware;