const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
		default: 'draft',
    },
    authorId: {
        type: String,
        format: 'uuid'
    }
});

const Article = model('Article', articleSchema);

module.exports = Article;
