const router = require("express").Router();
const testRoutes = require("./test/test.js");

router.use("/test", testRoutes);

module.exports = router;