module.exports = app => {
    const { router, controller } = app;
    router.get('/home.htm', controller.page.home.index);
};
