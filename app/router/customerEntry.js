module.exports = app => {
    const { router, controller } = app;
    app.get('/home2.htm', controller.page.home.index);
 };
 