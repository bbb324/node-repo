const Controller = require('egg').Controller;
const execSync = require("child_process").execSync;

class RepoController extends Controller {
    // 更新仓库脚本，用于github webhook
    async updateRepo() {
        /* const {ctx} = this;
        const { repoLocation, repoName, branch = 'master' } = ctx.request.body;
        
        const res = await runScript(`git -C ${repoLocation}/${repoName} pull origin ${branch}`);
        
        ctx.body = {
            code: 0,
            data: res
        } */


        const {ctx} = this;
        const { repoLocation, repoName, branch = 'master' } = ctx.request.body;
        let message = '';
        /* exec(`cd ${repoLocation}/${repoName} && git pull origin ${branch}`, (error, stdout, stderr) => {        
            if (error) {
                message = error.message;
            }
            if (stderr) {
                message = stderr;
            }
        }); */
        
        try {
            execSync(`cd ${repoLocation}/${repoName} && git pull origin ${branch}`);
        } catch(e) {
            message = e;
        }
        
        ctx.body = {
            code: 0,
            data: message
        }

    }  
}

module.exports = RepoController;
