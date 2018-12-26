//轮播
$(document).ready(function () {
    //滚动函数
    function lbgd() {
        //一张图片的宽为 768px
        $("#sc_body_bdjh_banner_lb_box_imgs").animate({
            left: '-=768px'
        }, 700, fw);
        //最后一张复位
        function fw() {
            var dqlf = $("#sc_body_bdjh_banner_lb_box_imgs").css("left").replace(/[^0-9]/ig, "") * 1;
            if (dqlf == 1536) {
                $("#sc_body_bdjh_banner_lb_box_imgs").css("left", "0");
            }
            ydkz();
        }
        //更新控制圆点
        function ydkz() {
            //清空样式
            $("#sc_body_bdjh_banner_lb_box_xl li").removeClass();
            //计算当前是第几张
            var xzlft = $("#sc_body_bdjh_banner_lb_box_imgs").css("left").replace(/[^0-9]/ig, "") * 1;
            var dz=(xzlft/768)+1;
            // console.log(dz)
            $("#sc_body_bdjh_banner_lb_box_xl li:nth-child("+dz+")").addClass("sc_body_bdjh_banner_lb_box_xl_xz");

        }
    }
    //自动滚动
    var sc_zdbf = setInterval(lbgd, 3000);
    //鼠标滑入清除定自动定时器
    $("#sc_body_bdjh_banner_lb").on('mouseover', () => {
        clearTimeout(sc_zdbf);
    })

    //移出再次开启
    $("#sc_body_bdjh_banner_lb").on('mouseout', () => {
        sc_zdbf = setInterval(lbgd, 3000);
    })

});