const Controller = require('egg').Controller;

const path = require('path');


const fs = require('fs');
const util = require('util');

class HomeController extends Controller {
    constructor() {
        super(...arguments);
        this.folderPath = process.env.NODE_ENV === 'development' ? '/Users/junxie/Documents/test/blog' : '/usr/local/src/node/blog';
    }
    async getBlogList() {
        const { ctx } = this;
        const readdir = util.promisify(fs.readdir);      
        
        const list = [];
        let files;
        try {
            files = await readdir(this.folderPath);
            for(const file of files) {
                if(/.*.md/g.test(file)) {
                    list.push(file);
                }
            }
            ctx.body = {
                code: 0,
                data: list
            };
        } catch (err) {
            ctx.body = {
                code: 0,
                data: list
            };
        }    
    }

    async blogContent() {
        const { ctx } = this;
        const fileName = ctx.request.query.fileName;
        const readFile = util.promisify(fs.readFile);
        const res = await readFile(`${this.folderPath}/${fileName}`, 'utf8');
        ctx.body = {
            code: 0,
            data: res
        };
    }

}

module.exports = HomeController;
