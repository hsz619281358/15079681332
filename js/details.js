
//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var bg = document.getElementsByClassName('main')[0]
var dt
if(search){
    var id1 = search.split('=')[1];
    var str = '';
    (async function(){
        dt=await promiseAjax({
            url:'./php/details.php',
            data:'id='+id1,
            datatype:'json'
        })
        str+=`
        <div class="g-bd">
        <div class="focus">
                <!-- 面包屑 -->
                <a href="./index1.html" class="m-focus-index">首页</a><span class="m-icon iconfont">》</span><span class="m-focum-one">数码家电</span><span class="m-icon iconfont">》</span><span class="m-focum-one">${dt.gjz}</span><span class="m-icon iconfont">》</span><span class="m-focum-one">${dt.title}</span>
            </div>
            <div class="content clearfix">
                <div class="content-left">
                    <!-- 放大镜 -->
                    <div class="img">
                        <img src="${dt.Default_img}">
                    <div class="maker"></div>
                    <div class="big">
                        <img src="${dt.Default_bigimg}">
                    </div>
                    </div>
                    <div class="imgs">
                        <ul class="imgs-m">
                        ${dt.list_oneImg}
                        </ul>
                    </div>
                </div>

                <div class="content-right clearfix">
                    <div class="list-name">
                        <div class="detailTag"></div>
                        <div class="list-name-top">
                            <span>${dt.title}</span>
                            <a href="javascript:;">
                                <div class="hp">
                                    <span style="color: #e36844;font-size: 20px;">${dt.haoping}</span>
                                    <br />
                                    <span style="font-size: 13px;">好评率&gt;</span>
                                </div>
                            </a>
                        </div>
                        <div class="list-name-down">
                            ${dt.name}
                        </div>
                    </div>
                    <div class="hb clearfix">
                        <img src="http://yanxuan.nosdn.127.net/c48471a82f006a3c359f5380e5888d91.png" width="42px" height="40px" class="f">
                        <div class="hb-content">
                            <span class="new-proson">新人特价</span>
                            <span class="new-has">新人专享</span>
                            <span class="new-go">正在抢购中</span>
                        </div>
                        
                    </div>
                    
                    <div class="prices">
                        <div class="new-price">
                            <div class="one-price">
                                <div class="price-content">
                                    <span class="dsq">活动价</span>
                                    <span class="price-new">
                                        <span class="rmb">￥</span><span class="num">${dt.price}</span>
                                    </span>
                                    <span class="op">
                                        <span class="rmb2">￥</span><s class="old-num"><span>${parseInt(dt.price)-10}</span></s>
                                    </span>
                                </div>
                            </div>
    
                        </div>
    
                        <div class="vip clearfix">
                            <div class="vip-left f clearfix">
                                <span class="tt-my">
                                    天天免邮
                                </span>
                                <span class="leftText">Pro会员立享免邮，到手价<span class="spmcPrice">14.78</span></span>
                                <i class="icon-vip"></i>
                            </div>
                            <span class="rightText f">立即开通&gt;</span>
                        </div>
                        <div class="yx-cx clearfix">
                            <span class="yx-cx-text f">促销</span>
                            <div class="qc-hg">
                                <a href="javascript:;">
                                    <span class="qc-hg-left">
                                        全场换购
                                    </span>
                                    <span class="qc-hg-right">
                                        低至7.8元超值换购
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="yx-gwf clearfix">
                            <div class="yx-gwf-left f">
                                购物返
                            </div>
                            <div class="yx-gwf-right f">
                                ${dt.jifeng}
                                <i class="icon-wg"></i>
                            </div>
                        </div>
                        <div class="yx-xz">
                            <span class="item">限制</span>
                            <span class="yx-xz-right">满99元包邮</span>
                        </div>
                        <div class="yx-ps clearfix">
                            <span class="item">
                                配送
                            </span>
                            <div class="yx-ps-right" style="margin-left:65px ;">
                                <div class="f">
                                    <div class="f">至</div>
                                    <div class="yx-ps-top">
                                        <div class="px-dz">保安草围村16栋<i class="ps-icon"></i></div>
                                    </div>
                                    <div class="yx-ps-down">
                                        明天17:00前支付, 预计2月5日送达，受交通管制影响，预计送达或有延迟，我们会全力为您服务，请您耐心等待
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="yx-fw">
                            <span class="item">服务</span>
                            <div class="yx-fw-text">
                            ${dt.fuwu}
                            </div>
                        </div>
                    </div>

                    <!-- type -->
                    <div class="clearfix">
                        <div class="yx-gg">
                            <span class="type">
                                规格
                            </span>
                            <div class="cont f">
                                <ul class="tabs">
                                    ${dt.list_oneImg}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="yx-num">
                        <div class="yx-num-content">
                            <div class="yx-sl">
                                数量
                            </div>
                            <div class="field">
                                <div class="selnum">
                                    <button class="app">-</button><input type="text" name="a1" class="tet" value="1" disabled><button class="add">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="yx-btns clearfix">
                        <a href="javascript:;" class="btn yx-ljgm f">
                            <span>立即购买</span>
                        </a>
                        <a href="javascript:;" class="btn yx-jrgwc f">
                            <i class="gwc-icon"></i>
                            <span>加入购物车</span>
                        </a>
                        <div class="f wy-sc">
                            <div class="sc-top">
                                <i class="sc-top-icon"></i>
                            </div>
                            <div class="sc-down">
                                收藏
                            </div>
                        </div>
                        <a href="javascript:;" class="download">
                            <i class="download-icon"></i>
                            下载严选APP
                        </a>
                    </div>
            </div>
            
            <div class="show-img">
                <div class="show-imgs">
                    <div class="btn-left">
                            
                    </div>
                    <div class="show-imgs-content">
                        
                    </div>
                    <div class="btn-right">
                        
                    </div>
                </div>
                </div>
                <div class="yx-tixin">
                    最少购买一件商品
                </div>
            </div>
            <div class="xiangqinglist">
            <span>商品详情</span>
            </div>
            ${dt.xiangqing1}
            ${dt.xiangqing}
        `
        bg.innerHTML = str
        moverr()
        imgss()
        var m_attrList = document.getElementsByClassName('m-attrList')
        m_attrList[0].className = 'm-attrList clearfix'
    })()
}else{
    alert('您还未选择商品')
    location.href='./list.html'
}
    




