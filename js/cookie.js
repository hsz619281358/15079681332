//cookie设置
function setCookie(key,value,expires){
    //获取当前时间
    var time = new Date();
    //用于设置过期时间
    time.setTime(time.getTime() - 1000 * 60 * 60 *8 + 1000 * expires)
    //设置cookie
    document.cookie = `${key} = ${value};expires = ${time}`
}

//通过key获取对应的值
function getCookie(key){
    //获取所有的cookie
    var cookie = document.cookie
    //分割cookie，转为数组
    var arr = cookie.split("; ")
    //遍历数组元素
    for(var i = 0; i < arr.length; i++){
        //再次分割数组元素
        var arr2 = arr[i].split("=")
        //把传入进来的键名跟数组中第一个元素比较
        if(key == arr2[0]){
            return arr2[1]
        }
    }
}


//删除cookie
function delCookie(){
    setCookie(key,1,-1)
}