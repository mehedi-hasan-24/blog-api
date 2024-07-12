const express = require("express");
const applyMiddleware = require("./middleware");
const app = express();


applyMiddleware(app);


app.get('/health', (req, res) => {
    res.send({
        "message": "OK",
        "code": 200
      })
});
app.use("*", (_req, _res, next)=>{
    const err = new Error("Requested Resource not found");
    err.code = 404;
    err.error = "Not Found";
    next(err);
});
app.use((err, req, res, next) => {
	// format error
	res.status(err.status || 500).json({
		message: err.message||"Something went wrong",
		errors: err.errors || [],
        code: err.code || 500,
	});
});
module.exports = app;