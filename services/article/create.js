const {Article} = require('../../model/index');
const create = ({
    title, 
    body = '', 
    cover = '',
    status = 'draft', 
    authorId
})=>{
    if(!title || !body){
        const error = new Error('title && body are required');
		error.status = 400;
		throw error;
    }
    const article = new Article({
        title,
        body,
        authorId,
        cover,
        status
    });
    return article.save();
}

module.exports = create;