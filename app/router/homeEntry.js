module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.page.home.index);
    router.get('/queryArticleList.json', controller.api.home.queryArticleList);
    router.post('/addArticle.json', controller.api.home.addArticle);

};
