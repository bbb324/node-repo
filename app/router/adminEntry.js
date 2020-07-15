module.exports = app => {
    const { router, controller } = app;
    router.get('/home.htm', controller.page.home.index);
    router.get('/admin.htm', controller.page.home.admin);
 };
 