function imgss(){
    var bigimg = document.getElementsByClassName('big')[0].firstElementChild
    var img_m = document.getElementsByClassName('imgs-m')[0]
    var img = document.getElementsByClassName('img')[0].firstElementChild
    var imgs = img_m.getElementsByTagName('img')
        for(var i=0;i<imgs.length;i++){
            imgs[i].onmouseover = function(){
                var url = this.getAttribute('src')
                var imgwith = url.replace("78x78","430x430")
                var bigwith = url.replace("78x78","860x860")
                img.setAttribute("src",imgwith)
                bigimg.setAttribute("src",bigwith)
            }

        }
}
function moverr(){
var $maker = $('.maker')[0]
var $min = $('.img')[0]
var $big = $('.big')[0]
var $bigImg = $('.big').children()[0]
function move(e){
    //获取光标位置
    var x1 = e.pageX - $min.offsetLeft - parseInt($maker.offsetWidth/2) 
    var y1 = e.pageY - $min.offsetTop - parseInt($maker.offsetHeight/2) 
    // console.log(x1,y1);
    // console.log(x1,y1);
    //设置遮罩层的边界
    var maxX = $min.offsetWidth - $maker.offsetWidth
    var maxY = $min.offsetHeight - $maker.offsetHeight

    var bigX = 0
    var bigY = 0
    if(x1<0){
        $maker.style.left = 0 + 'px'
        bigX = 0 
    }else if(x1 > maxX){
        $maker.style.left = maxX + 'px'
        bigX = maxX
    }else{
        $maker.style.left = x1 + 'px'
        bigX = x1
    }

    if(y1<0){
        $maker.style.top = 0 + 'px'
        bigY = 0
    }else if(y1 > maxY){
        $maker.style.top = maxY + 'px'
        bigY = maxY
    }else{
        $maker.style.top = y1 + 'px'
        bigY = y1
    }

    //让大盒子的图片移动
    $bigImg.style.top = -2*bigY + 'px'
    $bigImg.style.left = -2*bigX + 'px'
}
//鼠标移动
$min.onmouseover = function(e){
    var e = e || window.event
    $maker.style.display='block'
    $big.style.display='block'
}
$min.onmousemove = function(e){
    var e = e || window.event
    move(e)
}
$min.onmouseout=function(){
    $maker.style.display='none'
    $big.style.display='none'
}
}

// 商品数量
// 减
var btn_app = document.getElementsByClassName('app')
// 加
var btn_add = document.getElementsByClassName('add')
//inp
var inp = document.getElementsByClassName('tet')
//最低提醒
console.log(inp);
var yx_tixin = document.getElementsByClassName('yx-tixin');

$('.main').click(function(e){
    var e = e || window.event
    var target = e.target || scr.getElement
    if(target.className == 'add'){
        var val = $(target).prev().val()
        val++
        $(target).prev().val(val)
    }
    if(target.className == 'app'){
        var val = $(target).next().val()
        if(val>=2){
            val--
        }else{
            yx_tixin[0].style.display = 'block'
            times = setTimeout(function(){
                yx_tixin[0].style.display = 'none'
            },2000)
        }
        $(target).next().val(val)
    }
})


