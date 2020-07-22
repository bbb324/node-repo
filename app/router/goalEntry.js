module.exports = app => {
    const { router, controller } = app;
    router.get('/yst.htm', controller.page.goal.index);
    router.get('/createTable.json', controller.api.goal.createTable);
    //router.post('/registerPlayer.json', controller.api.goal.registerPlayer);
 };
