module.exports = app => {
    const { router, controller } = app;
    router.get('/ocr.json', controller.api.ocr.recognize);

};
