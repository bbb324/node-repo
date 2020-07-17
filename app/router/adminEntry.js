module.exports = app => {
    const { router, controller } = app;
    router.get('/admin.htm', controller.page.home.admin);
 };
