// console.log('AI 来了， 帅！')
// require -> node 引入模块的关键字
// imageClassify 图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
// 内置模块 fileSystem
const fs = require('fs');
// 1. 读入文件 I/O   从硬盘读入内存中，
const APP_ID = "23486593";
const API_KEY = "6DpQ0vnpgduEhjR0aa8UGU74";
const SECRET_KEY = "Q2CsaAli03PMXeG3QjgsRpHfY5HQSDK6";

const client = new ApiImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
// const fs = require('fs');
const image = fs.readFileSync("1117453.png").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    // 抓取错误
    .catch(function(err){
        console.log(err)
    })