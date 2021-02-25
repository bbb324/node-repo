const Service = require('egg').Service;
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const moment = require('moment');
class CrawlerService extends Service {
    constructor() {
        super(...arguments);
        this.db = 'lianjia';
    }

    async crawlerLianjia() {
        const response = await fetch('https://sz.lianjia.com/ershoufang/');
        const html = await response.text();
        const $ = cheerio.load(html);
        const total = $('h2 span').text().trim();
        await this.saveTotalPrice(total);
        return html;
    }

    async saveTotalPrice(total, area = 'all') {
        const { app } = this;
        const current = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        const obj = {
            create_time: current,
            total,
            area 
        };
        const res = await app.mysql.query(`select * from ${this.db} where create_time='${current}';`);
   
        if(res.length === 0) {
            return await app.mysql.insert(this.db, obj);
        } else {
            return '已存在';
        }
    }

    // 返回列表数据
    async fetchLianjiaList() {
        const { app } = this;
        const res = await app.mysql.query(`select * from ${this.db};`);
        return res;
    }
}


module.exports = CrawlerService;