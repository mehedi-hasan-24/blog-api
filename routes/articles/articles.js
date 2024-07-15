const router = require("express").Router();
const {controllers: articleController} = require('./../../api/v1/articles/index');

router.post("/", articleController.create  
    /*
      #swagger.tags = ['Articles']
      #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/article"
                    }  
                }
            }
        } 
    */
);

module.exports = router;