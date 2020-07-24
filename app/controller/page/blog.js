const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('page/blog.html')
    }

}

module.exports = HomeController;
