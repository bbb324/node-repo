module.exports = app => {
    const { router, controller } = app;
    router.post('/updateBrowserRepo.json', controller.api.processControl.updateBrowserRepo);   
};
