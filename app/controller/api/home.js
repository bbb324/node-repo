const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = {
            code: 0,
            data: 'first message'
        }
    }
}

module.exports = HomeController;
