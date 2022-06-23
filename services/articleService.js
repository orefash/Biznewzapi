const { getMultiple, getArticleById } = require("../database/articles") 

const getMultipleArticles = async () => {
    try {
        const articles = await getMultiple();
        return articles;
    } catch (error) {
        console.log("error: ",error)
        throw error;
    }
};


const getOneArticle = async (id) => {
    try {
        const article = await getArticleById(id);
        return article;
    } catch (error) {
        console.log("error: ",error)
        throw error;
    }
};


module.exports = {
    getMultipleArticles,
    getOneArticle
}