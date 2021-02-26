<?php
header("content-type:text/html;charset=utf-8");

//获取传入的参数
$u=$_POST['username'];
$p=$_POST['password'];
//连接数据库
$link = mysqli_connect('localhost','root','','qqq');
//设置编码
mysqli_set_charset($link,'utf8');
if($u && $p){
//SQL语句
        $sql = "select * from wangyi where username = '$u' and password = '$p'";
        //执行SQL语句,并返回结果集
        $result = mysqli_query($link,$sql);
        //判断当前结果集中是否存在数据
        if(mysqli_fetch_assoc($result)){
            echo "1";
        }
}elseif(!$u && !$p){
    echo '3';
}elseif(!$p && $u){
    echo '4';
}
//关闭数据库
mysqli_close($link);
?>