const Controller = require('egg').Controller;
class GoalController extends Controller {
    async playerRegister() {
        const {ctx} = this;
        const name = ctx.request.body.name;
        const obj = {
            name: name,
            assist: 0,
            goal: 0
        }
        const res = await ctx.service.goalService.playerRegister(obj);
        ctx.body = {
            code: 0,
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
}

module.exports = GoalController;
