//领劵开关
lingjuan()



//获取账号cookie
var name1=getCookie("name")
//获取地址栏中的地址
var url = location.href
//获取大盒子
var box = document.getElementsByClassName('m-cart')[0]
//获取localStorage中的cartList
var cartList=localStorage.getItem("cartList")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
//判断cooki是否存在
if(name1){
    show()
}else{
    alert('您还未登录，请登录在进入')
    location.href = './join1.html?pathUrl='+url
}

function show(){
    var str2 = ''
    //判断当前localStorage是否有内容
    if(cartList.length>0){
    //获取全选框是否被选中
    var aa=cartList.every(item=>{
        //判断当前商品是否被选中
        return item.is_select==1
    })
    //获取当前被选中商品的种类和价格
    str2+=`
    <div class="gwc-top">
                        <div class="tt">
                            <div class="w w1 left">
                                <input type="checkbox" id="quan" name="quanxuan" id="" class="quanxuan" ${aa?"checked":""}>
                                <label for="quan" class="quanxuan-text">全选</label>
                            </div>
                            <div class="w w2 left">商品信息</div>
                            <div class="w w3">单价</div>
                            <div class="w w4">数量</div>
                            <div class="w w5">小计</div>
                            <div class="w w6">操作</div>
                        </div>
                    </div>

                    <div class="gwc-content  clearfix">
    `
    cartList.forEach(item=>{
        str2+=`<div class="cart-group clearfix">
        <div class="cart-item clearfix">
            <div class="item w-x"><input type="checkbox" ${item.is_select==1?"checked":''} name="xuan"  data-id="${item.id}"></div>
            <div class="item clearfix">
                <div class="item-img">
                    <img src="${item.Default_bigimg}">
                </div>
                <div class="item-text">
                    <p>
                        ${item.title}
                    </p>
                </div>
            </div>
            <div class="item one-price">
                <span>￥${item.price}</span>
            </div>
            <div class="item shuliang">
                <div class="selnum">
                    <button class="app" data-id="${item.id}">-</button><input type="text" name="a1" class="tet" value="${item.cart_num}"><button class="add" data-id="${item.id}">+</button>
                </div>
            </div>
            <div class="item xiaoji">
                <span>￥${(item.cart_num * item.price).toFixed(2)}</span>
            </div>
            <div class="item del">
                <span>移入收藏夹</span>
                <br />
                <span class="del-item" data-id="${item.id}">删除</span>
            </div>
        </div>
    </div>
</div>
        
        `
    })
    str2+=`
    </div>
                    <div class="gwc-fooder">
                        <div class="w-chkbox f">
                            <input type="checkbox" name="quanxuan2" ${aa?"checked":""}>
                            <span class="xz">已选(${total()[0]})</span>
                            <span class="dels" style="cursor: pointer;">批量删除</span>
                        </div>
                        <div class="xiadan r">
                            <div class="money f">
                                <span>
                                <span>应付总额：</span>
                                <span class="num-money">
                                    ￥${(total()[1]).toFixed(2)}
                                </span>
                                
                                </span>
                            </div>
                            <div class="xd f">
                                下单
                            </div>
                        </div>
                    </div>

    `
    box.innerHTML = str2
    }else{
        var str1=`
        <div class="jumbotron">
              <div class="empty" style="margin-top:200px">
                <div class="w-icon-empty">

                </div>
                <div class="emptyText">购物车还是空滴</div>
                <p class="btnLIne">
                <a href="./list.html" class="w-button">
                继续逛
                </a>
                </p>
              </div>
          </div>
        ` 
        //把当前内容添加到box盒子中
        box.innerHTML=str1
    }
}

