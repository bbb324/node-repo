const Service = require('egg').Service;

class ArticleService extends Service {
  async createTable(name, sql) {
    const {app} = this;
    console.log(name);
    return await app.mysql.query(`CREATE TABLE ${name} (${sql});`);
  }

  async dropTable() {
    const {app} = this;
    const name = 'DemoT';
    return await app.mysql.query(`drop table ${name};`);
  }



  async registerPlayer(table, obj) {
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