// 基础页面放这里
module.exports = app => {
    const { router, controller } = app;
    router.get('/index.htm', controller.page.basic.index); // 首页
    router.get('/createTable.json', controller.api.basic.createTable);
    router.get('/dropTable.json', controller.api.basic.dropTable);
    
};
