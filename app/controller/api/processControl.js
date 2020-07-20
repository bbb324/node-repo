const Controller = require('egg').Controller;
const runScript = require('runscript');

class RepoController extends Controller {
    // 更新仓库脚本，用于github webhook
    async updateRepo() {
        const {ctx} = this;
        const { repoLocation, repoName, branch = 'master' } = ctx.request.body;
        
        const res = await runScript(`git -C ${repoLocation}/${repoName} pull origin ${branch}`);
        
        ctx.body = {
            code: 0,
            data: res
        }
    }  
}

module.exports = RepoController;
