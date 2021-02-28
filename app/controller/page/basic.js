const Controller = require('egg').Controller;

class HomeController extends Controller {

    async index() {
        const { ctx } = this;
        await ctx.render('page/index.html');
    }

    
    async notFound() {
        const { ctx } = this;        
        await ctx.render('page/404.html');
    }
        
}

module.exports = HomeController;
