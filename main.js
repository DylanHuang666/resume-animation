var result=`/*
*面试官您好！
*我叫黄琳杰，2019年本科应届毕业生
*来贵公司应聘前端开发工程师的岗位
*不妨耽误您一点时间来看看我的简历
*这是我动画版的网页简历，首先准备一些样式
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
/*请看右边我的自我介绍吧*/`

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
## 自我介绍

 我叫黄琳杰
 1996年2月出生
 自学前端半年
 希望应聘前端开发岗位

## 技能掌握

 熟悉JavaScript Css

## 项目

  1.苹果风格的轮播
  2.网页简历
  3.画板
  4.自定义导航

## 联系方式

- 手机：158xxxx9031
- Email：huanglinjay123@outlook.com
- QQ：948788858
`
var result3=`/*谢谢您的观看*/`

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