//搜索栏搜索条件控制
$("#nav_ssl_fl_kz").on("click", function (e) {
    $("#nav_ssl_fl_xs").text(e.target.innerHTML);
});

//搜索栏历史记录控制
//显隐控制
$("#nav_ssl_sk_srk").focus(function () {
    // console.log($("#nav_ssl_sk_tc_jl").html());
    if ($("#nav_ssl_sk_srk").val() == "" && $("#nav_ssl_sk_tc_jl").html() != "") {
        $("#nav_ssl_sk_tc").css("display", "block");
    };
    //回车添加记录
    $("#nav_ssl_sk_srk").on("keypress", function (e) {
        if (event.keyCode == "13") {
            srj();
        }
    })
});

//单条点击删除
$("#nav_ssl_sk_tc_jl").on("click", function (e) {
    if (e.target.parentNode.tagName == "SPAN") {
        var szxb = $("#nav_ssl_sk_tc_jl").children().index(e.target.parentNode);
        // console.log(szxb);
        e.target.parentNode.remove();
        //获取
        lsjl = JSON.parse(Cooke.ccdq('lsjl'));
        lsjl.splice(szxb, 1);
        Cooke.ccxr('lsjl', JSON.stringify(lsjl), 6, '/');
        // console.log(lsjl);
    }
});

//清空
$("#nav_ssl_sk_tc_kz_qk").on("click", function () {
    $("#nav_ssl_sk_tc_jl").html("");
    lsjl = [];
    Cooke.ccsc("lsjl");
});


//失去焦点

$("#nav_ssl_sk_tc").hover(
    function () {
        kz(1);
    },
    function () {
        kz(2);
    }
);

function kz(x) {
    clearInterval(dsgb);
    console.log(x)
    if (x == 1) {
        clearInterval(dsgb);
    }
    if (x == 2) {
        var dsgb = setTimeout(function () {
            $("#nav_ssl_sk_tc").css("display", "none");
        }, 200);
    }
}

//输入事件后关闭历史记录
$("#nav_ssl_an").on("onkeydown", function () {
    // console.log(12)
    $("#nav_ssl_sk_tc").css("display", "none");
});

//输入框添加
function srj() {
    //输入框的值
    var srz = $("#nav_ssl_sk_srk").val();
    //历史记录数组
    var lsjl = [];
    //输入框内容不为空
    if (srz != "") {
        //将输入框的值存入cookie
        //判断cookie内是否有历史记录 lsjl
        if (Cooke.ccdq('lsjl') == "non") {
            // 没有历史记录将当前数据存入cookie
            lsjl = [srz];
            Cooke.ccxr('lsjl', JSON.stringify(lsjl), 6, '/');
            $("#nav_ssl_sk_srk").val("");
            $("#nav_ssl_sk_tc_jl").prepend("<span>" + srz + "<span>删除</span></span>");
        } else {
            lsjl = JSON.parse(Cooke.ccdq('lsjl'));
            //判断数组内是否有相同记录
            var jlz = true;
            $.each(lsjl, function (i, n) {
                if (n == srz) {
                    jlz = false;
                    return
                }
            });
            $("#nav_ssl_sk_srk").val("");
            if (jlz) {
                lsjl.unshift(srz);
                Cooke.ccxr('lsjl', JSON.stringify(lsjl), 6, '/');
                $("#nav_ssl_sk_tc_jl").prepend("<span>" + srz + "<span>删除</span></span>");
                // console.log(lsjl)
            }

        };
    };
};

//输入后点击搜索添加搜索记录到cookie
$("#nav_ssl_an").on("click", function () {
    srj();
});

//页面加载完成后
$(document).ready(function () {
    if (Cooke.ccdq('lsjl') != "non") {
        lsjl = JSON.parse(Cooke.ccdq('lsjl'));
        $.each(lsjl, function (i, n) {
            $("#nav_ssl_sk_tc_jl").append("<span>" + n + "<span>删除</span></span>");
        });
    };
});

if (JSON.parse(Cooke.ccdq('dlzt')) == "ydl") {
    $("#nav_dl img").attr("src", "img/tx.png");
    $("#nav_dl span").html(JSON.parse(Cooke.ccdq('dlyh')) + "∨");
    $("#nav_dl>a").attr("href", "javascript:;");
    $("#nav_dl").append('<div class="nav_dl_tc"><ul><li><a href="">我的订单</a></li><li><a href="javascript:;">个人设置</a></li><li><a href="javascript:;">退出</a></li></ul></div>')
    $("#nav_dl li:last-child").on("click", function () {
        Cooke.ccsc("dlzt");
        Cooke.ccsc("dlyh");
        location.reload();
    })
}
$(window).scroll(function (event) {
    if ($(document).scrollTop() > 100) {
        $("#header").stop();
        $("#header").animate({
            top: -33,
        }, 200);
        $("#header").css("box-shadow","0 0 20px 0 rgba(0, 0, 0, .2)")
    }
    if ($(document).scrollTop() == 0) {
        $("#header").stop();
        $("#header").animate({
            top: 0
        }, 200);
        $("#header").css("box-shadow","none")
    }
});