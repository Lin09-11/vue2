// 1. 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery'


// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 导入语法进行导入和使用）
// 如果某个模块中，使用 from 接收到的成员为 undefined，则没必要进行接收
//因为index1.js文件是模块导入的入口文件,并且bundle.js是由本文件(index1.js)产生的
//所以在这个文件导入样式
// import'./css/index.css';
//跟下面等价
import'@/css/index.css';

// import'./css/index.less';
//跟下面等价
import'@/css/index.less';


// 导入 src/js/test/info.js
import '@/js/test/info.js'

// 1. 导入图片，得到图片文件
import logo from './images/logo.jpg'
console.log(logo)
// 2. 给 img 标签的 src 动态赋值
$('.box').attr('src', logo)



// 2. 定义 jQuery 的入口函数
$(function () {
    // 3. 实现奇偶行变色
    // 奇数行为红色
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'black')
    // 0 是偶数
    // 1 是奇数
  })




  // 定义装饰器函数
function info(target) {
  //挂载一个自定义属性
  target.info = 'Person info.'
}

// 定义一个普通的类
@info
class Person {}

console.log(Person.info)