module.exports = app => {
    const { router, controller } = app;
    
    router.get('/createTable.json', controller.api.basic.createTable);
    router.get('/dropTable.json', controller.api.basic.dropTable);
    
 };
