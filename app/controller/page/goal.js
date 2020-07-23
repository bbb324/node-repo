const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let version = '';
        const isReadonly = ctx.request.query.isReadonly;
        if(ctx.isAuthenticated() || isReadonly == 1) {
            try {
                const res = await await ctx.curl('https://api.github.com/repos/bbb324/goalTable/releases/latest',  { dataType: 'json' })
                version = res.data.tag_name;
            } catch(e) {
                version = '0.0.5';
            }
            await ctx.render('page/yst.html', {version, isReadOnly: isReadonly})
        } else {
            await ctx.redirect('/login.htm');
        }
    }

    async login() {
        const {ctx} = this;
        let version = '';
        try {
            const res = await await ctx.curl('https://api.github.com/repos/bbb324/goalTable/releases/latest',  { dataType: 'json' })
            version = res.data.tag_name;
        } catch(e) {
            version = '0.0.5';
        }
        await ctx.render('page/login.html', {version})
    }
        
}

module.exports = HomeController;
