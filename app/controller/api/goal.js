const Controller = require('egg').Controller;
const moment = require('moment');
class GoalController extends Controller {
    async playerRegister() {
        const {ctx} = this;
        const name = ctx.request.body.name;
        const obj = {
            name: name,
            assist: 0,
            goal: 0,
            create_date: moment().format('YYYY-MM-DD HH:mm:ss'),
            update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        const res = await ctx.service.goalService.playerRegister(obj);
        
        ctx.body = {
            code: typeof res !== 'string' ? 0 : 500,
            data: res
        }
    }
    async playerRemove() {
        const {ctx} = this;
        const name = ctx.request.body.name;
        const obj = {
            name
        };
        const res = await ctx.service.goalService.playerRemove(obj);
        ctx.body = {
            code: 0,
            data: res
        }
    }
    async playerList() {
        const {ctx} = this;
        const res = await ctx.service.goalService.playerList();
        ctx.body = {
            code: 0,
            data: res
        }
    }

    async updatePlayer() {
        const {ctx} = this;
        const {name, goal, assist} = ctx.request.body;
        const update_date = moment().format('YYYY-MM-DD HH:mm:ss');
        const res = await ctx.service.goalService.updatePlayer({name, goal, assist, update_date});
        ctx.body = {
            code: 0,
            data: res
        }
    }
}

module.exports = GoalController;
