module.exports = app => {
    require('./router/adminEntry')(app);
    require('./router/customerEntry')(app);
};
