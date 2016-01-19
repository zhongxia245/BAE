'use strict';
(function ($, exports) {
    /**
     * 渲染handlerbars 模板
     * @param selector 渲染在什么位置
     * @param tmp_selector 模板ID
     * @param data 数据
     * @param isAppend 是否追加到指定位置内
     */
    exports.render = function (selector, tmp_selector, data, isAppend) {
        //获取模板
        var tmp = $(tmp_selector).html();
        if (tmp) {
            //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
            var fn_template = Handlebars.compile(tmp);
            //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
            if (isAppend) {
                $(selector).append(fn_template(data));
            } else {
                $(selector).html(fn_template(data));
            }
        } else {
            console.log('Not Find ID:' + tmp_selector + '> template....');
        }
    }
    exports.scrollTo = function (selector, duration, top) {
        duration = duration || 500;
        top = top || 139;
        var offset_top = $(selector).offset().top;
        top = offset_top - top;
        $('body').animate({
            scrollTop: top
        }, duration);
        return false;
    }
})($, window);
// 顶部列表
$.getJSON('data/nav_top.json', function (json) {
    window.render('#id_nav_top', '#nav', json);
});

/*~~~~~~~~~~~~~~~~~~~~~~~请求数据，生成页面 start~~~~~~~~~~~~~~~~~~~~*/
/**
 * 动态生成左侧列表，和中间的导航列表
 */
$.getJSON(config.categoryUrl, function (categorys) {
    var mapCategory = {};
    for (var i = 0, length = categorys.length; i < length; i++) {
        var obj = categorys[i];
        mapCategory[categorys[i].value] = categorys[i].name;
    }

    $.getJSON(config.navUrl, function (data) {
        //根据类别分组
        var arrs = _.toArray(_.groupBy(data, 'category'));
        var sidebarData = [];
        for (var i = 0, length = arrs.length; i < length; i++) {
            var subArr = arrs[i];
            var name = subArr[0].category;
            var title = mapCategory[name];
            var sideItem = {
                url: "#",
                name: name,
                title: title
            };
            if (i === 0) {
                sideItem.active = true;
            }
            sidebarData.push(sideItem);
            var data = {
                title: title,
                name: name,
                items: subArr
            }
            window.render(config.id_main, config.tpl_main, data, true);
        }
        window.render(config.id_sidebar, config.tpl_sidebar, sidebarData);

        //显示footer
        $('footer').show();
    });
});

/*~~~~~~~~~~~~~~~~~~~~~~~给标签添加事件 start~~~~~~~~~~~~~~~~~~~~*/
/**
 * 左侧列表点击事件，定位到指定位置
 */
$('#id_nav_sidebar').on('click', function (e) {
    e = e || window.event;
    var $target = $(e.target);
    $target.parent().siblings().removeClass('active');
    $target.parent().addClass('active');
    var name = $target.attr('name');
    scrollTo('#id_' + name);
});

$('#go-top').on('click', function () {
    scrollTo("#top", 500, 200);
});

$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 400) {
        $('#go-top').show();
    } else {
        $('#go-top').hide();
    }
});


