const Controller = require('egg').Controller;
const execSync = require("child_process").execSync;

class RepoController extends Controller {
    // 更新仓库脚本，用于github webhook
    async updateBrowserRepo() {
        const {ctx} = this;
        const { repoLocation, repoName, branch = 'master' } = ctx.request.body;
        try {
            execSync(`cd ${repoLocation}/${repoName}`);
            execSync(`git pull origin ${branch}`);
            execSync(`rm -rf node_modules/ && npm i`);
            execSync('npm run build');
            ctx.body = {
                code: 0,
                data: 'done'
            }
        } catch(e) {
            ctx.body = {
                code: 0,
                data: e
            }
        }
        
        

    }  
}

module.exports = RepoController;
