module.exports = app => {
    require('./router/basicEntry')(app);
    require('./router/homeEntry')(app);
    require('./router/adminEntry')(app);
    require('./router/goalEntry')(app);
};
