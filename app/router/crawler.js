module.exports = app => {
    const { router, controller } = app;
    router.get('/crawlPrice.json', controller.api.crawler.crawlPrice);
};
