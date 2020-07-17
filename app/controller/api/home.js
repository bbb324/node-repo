const Controller = require('egg').Controller;
class HomeController extends Controller {
    async queryArticleList() {
        const {ctx, app} = this;
        const res = await ctx.service.articleService.queryArticle();
        ctx.body = {
            code: 0,
            data: res
        }
    }

    async addArticle() {
        const {ctx, app} = this;
        const data = ctx.request.body;
       
        const res = await ctx.service.articleService.insertArticle('article_test', {content: 'new article 3'});
        console.log(res);
        ctx.body = {
            code: 0,
            data: res.protocol41
        }
    }   
}

module.exports = HomeController;
