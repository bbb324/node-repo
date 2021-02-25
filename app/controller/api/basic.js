const Controller = require('egg').Controller;
class basicController extends Controller {
    /* 创建表结构示例
    async createTableSample() {
        const { ctx } = this;
        const name = ctx.request.query.name;
        const str = 'id int NOT NULL AUTO_INCREMENT, '+
        'name varchar(255) NOT NULL, '+
        'goal int, ' +
        'assist int, ' +
        'PRIMARY KEY (id)';
        const res = await ctx.service.basicService.createTable(name, str);
        ctx.body = {
            code: 0,
            data: res    
        }
    } */

    // 创建链家表
    async createTable() {
        const { ctx } = this;
        const name = ctx.request.query.name;

        const str = 'id int NOT NULL AUTO_INCREMENT, '+
        'create_time datetime DEFAULT NULL, '+
        'total int, ' +
        'area varchar(255), ' +
        'PRIMARY KEY (id)';
        const res = await ctx.service.basicService.createTable(name, str);
        ctx.body = {
            code: 0,
            data: res    
        };
    }

    async dropTable() {
        const { ctx } = this;
        const name = ctx.request.query.name;
        const res = await ctx.service.basicService.dropTable(name);
        ctx.body = {
            code: 0,
            data: res    
        };
    }
}

module.exports = basicController;
