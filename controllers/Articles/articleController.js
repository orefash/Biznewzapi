const articleService = require("../../services/articleService")

const getMultipleArticles = async (req, res) => {

  try {
    const allArticles = await articleService.getMultipleArticles();
    res.send({ status: "OK", data: allArticles.data, meta:allArticles.meta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneArticle = async (req, res) => {

  const articleId = req.params.articleId;
  
  try {
    const article = await articleService.getOneArticle(articleId)
    res.send({ status: "OK", data: article.data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};



module.exports = {
  getMultipleArticles,
  getOneArticle
}