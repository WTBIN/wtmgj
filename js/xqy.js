//图片切换控制
$("#xqy_body_sx_zt_kz_lb").on("mouseover", function (e) {
    if (e.target.tagName == "IMG") {
        $("#xqy_body_sx_zt_bigimg").attr("src", e.target.src);
    }
});
$(".xqy_body_sx_zt_kz_yj").on("click", function () {
    // console.log($(".xqy_body_sx_zt_kz_lb ul").width())
    var syw = $(".xqy_body_sx_zt_kz_lb ul").width() - $("#xqy_body_sx_zt_kz_lb ul").css("left").replace(/[^0-9]/ig, "") * 1
    console.log(syw)
    if (syw > 333) {
        $("#xqy_body_sx_zt_kz_lb ul").animate({
            left: '-=333px'
        }, 700);
    }

});
$(".xqy_body_sx_zt_kz_zj").on("click", function () {
    // console.log( $("#xqy_body_sx_zt_kz_lb ul").css("left"))
    var lef = $("#xqy_body_sx_zt_kz_lb ul").css("left").replace(/[^0-9]/ig, "") * 1;
    if (lef != 0) {
        $("#xqy_body_sx_zt_kz_lb ul").animate({
            left: '+=333px'
        }, 700);
    }
});


// console.log($("#xqy_body_sx_zt_bigimg"))
// 绑定鼠标移入原图窗口事件
$('.xqy_body_sx_zt_bigimg').mouseover(function (e) {
    $('.xqy_body_sx_zt_faj img').attr("src", $("#xqy_body_sx_zt_bigimg").attr("src"))
    $('.xqy_body_sx_zt_bigimg_smk').css('display', 'block');
    $('.xqy_body_sx_zt_faj').css('display', 'block');
})
//绑定鼠标离开原图窗口事件
$('.xqy_body_sx_zt_bigimg').mouseout(function () {
    $('.xqy_body_sx_zt_bigimg_smk').css('display', 'none');
    $('.xqy_body_sx_zt_faj').css('display', 'none');
})

//绑定鼠标在原图窗口移动的事件
$('.xqy_body_sx_zt_bigimg').mousemove(function (e) {

    // 获取鼠标当前的位置
    var x = e.clientX;
    var y = e.clientY;
    // 获取原图窗口距离文档的偏移位置
    var sX = $('.xqy_body_sx_zt_bigimg').offset().left;
    var sY = $('.xqy_body_sx_zt_bigimg').offset().top;

    // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
    var mx = x - sX;
    var my = y - sY;

    // 获取小框框的宽高
    var mw = $('.xqy_body_sx_zt_bigimg_smk').width() / 2;
    var mh = $('.xqy_body_sx_zt_bigimg_smk').height() / 2;

    // 鼠标移动后小框框的移动距离
    $('.xqy_body_sx_zt_bigimg_smk').css({
        left: mx - mw + 'px',
        top: my - mh + 'px'
    });

    // 获取小框框的偏移位置
    var lw = $('.xqy_body_sx_zt_bigimg_smk').position().left;
    var lh = $('.xqy_body_sx_zt_bigimg_smk').position().top;


    // 判断边界（小框框只能在原图窗口范围内移动）
    var maxW = $('.xqy_body_sx_zt_bigimg').width() - $('.xqy_body_sx_zt_bigimg_smk').width()
    var maxH = $('.xqy_body_sx_zt_bigimg').height() - $('.xqy_body_sx_zt_bigimg_smk').height()
    // 左边界
    if (lw <= 0) {
        $('.xqy_body_sx_zt_bigimg_smk').css('left', '0px');
    }
    // 右边界
    if (lw >= maxW) {
        $('.xqy_body_sx_zt_bigimg_smk').css('left', maxW + 'px');
    }
    // 上边界
    if (lh <= 0) {
        $('.xqy_body_sx_zt_bigimg_smk').css('top', '0px');
    }
    // 下边界
    if (lh >= maxH) {
        $('.xqy_body_sx_zt_bigimg_smk').css('top', maxH + 'px');
    }

    // 获取小框框的偏移位置
    var lw = $('.xqy_body_sx_zt_bigimg_smk').position().left;
    var lh = $('.xqy_body_sx_zt_bigimg_smk').position().top;
    // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
    var newX = lw * 2.5;
    var newY = lh * 2.5;
    $('.xqy_body_sx_zt_faj img').css({
        left: -newX + 'px',
        top: -newY + 'px'
    });
})
$(".xqy_body_sx_xz_xx_ys_sk").on("click", function (e) {
    // console.log(e.target)
    $(".xqy_body_sx_xz_xx_ys_sk").removeClass("xqy_body_sx_xz_xx_xz");
    $(e.target).addClass("xqy_body_sx_xz_xx_xz");
})

