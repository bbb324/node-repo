const Subscription = require('egg').Subscription;
const request = require('request');
class CrawlerSchedule extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            cron: '0 8/0 0 * * ? *', // 每天早 上8:00 点执行一次
            type: 'all', // 指定所有的 worker 都需要执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        const { ctx } = this;
        ctx.logger.info('--定时抓取开始--');
        await ctx.service.crawlerService.crawlerLianjia();
        ctx.logger.info('--定时抓取结束--');
    }
}

module.exports = CrawlerSchedule;