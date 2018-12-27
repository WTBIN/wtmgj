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
})

//生成当前商品传入购物车数据
function xqy_gwcc(){
    // var 
}