$(".xqy_body_sx_xz_xx_cm_k").on("click", function (e) {
    // console.log(e.target)
    $(".xqy_body_sx_xz_xx_cm_k").removeClass("xqy_body_sx_xz_xx_xz");
    $(e.target).addClass("xqy_body_sx_xz_xx_xz");
})
$(".xqy_body_sx_xz_xx_sl_kz_j").on("click", function (e) {
    var dv = $(".xqy_body_sx_xz_xx_sl_kz_z").attr("value");
    if (dv > 1) {
        $(".xqy_body_sx_xz_xx_sl_kz_z").attr("value", dv * 1 - 1)
    }

    // console.log($(".xqy_body_sx_xz_xx_sl_kz_z").attr("value"))
})
$(".xqy_body_sx_xz_xx_sl_kz_ja").on("click", function (e) {
    var dv = $(".xqy_body_sx_xz_xx_sl_kz_z").attr("value");
    $(".xqy_body_sx_xz_xx_sl_kz_z").attr("value", dv * 1 + 1)
    // console.log($(".xqy_body_sx_xz_xx_sl_kz_z").attr("value"))
});
var xqy_res = (location.search).slice(1);
var xqy_id = xqy_res.split('=')[1];
// console.log(yhfx_id);
$.get("../api/xqy.php", {
        xqy_id: xqy_id,
        qqlx: "jz"
    },
    function (data) {
        var arr = JSON.parse(data)
        // console.log(arr);
        xqy_sj(arr);
    });

//输入数据
function xqy_sj(arr) {
    //主图图片更新
    var zt = arr.zt.split(",");
    // console.log(zt);
    $("#xqy_body_sx_zt_bigimg").attr("src", zt[0]);
    $.each(zt, function (i, n) {
        $("#xqy_body_sx_zt_kz_lb ul").append(`
        <li><img src="${n}" alt=""></li>
        `)
    });
    $("#xqy_body_sx_zt_kz_lb ul").css("width", zt.length * 68);

    //属性信息
    $(".xqy_body_sx_xz h1").text(arr.bt);

    $("#xqy_jg").text("￥" + arr.jg);
    $("#xqy_yj").text("￥" + arr.yj);
    $("#xqy_xl").text("累计销量：" + arr.xl);
    $("#xqy_pj").text("评价：" + arr.pj);
}

//购物车数据搜集 添加到数据库
function xqy_gwcc() {
    if (Cooke.ccdq('dlzt') == '"ydl"') {
        // console.log("已登录")

        //获取用户名
        var yhm = JSON.parse(Cooke.ccdq('dlyh'));
        //获取商品id
        var xres = (location.search).slice(1);
        var spid = xqy_res.split('=')[1];
        //获取颜色
        var ys = $(".xqy_body_sx_xz_xx_ys_sk.xqy_body_sx_xz_xx_xz").attr("cor");
        //获取尺码
        var cm = $(".xqy_body_sx_xz_xx_xz.xqy_body_sx_xz_xx_cm_k").text();
        //获取数量
        var sl = $(".xqy_body_sx_xz_xx_sl_kz_z").attr("value");
        var gwcsj = {
            "yhm": yhm,
            "spid": spid,
            "ys": ys,
            "cm": cm,
            "sl": sl
        }
        return gwcsj;

    } else {
        alert("请登陆");
    }
}



$(".xqy_body_sx_xz_xx_jsan_gwc").on("click", function () {
    var gwjson = xqy_gwcc();
    // cookie内购物车数据名为 gwcsj 值为商品购物车数据组成的数组
    var gwcsj = [];

    //检查cookie是否有购物车数据 没有直接写入
    if (Cooke.ccdq('gwcsj') == 'non') {
        //将当前商品购物车数据加入cooke购物车数据
        gwcsj.push(gwjson);
        //写入cookie
        Cooke.ccxr('gwcsj', JSON.stringify(gwcsj), 1, '/');
        // console.log('cookie中没有数据直接写入');
        // console.log(JSON.parse(Cooke.ccdq('gwcsj')));
    } else {
        //读取购物车数据向cooke购物车数据添加当前商品购物车数据
        //读取到的购物车数据
        var gwcsj = JSON.parse(Cooke.ccdq('gwcsj'));

        //cookie中有当前id的商品判断属性是否和当前商品购物车数据相同，默认相同
        //相同只增加商品数量
        //如果没有一个相同的就新push
        var dqsxgg = true;

        //检查cookie数据中是否有当前商品id
        for (var k in gwcsj) {

            if (gwcsj[k].goodsid == gwjson.goodsid) {

                if (gwcsj[k].ys == gwjson.ys && gwcsj[k].cm == gwjson.cm) {
                    var dqslz = gwcsj[k].sl;
                    gwcsj[k] = gwjson;
                    gwcsj[k].sl = (gwcsj[k].sl * 1) + dqslz * 1 + '';
                    dqsxgg = false;
                }
            }
        }

        //没有当前商品数据向购物车数据内添加当前商品购物车数据
        if (dqsxgg == true) {
            gwcsj.push(gwjson);
        }
        //将修改后的cookie购物车数据写入cookie
        Cooke.ccxr('gwcsj', JSON.stringify(gwcsj), 1, '/');
    };
})