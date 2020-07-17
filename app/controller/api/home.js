const Controller = require('egg').Controller;

class HomeController extends Controller {
    async queryArticleList() {
        const {ctx} = this;
        
        ctx.body = {
            code: 0,
            data: ['url1', 'url2', 'url3']
        }
    }

    async addArticle() {
        const {ctx} = this;
        const data = ctx.request.body;
        ctx.body = {
            code: 0,
            data: 'success'
        }
    }

    
}

module.exports = HomeController;
