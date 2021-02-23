module.exports = app => {
    const { router, controller } = app;
   
    router.get('/houseData.json', controller.api.crawler.houseData);
 };
