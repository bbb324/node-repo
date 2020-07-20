module.exports = app => {
    require('./router/homeEntry')(app);
    require('./router/adminEntry')(app);
};
