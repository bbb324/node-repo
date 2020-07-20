const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;

        const res = await await ctx.curl('https://api.github.com/repos/bbb324/bbb324.github.io/releases/latest',  { dataType: 'json' })
        const version = res.status === 200 ? res.data.tag_name : '0.0.1';
        await ctx.render('page/home.html', {version})
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
