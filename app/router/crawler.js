module.exports = app => {
    const { router, controller } = app;
    router.get('/fetchPriceList.json', controller.api.crawler.fetchPriceList);
};
