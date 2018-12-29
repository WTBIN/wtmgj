//请求次数
var qqcs = 0;

//数据填充
function pbl_sjtc() {
    // console.log(qqcs)
    // console.log(sl)
    var arr = [];
    //发送请求
    qqcs++
    $.get("../api/splb.php", {
            qbllx: "sj",
            qblsl: qqcs
        },
        function (data) {
            // console.log(data);
            arr = JSON.parse(data);
            // console.log(arr);
            sjts()
        });


    //循环数据数值 添加到页面
    function sjts() {
        $.each(arr, function (i, n) {
            // console.log(n.zt)
            var zt=n.zt.split(",")	;
            $("#splb_body_n_splb").append(`
            <div class="splb_body_n_splb_g">
                    <a href="${"http://"+window.location.host+"/html/xqy.html?id="+n.id}">
                        <div class="splb_body_n_splb_g_img">
                            <img src="${zt[0]}"
                                alt="">
                        </div>
                        <div class="splb_body_n_splb_g_bt">
                            <p>${n.bt}</p>
                        </div>
                        <div class="splb_body_n_splb_g_xx">
                            <span class="splb_body_n_splb_g_jg">￥${n.jg}</span>
                            <span class="splb_body_n_splb_g_yj">￥${n.yj}</span>
                            <span class="splb_body_n_splb_g_sc"><img src="//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png"
                                    alt=""> ${n.scs}</span>
                        </div>
                    </a>
                </div>
            `)
        });
    }

}

pbl_sjtc();

$(window).scroll(function (event) {
    if ($(document).height() - $(document).scrollTop() < 1500) {
        pbl_sjtc();
    }

});