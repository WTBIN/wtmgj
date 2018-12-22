//运动框架

//同时改变多个属性，在css中拿值，动画曲线选择 默认linear:均速运动 ease:缓冲 回调函数fn
//ids:运动节点  json:需要改变的属性json数据  bs定时器执行速度 linears:运动方式 fn回调函数
function animate(ids, json, bs, linears, fn) {

    if (bs == null) {
        bs = 10;
    }

    //属性值获取 传入节点对象，属性名 返回属性值的数字，单位
    function hqzs(jd, sxm) {
        var sxz = 0
        var sxdw = '';
        var ss = getComputedStyle(jd, null).getPropertyValue(sxm);
        //属性值
        sxz = ss.replace(/[a-z]/g, '') * 1;
        //属性单位;
        if (sxm != 'opacity') {
            sxdw = 'px';
        }
        return {
            sxz,
            sxdw
        };
    }

    clearInterval(ids.tts);

    //运动函数
    ids.tts = setInterval(() => {
        // console.log(1)
        //循环改变的数组，对每个值进行改变
        //参数完成计数
        var wcjs = 0;
        for (var gz in json) {
            //获取当前需要修改的属性信息
            var dqs = hqzs(ids, gz);
            //更改参数
            var ggcs = 8;
            if (linears == 'linear') {
                ggcs = 8;
            } else if (linears == 'ease') {
                ggcs = Math.abs((json[gz] - dqs.sxz) / 8);
                ggcs = ggcs > 0 ? Math.ceil(ggcs) : Math.floor(ggcs);
            }
            if (gz == 'opacity') {
                ggcs = ggcs * 0.1;
            }
            //当前值大于设定值 就需要减少当前值 更改参数为负数
            if (dqs.sxz > json[gz]) {
                // console.log(1)
                ggcs = -ggcs;
            }
            //当前值小于设定值 就需要减增加当前值 更改参数为正数
            if (dqs.sxz < json[gz]) {
                ggcs = Math.abs(ggcs);
            }
            //运行修改对象属性
            if (dqs.sxz != json[gz]) {
                var fz = dqs.sxz + ggcs + dqs.sxdw
                ids.style[gz] = fz;
            }
            //结尾修正,实际值比设定值小的时候
            if (dqs.sxz < json[gz] && Math.abs(json[gz] - dqs.sxz) < ggcs) {
                ids.style[gz] = json[gz] + dqs.sxdw;
            }
            //结尾修正,实际值比设定值大的时候
            if (dqs.sxz > json[gz] && Math.abs(dqs.sxz - json[gz]) < Math.abs(ggcs)) {
                ids.style[gz] = json[gz] + dqs.sxdw;
            }
            //如果所有参数达到设定值关闭
            if (dqs.sxz == json[gz]) {
                wcjs += 1;
            }
            //计算设置json的长度
            function cdjs(jsons) {
                var jsonLength = 0;
                for (var i in json) {
                    jsonLength++;
                }
                return jsonLength;
            }
            if (wcjs == cdjs(json)) {
                clearInterval(ids.tts);
                if (fn) {

                    fn();
                }
            }
        }
    }, bs);
};