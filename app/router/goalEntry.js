module.exports = app => {
    const { router, controller } = app;
    router.post('/passport/login', app.passport.authenticate('local', { 
        successRedirect: '/yst.htm',
        failureRedirect: '/404.htm'
    }));


    router.get('/login.htm', controller.page.goal.login);

    router.get('/yst.htm', controller.page.goal.index);
    
    router.get('/404.htm', controller.page.basic.notFound);

    // 球员列表
    router.get('/playerList.json', controller.api.goal.playerList);
    // 注册球员
    router.post('/playerRegister.json', controller.api.goal.playerRegister);

    // 移除球员
    router.post('/playerRemove.json', controller.api.goal.playerRemove);

    // 更新球员数据
    router.post('/updatePlayer.json', controller.api.goal.updatePlayer);
 };
