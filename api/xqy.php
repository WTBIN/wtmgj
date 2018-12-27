<?php 
    if($_GET['qqlx']=="jz"){
        $xqy_id=$_GET['xqy_id'];
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
            exit("链接失败:".$con->connect_error);
        }
        $cqsql="select * from sp where id='".$xqy_id."'";
        $result = $con->query($cqsql);
        //判读集中是否有数据
        if ($result->num_rows > 0) {
            // 输出数据
            while($row = $result->fetch_assoc()) {
                echo json_encode($row,JSON_UNESCAPED_UNICODE);
            }
        }
        
        //关闭数据库链接
        $con->close();
    }
?>