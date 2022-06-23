var express = require('express');
const { getMultipleArticles, getOneArticle } = require('../../controllers/Articles/articleController');
var router = express.Router();

/* GET home page. */
router.get('/', getMultipleArticles);

router.get("/:articleId", getOneArticle);

module.exports = router;
