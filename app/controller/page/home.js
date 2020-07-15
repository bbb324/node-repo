const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
       
        await ctx.render('page/home.html')
    }
    async admin() {
        const { ctx } = this;
        const list = [
            {name: 'wang', value: 'wang'},
            {name: 'li', value: 'li'},
            {name: 'bbc', value: 'abc'},
        ]
        await ctx.render('page/admin.html', {
            list,
            title: 'admin-title'
        })
    }
}

module.exports = HomeController;
