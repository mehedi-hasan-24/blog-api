const router = require("express").Router();

/**
 * @swagger
 * /tests:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", (req, res)=>{
    // #swagger.tags = ['Tests']
    res.send("Test route get");
});

router.post("/", (req, res)=>{
    res.send("Test route post");
});

module.exports = router;