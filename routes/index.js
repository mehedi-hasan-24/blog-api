const router = require("express").Router();
const testRoutes = require("./test/test.js");
const articleRoutes = require('./articles/articles.js');

router.use("/test", testRoutes);
router.use("/api/v1/articles", articleRoutes
    /*
       
    */
);

module.exports = router;