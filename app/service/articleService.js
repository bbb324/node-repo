const Service = require('egg').Service;

class ArticleService extends Service {
  async queryArticle() {
    const {app} = this;
    return await app.mysql.query('select * from article_test');
  }
  async insertArticle(table, obj) {
      const {app} = this;
      return await app.mysql.insert(table, {
          content: obj.content
      })
  }
}

module.exports = ArticleService;