module.exports = app => {
    require('./router/basicEntry')(app); // 404，503页面存放
    require('./router/homeEntry')(app);
    require('./router/blogEntry')(app); // 博客
    require('./router/goalEntry')(app); // 养生堂
    require('./router/ocrEntry')(app); // 图像识别接口
};
