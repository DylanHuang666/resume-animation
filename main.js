var result=`/*
*面试官您好！
*我叫黄琳杰，2019届本科应届毕业生
*来贵公司应聘前端开发工程师的岗位
*不妨耽误您一点时间来看看我的简历
*这是我动画版的简历，首先准备一些样式
*/

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border:2px solid #888;
  padding:16px;
}

/*我需要一点代码高亮*/
.token.property{
  color: #905;
}
.token.selector{
  color: #690;
}
.token.function{
  color: #DD4A68;
}

/*现在准备在右边简单自我介绍一下*/
/*先布局一下，在右边创建一张白纸*/
#box{
  position:fixed;
  left:0;
  width: 50%;
  height: 100vh;
  padding: 16px; 
}
#code{
  width:100%;
  height:100%;
}
#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  padding:16px;
}
#paper .content{
  background: white;
  width:100%;
  height:100%;
}
/*请看右边我的简历吧*/`

// var n=0
// var id=setInterval(()=>{
//     n+=1
//     code.innerHTML=result.substring(0,n)
//     code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript')
//     styleTag.innerHTML=result.substring(0,n)
//     if(n>=result.length){
//         window.clearInterval(id)
//         fn2()
//         fn3(result)
//     }
// },10)

var result2=`
`
var md=`
### 自我介绍

  - 我叫黄琳杰，2019届本科毕业生
  - 求职意向：前端开发工程师
  - 学校：广东科技学院
  - 专业：电子信息工程
  - 英语：CET-4
  - 年龄：23
  - 兴趣爱好：篮球、足球、乒乓球
  - 籍贯：广东
  - GitHub主页：<a href="https://github.com/DylanHuang666" target="_blank">点击进入</a>

### 技能掌握

   - 熟练 HTML、DIV + CSS 的页面布局，能根据设计图像素级完成页面制作。
   - 熟悉 HTML5 及语义化，了解 Canvas 动画制作，掌握 CSS3 动画、过渡效果等
     常用技术。
   - 熟悉原生 JavaScript，会使用 ES6 常用规范，了解 jQuery 常用 API 及思
     想，如 jQuery 常用的 DOM 操作，事件，AJAX等。
   - 熟悉 Vue 常用功能，理解如生命周期、组件、指令、技术属性、虚拟 DOM、数
     据响应式等概念。熟练 vue-router 路由配置，Vuex 状态管理，Axios 发请求，能
     够使用 Vue 全家桶开发项目。
   - 熟悉模块化、工程化开发流程，能够配置 Webpack。
   - 有移动端开发经验，会使用 REM、vw/vh、响应式等技术制作适配手机设备的页面。
   - 了解 HTTP 相关知识，了解常见的 Web 性能优化方案。
   - 简单了解 Node.js，能够开发简单的后台服务器。
   - 熟练使用 VsCode、Git 等开发工具。

### 项目经验

  1. 仿网易云音乐（移动端）     <a href="https://dylanhuang666.github.io/NetEaseMusic/" target="_blank">点击预览</a>    <a href="https://https://github.com/DylanHuang666/NetEaseMusic" target="_blank">查看源码</a>
  2. Vue重构CNode官网社区      <a href="https://dylanhuang666.github.io/vuecnode/dist" target="_blank">点击预览</a>    <a href="https://github.com/DylanHuang666/vuecnode" target="_blank">查看源码</a>
  3. 简易版在线涂画小工具       <a href="https://dylanhuang666.github.io/canvas-demo/" target="_blank">点击预览</a>    <a href="https://github.com/DylanHuang666/canvas-demo" target="_blank">查看源码</a>
  4. 皮卡丘动画                <a href="https://dylanhuang666.github.io/demo-pikachu/index.html" target="_blank">点击预览</a>    <a href="https://github.com/DylanHuang666/demo-pikachu" target="_blank">查看源码</a>
  5. 自定义导航网站的键盘       <a href="https://dylanhuang666.github.io/nav-demo2/" target="_blank">点击预览</a>    <a href="https://github.com/DylanHuang666/nav-demo2" target="_blank">查看源码</a>
  6. 会动的简历                <a href="https://dylanhuang666.github.io/resume-animation/index.html" target="_blank">点击预览</a>    <a href="https://github.com/DylanHuang666/resume-animation" target="_blank">查看源码</a>

### 自我评价

  - 自己从开始接触前端到现在自学了也快一年了，虽然过程遇到了种种难处，但发现
    自己还是热爱技术，热爱 coding，享受调试代码及解决 bug 的过程，还有享受
    通过各种代码组合实现自己成果的过程。也逐渐形成了良好的代码规范，并热衷
    分享，崇尚开源文化；
  - 时常关注前端技术发展，善于分析和吸取经验；
  - 有独到的见解，不畏惧困难；
  - 善于沟通，容易相处，团队荣誉感强。

### 联系方式

- 手机：15814359031
- Email：948788858@qq.com
- 微信：Jayhlj
- QQ：948788858
`
var result3=`/*好了，简历写完了，谢谢您的观看*/`

writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md,()=>{
                markdownToHtml(md,()=>{
                    writeCode(result+result2,result3,()=>{
                        code.style.overflow='auto'
                    })                 
                })
            })
        })
    })
})
var a=true
setInterval(function(){
    a=!a
    if(a){
        $('#code').removeClass('border1').addClass('border2')   
    }else{
        $('#code').removeClass('border2').addClass('border1')   
    }
},500)

function createPaper(fn){
    var paper=document.createElement('div')
    paper.id='paper'
    document.body.appendChild(paper)
    var content=document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    fn.call()
}

// function fn3(preResult){
//     var n=0
//     var id=setInterval(()=>{
//         n+=1
//         code.innerHTML=Prism.highlight(preResult+result.substring(0,n), Prism.languages.css, 'javascript')
//         styleTag.innerHTML=preResult+result.substring(0,n)
//         if(n>=result.length){
//             window.clearInterval(id)
//         }
//     },10)
// }

function writeCode(prefix,code,fn){
    let n=0
    let domCode=document.querySelector('#code')
    domCode.innerHTML=prefix || ''
    let id=setInterval(()=>{
        n+=1
        domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n), Prism.languages.css, 'javascript')
        styleTag.innerHTML=prefix+code.substring(0,n)
        domCode.scrollTop=domCode.scrollHeight
        if(n>=code.length){
            window.clearInterval(id)
            fn.call()
        }
    },40)
}

function writeMarkdown(markdown,fn){
    let domPaper=document.querySelector('#paper>.content')
    let n=0
    let id=setInterval(()=>{
        n+=1
        domPaper.innerHTML=markdown.substring(0,n)
        domPaper.scrollTop=domPaper.scrollHeight
        if(n>=markdown.length){
            window.clearInterval(id)
            fn.call()
        }
    },40)
}

function markdownToHtml(markdown,fn){
    let content=marked(markdown)
    let domPaper=document.querySelector('#paper>.content')
    domPaper.innerHTML=content
    console.log(domPaper.innerHTML)
    fn.call()
}