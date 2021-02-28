module.exports = app => {
    require('./router/basicEntry')(app); // 404，503页面存放
    require('./router/crawler')(app); // 爬虫
    require('./router/goalEntry')(app); // 养生堂
    require('./router/ocrEntry')(app); // 图像识别接口
};