//给大盒子绑定点击事件
bg.onclick = function(e){
    var e = e || window.event
    var target = e.target || e.srcElement

    if(target.innerHTML == '加入购物车'){
        var cartList = localStorage.getItem("cartList")
        if(cartList){
             //把localStorage中获取的内容转为数组对象
             cartList=JSON.parse(cartList)
             var a=0 //判断当前添加的商品是否在localStorage中存在
             //遍历数组中所有元素啊
             cartList.forEach(item=>{
                 //判断当前遍历的商品是否等于要添加的商品
                 if(item.id==dt.id){
                     a++
                     item.cart_num+=parseInt(inp[0].value)
                 }
             })
             //判断a变量是否等于0
             if(a==0){
                 //修改商品数量
                 dt.cart_num=1
                 //把当前对象追加到数组中
                 cartList.push(dt)
             }
             //把当前商品添加到localStorage中
             localStorage.setItem("cartList",JSON.stringify(cartList))
        }else{
            dt['cart_num'] = parseInt(inp[0].value)
            localStorage.setItem('cartList',JSON.stringify([dt]))
        }
        alert('恭喜您加入购物车成功')
        inp[0].value = 1
    }


    if(target.innerHTML == '立即购买'){
        var cartList = localStorage.getItem("cartList")
        var name1 = getCookie("name")
        var url = location.href
        if(name1){
            if(cartList){
                //把localStorage中获取的内容转为数组对象
                cartList=JSON.parse(cartList)
                var a=0 //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
                cartList.forEach(item=>{
                    //判断当前遍历的商品是否等于要添加的商品
                    if(item.id==dt.id){
                        a++
                        item.cart_num++
                    }
                })
                //判断a变量是否等于0
                if(a==0){
                    //修改商品数量
                    dt.cart_num=1
                    //把当前对象追加到数组中
                    cartList.push(dt)
                }
                //把当前商品添加到localStorage中
                localStorage.setItem("cartList",JSON.stringify(cartList))
           }else{
               dt['cart_num'] = 1
               localStorage.setItem('cartList',JSON.stringify([dt]))
           }
           location.href='./gwc.html'
        }else{
            alert("您还未登录，请前往登录")
            location="./join1.html?pathUrl="+url
        }
        
    }
}

//     var yx_swiper = document.querySelector('.yx-swiper')
//     var imgs=yx_swiper.querySelectorAll('img')
//     var nums=yx_swiper.querySelectorAll('span')
//     var left=yx_swiper.querySelector('.left')
//     var right=yx_swiper.querySelector('.right')
//     //当前显示图片的下标
//     var index=0
//     var timer
//     move(imgs[index],100)
//     //自动播放
//     var timer2;
//     autoMove()

//     yx_swiper.onmouseover = function(){
//         left.style.display = 'block'
//         right.style.display = 'block'
//     }

//     yx_swiper.onmouseout = function(){
//         left.style.display = 'none'
//         right.style.display = 'none'
//     }

//     function autoMove(){
//         timer2=setInterval(function () {
//             fn1()
//             index++
//             if(index>1){
//                 index=0
//             }
//             fn2()
//             move(imgs[index],100)
//         },5000)
//     }

//     //点击数字切换图片
//     for(var i=0;i<nums.length;i++){
//         nums[i].n=i
//         nums[i].onclick= function () {
//             clearInterval(timer2)
//             fn1()
//             index=this.n
//             fn2()
//             move(imgs[index],100)
//             autoMove()
//         }
//     }

//     //点击右边
//     right.onclick= function () {
//         clearInterval(timer2)
//         fn1()
//         index++
//         if(index>1){
//             index=0
//         }
//         fn2()
//         move(imgs[index],100)
//         autoMove()
//     }

//     left.onclick= function () {
//         clearInterval(timer2)
//         fn1()
//         index--
//         if(index<0){
//             index=1
//         }
//         fn2()
//         move(imgs[index],100)
//         autoMove()
//     }


//     function fn1(){
//         imgs[index].style.zIndex=1
//         imgs[index].style.opacity=0.1
//         nums[index].className=''
//     }


//     function fn2(){
//         nums[index].className='show'
//         imgs[index].style.zIndex=2
//     }


//     function move(dom,target){
//         //透明度初始值
//         var opa=10
//         clearInterval(timer)
//         timer=setInterval(function () {
//             if(opa > target){
//                 var speed=-5
//             }else{
//                 var speed=5
//             }
//             //剩余运动量 <=每次运动的量
//             if(Math.abs(opa-target)<=Math.abs(speed)){
//                 clearInterval(timer)
//                 dom.style.opacity=target/100
// //                return
//             }else{
//                 opa+=speed
//                 dom.style.opacity=opa/100
//             }
//         },50)