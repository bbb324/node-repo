module.exports = app => {
    const { router, controller } = app;
    router.get('/yst.htm', controller.page.goal.index);
    
    // 球员列表
    router.get('/playerList.json', controller.api.goal.playerList);
    // 注册球员
    router.post('/playerRegister.json', controller.api.goal.playerRegister);

    // 移除球员
    router.post('/playerRemove.json', controller.api.goal.playerRemove);

    // 更新球员数据
    router.post('/updatePlayer.json', controller.api.goal.updatePlayer);
 };
