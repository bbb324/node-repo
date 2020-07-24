const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let version = '';
        try {
            const res = await await ctx.curl('https://api.github.com/repos/bbb324/bbb324.github.io/releases/latest',  { dataType: 'json' })
            version = res.data.tag_name;
        } catch(e) {
            version = '0.0.3';
        }
        await ctx.render('page/blog.html', {version})
    }

}

module.exports = HomeController;
