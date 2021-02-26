//轮播图
    var yx_swiper = document.querySelector('.yx-swiper')
    var imgs=yx_swiper.querySelectorAll('img')
    var nums=yx_swiper.querySelectorAll('span')
    var left=yx_swiper.querySelector('.left')
    var right=yx_swiper.querySelector('.right')
    //当前显示图片的下标
    var index=0
    var timer
    move(imgs[index],100)
    //自动播放
    var timer2;
    autoMove()

    yx_swiper.onmouseover = function(){
        left.style.display = 'block'
        right.style.display = 'block'
    }

    yx_swiper.onmouseout = function(){
        left.style.display = 'none'
        right.style.display = 'none'
    }

    function autoMove(){
        timer2=setInterval(function () {
            fn1()
            index++
            if(index>1){
                index=0
            }
            fn2()
            move(imgs[index],100)
        },5000)
    }

    //点击数字切换图片
    for(var i=0;i<nums.length;i++){
        nums[i].n=i
        nums[i].onclick= function () {
            clearInterval(timer2)
            fn1()
            index=this.n
            fn2()
            move(imgs[index],100)
            autoMove()
        }
    }

    //点击右边
    right.onclick= function () {
        clearInterval(timer2)
        fn1()
        index++
        if(index>1){
            index=0
        }
        fn2()
        move(imgs[index],100)
        autoMove()
    }

    left.onclick= function () {
        clearInterval(timer2)
        fn1()
        index--
        if(index<0){
            index=1
        }
        fn2()
        move(imgs[index],100)
        autoMove()
    }


    function fn1(){
        imgs[index].style.zIndex=1
        imgs[index].style.opacity=0.1
        nums[index].className=''
    }


    function fn2(){
        nums[index].className='show'
        imgs[index].style.zIndex=2
    }


    function move(dom,target){
        //透明度初始值
        var opa=10
        clearInterval(timer)
        timer=setInterval(function () {
            if(opa > target){
                var speed=-5
            }else{
                var speed=5
            }
            //剩余运动量 <=每次运动的量
            if(Math.abs(opa-target)<=Math.abs(speed)){
                clearInterval(timer)
                dom.style.opacity=target/100
//                return
            }else{
                opa+=speed
                dom.style.opacity=opa/100
            }
        },50)

    }//获取操作对象
var m_sort_name1 = document.querySelectorAll('.m-sort-name')[0]
var as = m_sort_name1.querySelectorAll('a')
var m_sort_px = document.querySelectorAll('.m-sort-px')[0]
var as3 = m_sort_px.querySelectorAll('a')
var row=document.querySelector('.yx-m-shop');
var pagination=document.querySelector('.pagination');
        var a = 0;
        aaa()
        for(let i=0;i<as.length;i++){
            
            as[i].onclick =async function(){
                for(var j=0; j<as.length;j++){
                    as[j].className = ''
                }
                as[i].className = 'bgbgbg'
                a=i
                aaa()
            }
            
        };
        
        as3[0].onclick = function(){
            a = 0;
            aaa()
        }
        var bool = false
        as3[1].onclick = function(){
            
            if(bool){
                as3[1].lastElementChild.lastElementChild.className = 'm-icon-down'
                as3[1].lastElementChild.firstElementChild.className = 'm-icon-top-show'
                bool = false
                a=20
                aaa()
                
            }else{
                bool = true
                a=21
                as3[1].lastElementChild.lastElementChild.className = 'm-icon-down-show'
                as3[1].lastElementChild.firstElementChild.className = 'm-icon-top'
                aaa()
                
            }
        }
    
    async function aaa(){
        var dt=await promiseAjax({
            url:'./php/lish.php',
            data:`username=${a}`,
            datatype:'json'
        })
        //创建分页器对象
        new Pagination(pagination,{
            pageInfo:{
                pagenum:1,
                pagesize:16,
                totalsize:dt.length,
                totalpage:Math.ceil(dt.length/16)
            },
            textInfo:{
                first:'首页',
                prev:"上一页",
                next:"下一页",
                last:"尾页"
            },cb(m){
                //获取当前页需要显示的数据
                var ar1=dt.slice((m-1)*16,m*16)
                //创建拼接所有数据的字符串
                var str=''
                //遍历当前ar1数组中所有的数据
                ar1.forEach(item=>{
                    str+=`
                        <li class="f lis">
                                    <div class="yx-m-main">
                                        <div class="m-t">
                                            <a href="./details.html?id=${item.id}" target="_blank">
                                                <img src="${item.shop_img1}" alt=".." class="img-o">
                                                <div class="m-t2">
                                                    <img src="${item.shop_img2}" alt=".." class="img-1">
                                                </div>
                                                <img src="./img/list/list-3.png" class="img-logo">
                                                <div class="yh-shop-0">
                                                    <div class="yh-shop-0-top">
                                                        <span>新人特价包邮</span>
                                                    </div>
                                                    <div class="yh-shop-0-down">
                                                        <span class="qi">$${item.price}</span>
                                                        <span>起</span>
                                                    </div>
                                                </div>
                                                <div class="yh-shop-1">
                                                    正在抢购中
                                                </div>
                                            </a>
                                        </div>
                                        <div class="m-d">
                                            <div class="xr-tj">
                                                <span class="xr-tj-text">
                                                    ${item.m_itemTag}
                                                </span>
                                            </div>
                                            <h4 class="name">
                                                <a href="./details.html?id=${item.id}"  target="_blank">
                                                    ${item.title}
                                                </a>
                                            </h4>
                                            <p class="prices">
                                                <span class="new-price">
                                                    <span>$</span>
                                                    <span>${item.price}</span>
                                                </span>
                                                <span class="old-price">
                                                    <span>$</span>
                                                    <span>${item.price}</span>
                                                </span>
                                            </p>
                                            <div>
                                                <hr />
                                                <p class="desc">
                                                    ${item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                `
                })
                //把当前拼接好的字符串，添加到row盒子中
                $('.yx-m-shop')[0].innerHTML = str
            }
        })
    }

    //添加