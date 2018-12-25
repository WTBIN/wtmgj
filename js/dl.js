if (JSON.parse(Cooke.ccdq('dlzt')) == "ydl") {
    window.location.href = "http://" + window.location.host;
}

$("#dl_dlk_nk_kk_kz_dl").on("click", function (e) {
    $("#dl_dlk_nk_kk_kz_dl").addClass("dl_dlk_nk_kk_kz_xz");
    $("#dl_dlk_nk_kk_kz_zc").removeClass("dl_dlk_nk_kk_kz_xz");
    $("#dl_dlk_nk_kk_xs").css("left", "0px");
    $(".dl_dlk_nk_kk_xs_zt").css("display", "none");
});
$("#dl_dlk_nk_kk_kz_zc").on("click", function (e) {
    $("#dl_dlk_nk_kk_kz_zc").addClass("dl_dlk_nk_kk_kz_xz");
    $("#dl_dlk_nk_kk_kz_dl").removeClass("dl_dlk_nk_kk_kz_xz");
    $("#dl_dlk_nk_kk_xs").css("left", "-400px");
    $(".dl_dlk_nk_kk_xs_zt").css("display", "none");
});
console.log(window.location.host)

function dlbdyz(db) {
    // console.log("验证")
    var reg = /^[a-z0-9_-]{6,16}$/;
    if (!reg.test(db)) {
        $(".dl_dlk_nk_kk_xs_zt").css("display", "block");
        return false;
    }
    return true;
}
//登陆注册验证
$(".dl_dlk_nk_kk_xs_dl_sr").blur(function (e) {
    dlbdyz(e.target.value);
})

$("form input").focus(function (e) {
    $(".dl_dlk_nk_kk_xs_zt").css("display", "none");
})

// $("#" + db + " .dl_dlk_nk_kk_xs_dl_sr");
//验证当前框的内容是否正确
$(".dl_dlk_nk_kk_xs_dl_an").on("click", function (e) {
    //账号
    var dzh = $("#" + e.target.parentNode.id + " .dl_dlk_nk_kk_xs_dl_sr");
    var jstz = true;
    jstz = dlbdyz(dzh[0].value);
    jstz = dlbdyz(dzh[1].value);
    if (jstz) {
        // console.log("提交验证通过")
        if (e.target.value == "登陆") {
            var lxx = "dl";
        } else {
            var lxx = "zc";
        }

        $.post("../api/dl.php", {
                fs: lxx,
                zh: dzh[0].value,
                pw: dzh[1].value
            },
            function (data, status) {
                alert("执行结果：" + data + "\n状态：" + status);
                //登陆跳转首页 设置cookie
                if (data == "登陆成功" || data == "注册成功") {
                    Cooke.ccxr('dlzt', JSON.stringify("ydl"), 6, '/');
                    window.location.href = "http://" + window.location.host;
                }
            });
    }
});