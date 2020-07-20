// config/config.default.js

module.exports = {
    keys: '123456.bbb324',
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    },
    alinode: {
        enable: true,
        package: 'egg-alinode',
        server: 'wss://agentserver.node.aliyun.com:8080',
        appid: 85603,
        secret: '1c53aa170f14d6e7409ec837ead8f2131032b9fe',
        logdir: '/tmp/',
        error_log: [
            '您的应用在业务层面产生的异常日志的路径，数组，可选，可配置多个',
            '例如：/root/.logs/error.#YYYY#-#MM#-#DD#.log',
            '不更改 Egg 默认日志输出路径可不配置本项目',
        ],
    },
    security: {
        xframe: {
            enable: false
        },
        csrf: {
            enable: true,
            domainWhiteList: [ 'updateBrowserRepo.json' ],
        }
    },

    mysql: {
        client: {
            host: '39.99.229.74',
            port: '3306',
            user: 'root',
            password: 'qpmdKE.qa7%cx',
            database: 'mysql', 
        }
    }
}
