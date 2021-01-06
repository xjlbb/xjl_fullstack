// let request = require('request-promise');
const fetch = require('node-fetch'); // 内置库  require 引入一个库
let cheerio = require('cheerio');

let url = 'http://movie.douban.com/top250';

const main = async () => {// async  关键字
    // let html = await request({ // 等着去爬取一下
    //     url
    // });
    // console.log(html);
    fetch(url)
        .then(url)
        .then(res => res.text())
        // .then(body => console.log(body));
        .then(body => {
            let $ = cheerio.load(body);
            let movieNodes = $('#content .item');
            console.log(movieNodes)
            
        });
}

main();
