const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // 挂载 strategy


  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
    usernameField:'username', // 这里是在登录页面“账户” input 需要设置成的name
    passwordField:'password', // 这里是在登录页面“密码” input 需要设置成的name
  }, (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    app.passport.doVerify(req, user, done);

  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    // 这里的账号密码匹配，可以通过 sql 进行查询匹配，
    // 也可以通过 app.config.passportLocal 的配置信息进行匹配
    if(user.username === 'a' && user.password === 'a') {
      return user;
    }
    return false;
  });
  app.passport.serializeUser(async (ctx, user) => {
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    return user;
  });
};