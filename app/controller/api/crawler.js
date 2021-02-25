const Controller = require('egg').Controller;
const moment = require('moment');
const cheerio = require('cheerio');

class CrawlerController extends Controller {
    async crawlPrice() {
        const { ctx } = this;
        const html = await ctx.service.crawlerService.crawlerLianjia();
        const $ = cheerio.load(html);
        const total = $('h2 span').text().trim();
        ctx.body = {
            code: 0,
            data: total
        };
    }

    async fetchPriceList() {
        const { ctx } = this;
    }
}

module.exports = CrawlerController;
