// config/config.default.js
exports.keys = '123456.bbb324'; //一个随机字符串，用于 cookie 的加解密，上线后就不要改了。
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

