const { query } = require('./db');
const { getOffset, emptyOrRows } = require('../dbhelper') ;
const { listPerPage } = require('../config') ;

const getMultiple = async (page = 1) => {
  // const offset = await getOffset(page, listPerPage);
  const rows = await query(
    "SELECT * FROM (SELECT DISTINCT ON (title) * FROM news_articles ORDER BY title, publish_date DESC ) p ORDER BY publish_date DESC LIMIT $1", 
    [listPerPage]
    // [offset, listPerPage]
  );
  const data = await emptyOrRows(rows);


  const meta = {page};

  return {
    data,
    meta
  }
}


const getArticleById = async (id) => {
  const rows = await query(
    'SELECT id, title, source, content, publish_date, img_url, url FROM news_articles WHERE id = $1LIMIT 1',
    [id]
  );
  const data = await emptyOrRows(rows);


  return {
    data
  }
}

module.exports = {
  getMultiple,
  getArticleById
}