const Controller = require('egg').Controller;
const tesseract = require("node-tesseract-ocr")
const path = require('path');
// 图像识别接口
class HomeController extends Controller {
    async recognize() {
        const { ctx } = this;
        const config = {
            lang: "eng",
            oem: 1,
            psm: 3,
        };
        
        const location = path.format({
            root: '/Users/junxie/Documents',
            dir: '/Users/junxie/Documents/test',
            base: 'kk.jpg'
          });
        const res = await tesseract.recognize(location, config);
        ctx.body = {
            code: 0,
            data: res
        }
    }
}

module.exports = HomeController;
