const Service = require('egg').Service;

class BasicService extends Service {
    async createTable(name, sql) {
        const { app } = this;
        return await app.mysql.query(`CREATE TABLE ${name} (${sql});`);
    }

    async dropTable(name) {
        const { app } = this;

        return await app.mysql.query(`drop table ${name};`);
    }
}

module.exports = BasicService;