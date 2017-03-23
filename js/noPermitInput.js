/**
 * Created by zhangkun on 2016/12/13.
 * 基于Jquery的数值输入框.
 */
(function ($) {
    // 数值输入框
    $.fn.numbox = function (options) {
        var type = (typeof options);
        if (type == 'object') {
            // 创建numbox对象
            if (options.width) this.width(options.width);
            if (options.height) this.height(options.height);
            this.bind("input propertychange", function (obj) {
                numbox_propertychange(obj.target);
            });

            this.bind("change", function (obj) {
                var onChange = options.onChange;
                if (!onChange) return;
                var numValue = Number(obj.target.value);
                onChange(numValue);
            });
            this.bind("hide", function (obj) {
                var onHide = options.onHide;
                if (!onHide) return;
                var numValue = Number(obj.target.value);
                onHide(numValue);
            });
            return this;
        }
        else if (type == 'string') {
            // type为字符串类型，代表调用numbox对象中的方法
            var method = eval(options);
            if (method) return method(this, arguments);
        }
    }
    // 属性值变化事件
    function numbox_propertychange(numbox) {
        if (numbox.value == '-' || numbox.value == numbox.oldvalue) return;
        var numvalue = Number(numbox.value);
        if (isNaN(numvalue)) {
            if(numbox.oldvalue){
                numbox.value = numbox.oldvalue;
            }else{
                numbox.value = '';
            }
        }
        else {
            numbox.oldvalue = numbox.value;
        }
    }
    // 获取值
    function getValue(numbox) {
        var value = numbox.val();
        return Number(value);
    }
    // 设置值
    function setValue(numbox, params) {
        if (params[1] == undefined) return;
        var numvalue = Number(params[1]);
        if (!isNaN(numvalue)) {
            for (var i = 0; i < numbox.length; i++) {
                numbox[i].focus();
                numbox[i].value = numvalue;
                numbox[i].oldvalue = numvalue;
            }
        }
    }
})(jQuery);
