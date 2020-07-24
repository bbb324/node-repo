const Subscription = require('egg').Subscription;
const request = require('request');
class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
        cron: '0 0 */3 * * *',
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    // 在离职后这个dingUrl可能会用不了，毕竟是个内部的
    const dingURL = 'https://oapi.dingtalk.com/robot/send?access_token=a0505077da4bfa1a7025033c803e048a68e82a3a7c0b1d54e176b6eab0e037b5';
    const triggerTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

    const json = {
      msgtype: 'text',
      text: {
        content: `qq from node-repo ${triggerTime}`,
      },
      /* at: { // 这里设置 @ 属性
        atMobiles: [
          '18148578741',
        ],
        isAtAll: false,
      }, */
    };
    const obj = {
      json: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,

    };
    request.post(dingURL, obj);
  }
}

module.exports = UpdateCache;