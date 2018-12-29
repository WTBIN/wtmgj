$(document).ready(function () {
    gwc_cssc()
});



//数据生成
function gwc_cssc() {
    var cokgwc = JSON.parse(Cooke.ccdq('gwcsj'));

    $.each(cokgwc, function (i, n) {
        // console.log(n.spid)
        //请求当前商品的数据
        $.get("../api/xqy.php", {
                xqy_id: n.spid,
                qqlx: "jz"
            },
            function (data) {
                var arr = JSON.parse(data)
                // console.log(arr);

                //主图图片更新
                var zt = arr.zt.split(",");

                $(".gwc_body_lb").append(`
                <div class="gwc_body_lb_h" spid="${n.spid}">
                <div class="gwc_body_nh1">
                    <input type="checkbox" class="gwc_body_lb_h_xz">
                </div>

                <div class="gwc_body_nh2">
                    <div class="gwc_body_lb_h_zt">
                        <img src="${zt[0]}"
                            alt="">
                    </div>

                    <a href="${"http://"+window.location.host+"/html/xqy.html?id="+n.spid}">${arr.bt}</a>
                </div>
                <div class="gwc_body_nh3">
                    <span>颜色：<span class="gwc_body_ys">${n.ys}</span></span>
                    <span>尺码：<span class="gwc_body_cm">${n.cm}</span></span>
                </div>
                <div class="gwc_body_nh4">
                    <span>${arr.yj}</span>
                    <span class="gwc_body_lb_h_jg">${arr.jg}</span>
                </div>
                <div class="gwc_body_nh5">
                    <div class="gwc_body_lb_h_slkz">
                        <span class="gwc_body_lb_h_slkz_j">-</span>
                        <input type="text" value="${n.sl}" class="gwc_body_lb_h_slkz_z">
                        <span class="gwc_body_lb_h_slkz_ja">+</span>
                    </div>
                </div>
                <div class="gwc_body_nh6">
                    <span class="gwc_body_lb_h_dzj">${n.sl*arr.jg}</span>
                </div>
                <div class="gwc_body_nh1">
                    <span class="gwc_sc">删除</span>
                </div>
            </div>
                `);

            });


    });

};

//全选控制
$(".gwc_qx").on("click", function () {
    if ($(".gwc_qx").prop('checked')) {
        gwc_qx("qx")
    } else {
        gwc_qx("qk")
    }
});
//购物车列表内的点击事件
$(".gwc_body_lb").on("click", function (e) {
    //点击为删除
    if ($(e.target).attr("class") == "gwc_sc") {
        $(e.target).closest('.gwc_body_lb_h').remove();
        //全部总价更新
        quzjgx();
        //购物车数据更改
        gwc_lbgb();
    };

    //点击为选择
    if ($(e.target).attr("class") == "gwc_body_lb_h_xz") {
        // console.log("点击了单行选择")
        var qxzt = 1;
        $.each($('.gwc_body_lb_h_xz'), function (i, n) {
            if ($(n).prop('checked') == false) {
                qxzt = 0;
            }
        });

        if (qxzt == 1) {
            gwc_qx("ok");
        } else {
            gwc_qx("no");
        }
    };

    //数量减
    if ($(e.target).attr("class") == "gwc_body_lb_h_slkz_j") {
        var dv = $(e.target).siblings(".gwc_body_lb_h_slkz_z").attr("value");
        if (dv > 1) {
            $(e.target).siblings(".gwc_body_lb_h_slkz_z").attr("value", dv * 1 - 1)
        }
        //单行总价更新
        dqhzj($(e.target));
        //全部总价更新
        quzjgx();
    }
    //数量加
    if ($(e.target).attr("class") == "gwc_body_lb_h_slkz_ja") {
        var dv = $(e.target).siblings(".gwc_body_lb_h_slkz_z").attr("value");
        $(e.target).siblings(".gwc_body_lb_h_slkz_z").attr("value", dv * 1 + 1)
        //单行总价更新
        dqhzj($(e.target))
        //全部总价更新
        quzjgx()
    }
});

//点击多选删除
$(".gwc_q_sc").on("click", function () {
    $.each($(".gwc_body_lb_h input[type=checkbox]"), function (i, n) {
        if ($(n).prop('checked')) {
            $(n).closest('.gwc_body_lb_h').remove();
            $(".gwc_qx").prop('checked', false);
        };
    });
    //全部总价更新
    quzjgx();
    //购物车数据更改
    gwc_lbgb();
});


//当前行总价更新
function dqhzj(jd) {
    // console.log("价格更新")
    var dqh = jd.closest('.gwc_body_lb_h');
    var zj = dqh.find(".gwc_body_lb_h_slkz_z").attr("value") * dqh.find(".gwc_body_lb_h_jg").text();
    // console.log(zj)
    //当前行数量
    dqh.find(".gwc_body_lb_h_dzj").text(zj);
    //购物车数据更改
    gwc_lbgb();
}



//全部总价更新
function quzjgx() {
    // console.log("全部总价更新")
    var qzj = 0;
    $.each($(".gwc_body_lb_h"), function (i, n) {
        if ($(n).find(".gwc_body_lb_h_xz").prop('checked')) {
            // console.log($(n).find(".gwc_body_lb_h_dzj"))
            qzj += $(n).find(".gwc_body_lb_h_dzj").text() * 1;
        }
    })
    // console.log(qzj);
    if (qzj != 0) {
        gwc_anzt("y");
    } else {
        gwc_anzt("n")
    }
    $(".gwc_body_jsl_r_zj").text("￥" + qzj);
}

//全选
function gwc_qx(tt) {
    if (tt == "ok") {
        $(".gwc_qx").prop('checked', true);
    } else if (tt == "no") {
        $(".gwc_qx").prop('checked', false);
    } else if (tt == "qx") {
        $(".gwc_qx").prop('checked', true);
        $(".gwc_body_lb_h_xz").prop('checked', true);
    } else if (tt == "qk") {
        $(".gwc_qx").prop('checked', false);
        $(".gwc_body_lb_h_xz").prop('checked', false);
    }
    //全部总价更新
    quzjgx();
}

//按钮状态更新
function gwc_anzt(kg) {
    if (kg == "y") {
        $(".gwc_body_jsl_r_fk").css("background-color", "#f46")
    } else {
        $(".gwc_body_jsl_r_fk").css("background-color", "#999")
    }
}

//列表商品状态改变
function gwc_lbgb() {
    console.log("数据改变");
    //循环列表生成新的购物车数据 保存到cooke
    //新数据数组
    var gwc_xsz = [];
    //获取用户名
    var yhm = JSON.parse(Cooke.ccdq('dlyh'));

    $.each($(".gwc_body_lb_h"), function (i, n) {

        //获取商品id
        var spid = $(n).attr("spid");
        //获取颜色
        var ys = $(n).find(".gwc_body_ys").text();
        //获取尺码
        var cm = $(n).find(".gwc_body_cm").text();
        //获取数量
        var sl = $(n).find(".gwc_body_lb_h_slkz_z").attr("value");
        var gwcsj = {
            "yhm": yhm,
            "spid": spid,
            "ys": ys,
            "cm": cm,
            "sl": sl
        }
        gwc_xsz.push(gwcsj);
    });
    Cooke.ccxr('gwcsj', JSON.stringify(gwc_xsz), 1, '/');
    console.log(gwc_xsz)
}