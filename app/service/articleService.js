const Service = require('egg').Service;

class ArticleService extends Service {
  async queryArticle() {
    const {app} = this;
    return await app.mysql.query('select * from article_list');
  }
  async insertArticle(table, obj) {
      const {app} = this;
      return await app.mysql.insert(table, {
          content: obj.content
      })
  }

  async fetch_latest_js_version() {
    const res = await this.app.mysql.query('select version from js_version order by id desc limit 1')
    let version = '0.0.1';
    try {
      return res[0].version;
    } catch(e) {
      return version;
    }
  }
  async update_js_version() {
    //await this.app.mysql.query('insert into js_version (version) values ()')
  }
}

module.exports = ArticleService;