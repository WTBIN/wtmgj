<?php 
//状态
$fs=$_POST['fs'];
//用户名
$zh=$_POST['zh'];
//密码
$pw=$_POST['pw'];

$servername = "localhost";
$username = "mgj_com";
$password = "63PWznc6a5pi7NFD";
$dbname = "mgj_com";
 
//链接数据库

    //服务器地址
    $severname="10.3.143.81";
    //登陆用户名
    $username="mgj_com";
    //登陆密码
    $password="63PWznc6a5pi7NFD";
    //数据库名字
    $dbname="mgj_com";

    //创建链接
    $con=new mysqli($severname,$username,$password,$dbname);
    //检擦是否链接成功
    if($con->connect_error){
        echo("链接失败:".$con->connect_error);
    }

//如果请求为注册
if($fs=='zc'){
    //判断当前用户是否已经注册，如果已经注册返回已经注册，若没有添加当前用户并返回注册成功；
    //查询数据库
    //查询
    $cqsql="select * from yh where names='".$zh."'";
    $result = $con->query($cqsql);
    //判读集中是否有数据
    if ($result->fetch_assoc()) {
        echo('当前用户名已存在');
    } else {
        //用户名可用将当前用户名和密码写入数据库
        $sqls="INSERT INTO yh (names,wps) VALUES ('".$zh."', '".$pw."')";
        // echo json_encode($dqz["goodsid"],JSON_UNESCAPED_UNICODE);
        // echo json_encode($sqls,JSON_UNESCAPED_UNICODE);
        // echo json_encode($dqz,JSON_UNESCAPED_UNICODE);
        //检查是否插入成功
        if ($con->multi_query($sqls) === TRUE) {
            echo "注册成功";
        } else {
            echo "注册失败";
        }

    }
};

//如果请求为登陆
if($fs=='dl'){
    //判断当前用户是否已经注册，如果已经注册返回已经注册，若没有添加当前用户并返回注册成功；
    //查询数据库
    $cqsql="select * from yh where names='".$zh."'";
    $result = $con->query($cqsql);
    //判读集中是否有数据
    if ($result->num_rows) {
        
    }else{
        echo('当前用户名未注册');
        $con->close();
        exit();
    }
    $cqsqlw="select names,wps from yh where names = '$zh' and wps = '$pw'";
    $resultw = $con->query($cqsqlw);
    // echo $result->num_rows;
    //判读集中是否有数据
    if ($resultw->num_rows) {
        echo('登陆成功');
    } else {
        echo '账号或者密码错误';
    }
};

// $con->close();
?>