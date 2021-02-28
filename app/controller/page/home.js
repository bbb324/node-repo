const Controller = require('egg').Controller;

class HomeController extends Controller {
    /* async index() {
        const { ctx } = this;
        let version = '';
        try {
            const res = await ctx.curl('https://api.github.com/repos/bbb324/bbb324.github.io/releases/latest',  { dataType: 'json' });
            version = res.data.tag_name;
        } catch(e) {
            version = await ctx.service.articleService.fetch_latest_js_version();
        }
        await ctx.render('page/home.html', { version });
    } */

  

    async admin() {
        const { ctx } = this;
        const list = [
            { name: 'wang', value: 'wang' },
            { name: 'li', value: 'li' },
            { name: 'bbc', value: 'abc' },
        ];
        await ctx.render('page/admin.html', {
            list,
            title: 'admin-title'
        });
    }
}

module.exports = HomeController;
