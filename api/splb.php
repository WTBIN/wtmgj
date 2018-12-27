<?php 

$qblsl=$_GET['qblsl'];

if($_GET['qbllx'] =="sj"){
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
    //数据库查询语句
    $sql = "select * from sp limit ".($qblsl*10-10).",10";
    $result = $con->query($sql);

    
    //创建一个数组接受转存数据库的值
    $fhsz = array();
    //逐条取出集中的值，并加入数组
    while($row = $result->fetch_assoc()) {
        $fhsz[] = $row;
        // echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    // echo $result;
    // echo json_encode($results,JSON_UNESCAPED_UNICODE);

    //关闭数据库链接
    $con->close();
    //返回数据
    echo json_encode($fhsz,JSON_UNESCAPED_UNICODE);
};

?>