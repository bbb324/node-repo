module.exports = app => {
    const { router, controller } = app;
    router.post('/updateRepo.json', controller.api.processControl.updateRepo);
   
};
