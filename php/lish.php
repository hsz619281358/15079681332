<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','shop');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$n = $_GET['username'];
if($n=='0'){
    $sql="select * from list";
}elseif($n>='1' && $n<='19'){
    $sql="select * from list where fenlei = $n";
}elseif($n=='21'){
    $sql="select * from list order by price asc";
}elseif($n=='20'){
    $sql="select * from list order by price desc";
}
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//创建存储所有数据的数组
$arr=[];
//遍历结果集
while($row=mysqli_fetch_assoc($result)){
    //把遍历出来的数据追加到数组中
    array_push($arr,$row);
}
//把当前数组转为字符串，并响应给浏览器
echo json_encode($arr);
//关闭连接
mysqli_close($link);

?>