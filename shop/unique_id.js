/**
 * 获得唯一ID
 * @author xjl
 * @date 12-26
 * @return {string}
 */
const uniqueID = () => + new Date() + '' + Math.ceil(Math.random()*10000)
    // +的作用 类型转换
    // let ranNum = Math.ceil(Math.random()*10000)
    // return t + "" + ranNum;// +的作用 类型转换 字符串先运行

console.log(uniqueID());