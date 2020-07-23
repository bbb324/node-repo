const Controller = require('egg').Controller;

class HomeController extends Controller {
    async notFound() {
        const { ctx } = this;        
        await ctx.render('page/404.html')
    }
        
}

module.exports = HomeController;
