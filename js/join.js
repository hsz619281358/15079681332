// 获取操作对象
var inp = document.getElementById('inp')
var submit = document.querySelector('[type="submit"]')
var user = document.querySelector('.tet')
var password = document.querySelector('[type="password"]')
//账号输入框
var tet = document.querySelector('.join-center-tet')
//密码输入框
var pass = document.querySelector('.join-center-pass')
//获取提示
var regs = document.querySelectorAll('.regs')
//绑定当前按钮对象点击事件
var search = location.search
inp.onclick = function(){
    //判断当前选项是否被选中
    if(inp.checked){
        //取消按钮禁用
        submit.disabled = false
        submit.style.backgroundColor = '#cc9756'
    }else{
        submit.disabled = true
        submit.style.backgroundColor = '#cccccc'
    }
}
//给能被点击的登录按钮绑定点击事件
submit.onclick = function(){
    //获取账号输入框中的值
    var u1 = user.value
    var p1 = password.value
    Ajax({
        url:'./php/join1.php',
        type:'post',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
            //判断当前的返回值是否等于1
            if(dt == 1){
                if(search){
                    var new_url = search.split('=')[1]+"="+search.split('=')[2]
                    location.href=new_url
                }else{
                    location.href=`./index1.html`
                }
                alert('登录成功')
                setCookie('name',u1)
            }else if(dt == 2){
                alert('登录失败')
                regs[1].innerHTML = '密码输入错误'
            }else if(dt == 3){
                regs[0].innerHTML = '请输入账号'
                tet.style.border = '1px solid red'
                tet.style.boxShadow = '0 0 4px red';
                console.log(dt);
            }else if(dt == 4){
                regs[1].innerHTML = '请输入密码'
                pass.style.border = '1px solid red'
                pass.style.boxShadow = '0 0 4px red';
            }
        }
    })
    return false
}

tet.onclick = function(){
    tet.style.border = '1px solid #ccc'
    tet.style.boxShadow = '0 0 0px red';
    regs[0].innerHTML = '&nbsp;'
}

pass.onclick = function(){
    pass.style.border = '1px solid #ccc'
    pass.style.boxShadow = '0 0 0px red';
    regs[1].innerHTML = '&nbsp;'
}