module.exports = app => {
    const { router, controller } = app;
    router.get('/blog.htm', controller.page.blog.index);
    router.get('/blogList.json', controller.api.blog.getBlogList);
    router.get('/blogContent.json', controller.api.blog.blogContent);
 };