$('.m-cart').click(function(e){
    var e = e || window.event
    var target = e.target || src.getElement
    if(target.innerHTML == '+'){
        var id = target.getAttribute('data-id')
        //遍历cartList数组对象
        cartList.forEach(item=>{
            if(item.id==id){
                
                if(item.cart_num < item.number){
                    item.cart_num++
                }else{
                    tx2()
                }
            }
        })
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    if(target.innerHTML == '-'){
        var id = target.getAttribute('data-id')
        //遍历cartList数组对象
        cartList.forEach(item=>{
            if(item.id==id){
                if(item.cart_num>=2){
                    item.cart_num--
                }else{
                    tx1()
                }
            }
        })
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    if(target.innerHTML == '删除'){
        var id = target.getAttribute('data-id')
        //遍历cartList数组对象
        cartList = cartList.filter(item=>{
            return item.id!=id
        })
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    if(target.name == 'quanxuan'){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    if(target.name == 'quanxuan2'){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name == 'xuan'){
        //获取当前商品对应的id
        var id = target.getAttribute('data-id')
        cartList.forEach(item=>{
            if(item.id == id){
                item.is_select = item.is_select == 1?'0':'1'
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }

    if(target.innerText == '下单'){
        
        if(total()[0] > 0){
            if(confirm("你确定要购买吗？")){
                shoping()
            }
        }
    }

    if(target.innerHTML == '批量删除'){
        var id = target.getAttribute('data-id')
        //遍历cartList数组对象
        cartList = cartList.filter(item=>{
            return item.is_select!=1
        })
        localStorage.setItem("cartList",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
})

function shoping(){
    var num_money = document.getElementsByClassName('num-money')[0].innerHTML
    var num = num_money.split('￥')[1];
    var newDiv = document.createElement('div')
    newDiv.innerHTML = `<div class="shoping-marke">
    <div class="shoping">
        <h3>微信支付</h3>
        <div class="zf-img">
          <img src="./img/微信图片_20210222195639.png" width="100%" height="100%">
        </div>
        <h2>￥${num}</h2>
        <div class="zf">
          <div class="zfcg f">
            支付成功
          </div>
          <div class="zfsb f">
            取消支付
          </div>
        </div>
    </div>
  </div>`
    document.documentElement.appendChild(newDiv)

    var zf = document.getElementsByClassName('shoping')[0]
          zf.onclick = function(e){
            var e = e || window.event
            var target = e.target || src.getElement

            if(target.innerText == '支付成功'){
              document.documentElement.removeChild(newDiv)
              alert('谢谢老板')
              cartList=cartList.filter(item=>{
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
            }
            if(target.innerText == '取消支付'){
              document.documentElement.removeChild(newDiv)
              alert('穷逼')
            }
          }
          
}

//购买提醒
function tx1(){
    var newDiv = document.createElement('div')
    newDiv.innerHTML = `<div class="yx-tixin">
    最少购买一件商品
    </div>`
    document.documentElement.appendChild(newDiv)
    setTimeout(function(){
        document.documentElement.removeChild(newDiv)
    },1000)
    }
    function tx2(){
        var newDiv = document.createElement('div')
        newDiv.innerHTML = `<div class="yx-tixin">
        购买数量已超过库存
        </div>`
        document.documentElement.appendChild(newDiv)
        setTimeout(function(){
            document.documentElement.removeChild(newDiv)
    },1000)
}
//统计所选商品价格和数量
function total(){
    var price = 0
    var num = 0
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            num++
            price+=item.cart_num*item.price
        }
    })
    return [num,price]
}

function youfei(){
    var youfei = document.getElementsByClassName('youfei')[0]
    var num_money = document.getElementsByClassName('num-money')[0].innerHTML
    var num = num_money.split('￥')[1];
    if(num>=99){
        youfei.style.display = 'none'
        num-=10
        num_money.innerHTML = '￥' + num
    }else{
        youfei.style.display = 'inline-block'
        num+=10
        num_money.innerHTML = '￥' + num
    }
}

function lingjuan(){
    //获取领卷按钮
var hd_btn = document.querySelector('.hd-btn')
//获取领卷中心
var hd_btn_show = document.querySelector('.hd-btn-show')
//领劵开关
var flag = 1
hd_btn.onclick = function(){
    if(flag){
        hd_btn_show.style.height = 154 + 'px'
        hd_btn_show.style.border = '1px solid #eaeaea'
        flag = 0
    }else{
        hd_btn_show.style.height = 0 + 'px'
        hd_btn_show.style.border = '0px solid #eaeaea'
        flag = 1
    }
}
}
// // 商品数量
// // 减
// var btn_app = document.getElementsByClassName('app')
// // 加
// var btn_add = document.getElementsByClassName('add')
// //inp
// var inp = document.getElementsByClassName('tet')
// var bg = document.getElementsByClassName('m-cart')
// bg[0].onclick = function(e){
//     var e = e || window.event
//     var target = e.target || scr.getElement
//     if(target.className == 'add'){
//         var val = $(target).prev().val()
//         val++
//         $(target).prev().val(val)
//     }
//     if(target.className == 'app'){
//         var val = $(target).next().val()
//         if(val>=2){
//             val--
//         }
//         // else{
//         //     yx_tixin[0].style.display = 'block'
//         //     times = setTimeout(function(){
//         //         yx_tixin[0].style.display = 'none'
//         //     },2000)
//         // }
//         $(target).next().val(val)
//     }
// }


