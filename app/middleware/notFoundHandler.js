module.exports = () => {
    return async function notFoundHandler(ctx, next) {
      await next();
      if(/\/$/.test(ctx.path)) {
        ctx.redirect(ctx.path.slice(0, ctx.path.length - 1))
      }
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