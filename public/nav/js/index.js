'use strict';
(function($, exports) {
    exports.render = function(selector, tmp_selector, data) {
        //获取模板
        var tmp = $(tmp_selector).html();
        if (tmp) {
            //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
            var fn_template = Handlebars.compile(tmp);
            //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
            $(selector).html(fn_template(data));
        } else {
            console.log('Not Find ID:' + tmp_selector + '> template....');
        }
    }
    exports.scrollTo = function(selector, duration, top) {
        duration = duration || 500;
        top = top || 139;
        var offset_top = $(selector).offset().top;
        console.log(offset_top);
        $('body').animate({
            scrollTop: offset_top - top
        }, duration);
        return false;
    }
})($, window);
// 顶部列表
$.getJSON('data/nav_top.json', function(json) {
    window.render('#id_nav_top', '#nav', json);
});
// 左侧列表
$.getJSON('data/nav_left.json', function(json) {
    window.render('#id_nav_sidebar', '#nav', json);
    $.each(json, function(index, item) {
        $.getJSON(item.rest, function(data) {
            window.render(item.name, item.template, data);
        });
    });
});
$('#id_nav_sidebar').bind('click', function(e) {
    e = e || window.event;
    var $target = $(e.target);
    $target.parent().siblings().removeClass('active');
    $target.parent().addClass('active');
    var name = $target.attr('name');
    scrollTo(name);
});

// // 常用框架集
// $.getJSON('data/kjj.json', function(json) {
//     window.render('#id_kjj', '#nav_kjj', json);
// });
// // 博客列表
// $.getJSON('data/bkll.json', function(json) {
//     window.render('#id_bkll', '#nav_bkll', json);
// });
