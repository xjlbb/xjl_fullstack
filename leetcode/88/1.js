// function merge() { 
// }
// JS 变量的类型是由值决定的, 弱类型
// m + n <= nums.length
const merge = (nums1, m, nums2, n) => { //箭头函数 es6
    //把nums2 合并到nums1中
    [1,2,3,0,0,0]
    // 重新排序
    // 多定义一个变量
    let current2 = 0; //定义一个指针
    for (let i = nums1.length - 1; i >= nums1.length - n; i--){
        nums1[i] = nums2[current2++];  //好理解 nums2 有个可遍历 
    }
    console.log(nums1);
}

merge([1,2,3,0,0,0], 3, [2, 5, 6], 3)