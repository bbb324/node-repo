const Service = require('egg').Service;

class GoalService extends Service {
    constructor() {
        super(...arguments);
        this.db = 'yangshengtang';
    }
  async playerRegister(obj) {
      const {app} = this;
      const res = await app.mysql.query(`select * from ${this.db} where name='${obj.name}';`)
      if(res.length === 0) {
        return await app.mysql.insert(this.db, obj);
      } else {
          return '已存在';
      }
  }
  async playerRemove(obj) {
      const {app} = this;
      return await app.mysql.delete(this.db, obj)
  }
  async playerList() {
      const {app} = this;
      return await app.mysql.select(this.db);
  }
}

module.exports = GoalService;