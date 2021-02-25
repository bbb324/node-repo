const Controller = require('egg').Controller;
const moment = require('moment');
const cheerio = require('cheerio');

class CrawlerController extends Controller {
 
    async fetchPriceList() {
        const { ctx } = this;
        const res = await ctx.service.crawlerService.fetchLianjiaList();
        ctx.body = {
            code: 0,
            data: res
        };
    }
}

module.exports = CrawlerController;
