const express = require("express");
const {articleService} = require('./../../../../services/index');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const create = async (req, res, next) =>{
    try {
        const { title, body, cover, status, authorId } = req.body;
    
        const article = await articleService.create({
            authorId,
            title,
            body,
            cover,
            status
        });

        res.status(201).json(article);
        
    } catch (error) {
        next(error);   
    }
    
}
module.exports = create;