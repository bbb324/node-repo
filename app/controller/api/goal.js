const Controller = require('egg').Controller;
class GoalController extends Controller {
    async playerRegister() {
        const {ctx, app} = this;
        const name = ctx.request.body.name;
        const res = await ctx.service.goalService.playerRegister(name);
        ctx.body = {
            code: 0,
            data: res
        }
    }

    // 创建表结构
    async createTable() {
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
    }

}

module.exports = GoalController;
