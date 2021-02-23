const Controller = require('egg').Controller;
const moment = require('moment');
class GoalController extends Controller {
    
    async houseData() {
        const {ctx} = this;
       // const res = await ctx.service.goalService.updatePlayer({name, goal, assist, update_date});
        ctx.body = {
            code: 0,
            data: 123
        }
    }
}

module.exports = GoalController;
