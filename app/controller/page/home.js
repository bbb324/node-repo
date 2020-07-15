const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.render('page/home.html', {})
    }
}

module.exports = HomeController;
