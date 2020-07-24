module.exports = app => {
    const { router, controller } = app;
    router.get('/blog.htm', controller.page.blog.index);
 };
