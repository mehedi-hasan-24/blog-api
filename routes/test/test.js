const router = require("express").Router();


router.get("/", (req, res)=>{
    // #swagger.tags = ['Tests']
    res.send("Test route get");
});

router.post("/", (req, res)=>{
    // #swagger.tags = ['Tests']
    res.send("Test route post");
});

module.exports = router;