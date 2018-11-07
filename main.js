var result=`/*
*面试官您好，我是黄琳杰
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border:1px solid red;
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

/*加个3D效果*/
#code{
    transform: rotate(360deg);
}

/*不玩了，我来介绍一下我自己吧*/
/*我需要一张白纸*/`

var n=0
var id=setInterval(()=>{
    n+=1
    code.innerHTML=result.substring(0,n)
    code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript')
    styleTag.innerHTML=result.substring(0,n)
    if(n>=result.length){
        window.clearInterval(id)
        fn2()
        fn3(result)
    }
},10)

function fn2(){
    var paper=document.createElement('div')
    paper.id='paper'
    document.body.appendChild(paper)
}

function fn3(preResult){
    var result=`
#paper{
  width:100px;height:100px;
  background:red;  
}    
    `
    var n=0
    var id=setInterval(()=>{
        n+=1
        code.innerHTML=preResult+result.substring(0,n)
        code.innerHTML=Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript')
        styleTag.innerHTML=preResult+result.substring(0,n)
        if(n>=result.length){
            window.clearInterval(id)
        }
    },10)
}