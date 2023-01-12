/*定时器实现关键词切换*/

//1.获取搜索框的输入表单对象
let input = document.querySelector(".search input");

//2.设置关键词数组
const Keywords = ['Vue3.0', 'React', '爬虫技术', 'Java', '多线程'];

//3.使用setinterval 每隔两秒切换一个关键词
let i = 0; //下标
input.placeholder = Keywords[i];
setInterval(() => {
    i++;
    if (i == 5) {
        i = 0;
    }
    input.placeholder = Keywords[i];
}, 2000);
