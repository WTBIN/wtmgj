var yhfx_res = (location.search).slice(1);
var yhfx_id = yhfx_res.split('=')[1];
// console.log(yhfx_id);
$.get("../api/yhfx.php", {
        yhfx_id: yhfx_id,
    },
    function (data) {
        console.log(data);
        $(".yhfx_body_nr_l_img img").attr("src", "http://"+window.location.host+"/"+data);
    
    });