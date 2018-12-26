// console.log(1)
//向第插入第一个
var pbl_zb = '<div class="body_pblbox_l_g"><a href="" class="body_pblbox_l_g_tp"><img src="img/181121_1b2gfjkjblfl8d187908i2gd7fag3_564x640.gif" alt=""></a></div>';
$("#body_pblbox .body_pblbox_l:nth-child(1)").prepend(pbl_zb);
var pbl_sc = '<div class="body_pblbox_l_g"><a href="" class="body_pblbox_l_g_tp"><img src="img/181031_1jeaf9caahj2162802dlha9hje64k_564x1052.jpg" alt=""></a></div>';
$("#body_pblbox .body_pblbox_l:nth-child(4)").prepend(pbl_sc);
var pbl_sys = [
    "img/fx/1.webp",
    "img/fx/2.webp",
    "img/fx/3.webp",
    "img/fx/4.webp",
    "img/fx/5.webp",
    "img/fx/6.webp"
]
//请求次数
var qqcs=0;
//数据填充
function pbl_sjtc() {

    // console.log(sl)
    var arr = [];
    //发送请求
    qqcs++
    $.get("../api/pbl.php", {
            qbllx: "sj",
            qblsl: qqcs
        },
        function (data) {
            // console.log(data);
            arr = JSON.parse(data);
            // console.log(arr);
            sjts()
        });


    //循环数据数值
    function sjts() {
        $.each(arr, function (i, n) {
            var sz = [];
            //获取所有列最后一个子元素的位置
            $.each($(".body_pblbox_l>div:last-child"), function (i, n) {
                // console.log($(".body_pblbox_l>div:last-child")[i])
                // console.log(n)
                var $n = $(n);
                var tops = $n.offset();
                sz.push(tops.top);
            });
            // console.log(sz)
            //选出最小的
            //最小的下标
            var zxxb = 0;

            var min = sz[0];

            for (var i = 1; i < sz.length; i++) {
                var cur = sz[i];
                if (cur < min) {
                    min = cur;
                    zxxb = i;
                }
            }

            // console.log(min);
            // console.log($("#body_pblbox .body_pblbox_l:nth-child("+(zxxb+1)+")"))
            $("#body_pblbox .body_pblbox_l:nth-child(" + (zxxb + 1) + ")").append(`<div class="body_pblbox_l_g" fxif=${n.id}>
            <div class="body_pblbox_l_g_sc">
                <span><img src="img/181029_7j68l3gif51i6973854b675elkile_52x52.png" alt=""></span>
                <span><img src="img/181207_3ki7d4c2di2j4ea4c69afdfl39370_50x50.png" alt=""></span>
            </div>
            <div></div>
            <a href="${"http://"+window.location.host+"/html/yhfx.html?id="+n.id}" class="body_pblbox_l_g_tp" target="_blank">
                <img src="${n.imgurl}" alt="">
                <div class="body_pblbox_l_g_wz">冬天保暖必备了今天佩戴了一个发带比较ins风的感觉
                    长袜更是保命穿搭也会比较显腿长。加上比较复古风的斜挎包包严严实实好看的出门了～</div>
            </a>
        </div>`)
        });
    }

}

pbl_sjtc();

$(window).scroll(function (event) {
    if ($(document).height() - $(document).scrollTop() < 1900) {
        pbl_sjtc();
    }

});