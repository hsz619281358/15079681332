
    //新品首发小轮播
    //获取两个按钮
    var button_left = document.querySelector('.button-left')
    var button_right = document.querySelector('.button-right')
    //左侧悬挂导航
    var left_nav = document.querySelector('.left-nav')
    //右侧悬挂
    var right_nav = document.querySelector('.right-nav')
    //获取左侧悬挂的text
    var left_nav_down_title_text = document.querySelectorAll('.left-nav-down-title-text')
    //右侧悬挂二级菜单
    //返回顶部
    var go_header = document.querySelector('.go-header')
    //获取返回顶部ul
    var right_nav_ul = right_nav.querySelector('.right-nav-text-title')
    //获取banner-move-yx-all对象(商品列表ul)
    var banner_move_yx_all = document.querySelector('.banner-move-yx-all')
    
    var off_fixed = document.querySelector('.off-fixd')

    var yx_guanggao = document.querySelector('.yx-guanggao')

    var a=1
    button_right.onclick =function(){
        if(a<=6){
            a++
            banner_move_yx_all.style.transform="translateX("+-a*1091+"px)"
        }
    }
    button_left.onclick = function(){
        
        if(a>=1){
            a--
            banner_move_yx_all.style.transform="translateX("+-a*1091+"px)"
        }
    }
    //头部悬挂列表
    var header = document.querySelector('.header')
    var header2 = document.querySelector('.header-row')
    window.onscroll = function(){
        var height = parseInt(document.documentElement.scrollTop)
        if(height>=640){
            left_nav.style.top = height-590 + 'px'
            right_nav.style.top = height-590 + 'px'
        }else{
            left_nav.style.top = 0
            right_nav.style.top = 0
        }
    }
    go_header.onclick = function(){
        var times = setInterval(() => {
            var top1 = document.documentElement.scrollTop
            var speed = Math.ceil(top1/15)
            if(top1<=0){
                clearInterval(times)
            }
            document.documentElement.scrollTop = top1 - speed
        }, 10);
    }

    off_fixed.onclick = function(){
        yx_guanggao.style.display = 'none'
    }
    
    // console.log(location.search);
    var dl_zc = document.querySelector('.dl-zc')
    var cookie = getCookie('name')
    if(cookie){
        dl_zc.innerHTML = `你好,${cookie}<span class="wy-zx">注销</span>`
        dl_zc.setAttribute('href','javascript:;')
    }else{
        dl_zc.innerHTML = `<a href="./join1.html">登录/注册</a>`
    }
    $(window).scroll(function(){
        var height = $(window).scrollTop()
        $('.header')[0].display = 'block'
        if(height>150){
            $('.header').slideDown(300,'linear')
        }else{
            $('.header').slideUp(300,'linear')
        }
    })

    //点击注销
    var zx = document.getElementsByClassName('wy-zx')
    console.log(zx);
    if(zx[0]){
        zx[0].onclick = function(){
            setCookie('name',1,-1)
            location.reload()
        }
    }