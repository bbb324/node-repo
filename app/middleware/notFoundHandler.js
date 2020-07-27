module.exports = () => {
    return async function notFoundHandler(ctx, next) {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'Not Found' };
        } else {
            if(ctx.path.indexOf('/blog.htm') >= 0) {
                ctx.redirect('/blog.htm')
            }
          
        }
      }
    };
  };