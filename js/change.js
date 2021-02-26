    //获取勾选
    var ty = document.querySelector('[type="checkbox"]')
    //获取按钮
    var btn = document.querySelector('[type="submit"]')
    //获取账号输入框
    var text = document.querySelector('[type="text"]')
    //获取密码输入框
    var pass = document.querySelector('[type="password"]')
    //获取验证密码的框
    var pass2 = document.querySelector('[name="password2"]')
    //获取大盒子
    var box = document.querySelector('.box')
    var box2 = document.querySelector('.box2')
    //获取p标签
    var p1 = $('p:eq(1)')[0]
    var p2 = $('p:eq(2)')[0]
    var p3 = $('p:eq(3)')[0]
    //获取line
    var line = document.querySelector('.line')
    //获取step对象
    var step = document.querySelectorAll('.step')
    //获取number
    var number = document.querySelectorAll('.number')[1]
    ty.onclick = function(){
        if(ty.checked){
            btn.disabled = false
        }else{
            btn.disabled = true
        }
    }

    var user = false
    text.onblur = function(){
        var val=this.value
        var reg=/^[0-9A-Za-z]\w{5,11}$/
        
        if(reg.test(val)){
            user=true
            p1.innerHTML="&nbsp;"
            text.style.border = '1px solid #2c82ff'
            p1.style.color = '#2c82ff'
        }else{
            p1.innerHTML="请输入正确6-12位字符"
            p1.style.color = 'red'
            text.style.border = '1px solid red'
            this.focus()
            user=false
        }
    }

    var pwd = false
    pass.onblur = function(){
        var val = this.value
        var reg = /^\w{6,16}$/
        if(reg.test(val)){
            pass.style.border = '1px solid #2c82ff'
            var a = 0   //数字
            var b = 0   //小写字母
            var c = 0   //大写字母
            var d = 0   //下划线
            for(var i=0;i<val.length;i++){
                //判断当前字符是否是数字
                if('0'<=val[i] && val[i]<='9'){
                    a=1
                }else if('a'<=val[i] && val[i]<='z'){
                    b=1
                }else if('A'<=val[i] && val[i]<="Z"){
                    c=1
                }else{
                    d=1
                }
            }
             //判断当前出现了多少字符
            if(a+b+c+d == 1){
                p2.innerHTML="密码强度较弱"
                p2.style.color = 'red'
            }else if(a+b+c+d==2){
                p2.innerHTML="密码强度较偏弱"
                p2.style.color = '#ff5507f8'
            }else{
                p2.innerHTML="密码强度较强"
                p2.style.color = 'green'
            }
            pwd = true
        }else{
            p2.innerHTML="请输入正确6-16密码"
            p2.style.color = 'red'
            pass.style.border = '1px solid red'
            pwd=false
        }
    }

    var passTwo = false
    pass2.onblur = function(){
        var val=this.value
        var val2 = pass.value
        if(val===val2){
            passTwo=true
            p3.innerHTML="&nbsp;"
            this.style.border = '1px solid #2c82ff'
            p3.style.color = '#2c82ff'
        }else{
            p3.innerHTML="密码输入错误"
            p3.style.color = 'red'
            this.style.border = '1px solid red'
            passTwo=false
        }
    }

    btn.onclick=function(){
        if(user && pwd && passTwo){
            var u1 = text.value
            var p1 = pass.value
            Ajax({
                url:'./php/change.php',
                type:'post',
                data:`username=${u1}&password=${p1}`,
                success:function(dt){
                    //判断当前的返回值是否等于1
                    if(dt == 0){
                        alert('注册成功')
                        line.style.backgroundColor = '#2c82ff'
                        step[1].style.color = '#2c82ff'
                        step[1].style.fontWeight = '800'
                        number.style.border = '2px solid #2c82ff'
                        box.style.display = 'none'
                        box2.style.display = 'block'
                    }else{
                        alert('该账号已被注册')
                    }
                }
            })

        }else{
            //调用账号验证函数
            text.onblur()
            pass.onblur()
            pass2.onblur()
            return false
        }
    }
