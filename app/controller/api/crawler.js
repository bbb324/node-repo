const Controller = require('egg').Controller;
const moment = require('moment');
const superagent = require('superagent');
const $ = require('cheerio');
class GoalController extends Controller {
    
    async houseData() {
        const {ctx} = this;
        // const res = await ctx.service.goalService.updatePlayer({name, goal, assist, update_date});

        // superagent.get('https://sz.lianjia.com/ershoufang/').end((err, res) => {
        //     if (err) {
        //       // 如果访问失败或者出错，会这行这里
        //       console.log(`热点新闻抓取失败 - ${err}`)
        //     } else {
        //         console.log(res)
        //     }
        // });
        let pageRes = {};  
        let content = '';
        let imgs = [];
        superagent.get('https://sz.lianjia.com/ershoufang/').end((err, res) => {
        if (err) {
            // 如果访问失败或者出错，会这行这里
            console.log(`热点新闻抓取失败 - ${err}`)
        } else {
            let item = $(res.data)
            let item2 = $(res.text)
            
            $('#post_list .post_item').each((index,element) => {
                //分析所需要的数据的DOM结构
                //通过选择器定位到目标元素，再获取到数据
                let temp = {
                  '标题' : $(element).find('h4 a').text(),
                  '作者' : $(element).find('.post_item_foot > a').text(),
                  '阅读数' : +$(element).find('.article_view a').text().slice(3,-2),
                  '推荐数' : +$(element).find('.diggnum').text()
                }
                //拼接数据
                content += JSON.stringify(temp) + '\n';
                //同样的方式获取图片地址
                if($(element).find('img.pfs').length > 0){
                  imgs.push($(element).find('img.pfs').attr('src'));
                }
              });
            }
            
        });

       ctx.body = {
            code: 0,
            data: content
        }
    }
}

module.exports = GoalController;
