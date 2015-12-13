/*
 * smartMenu.js 智能上下文菜单插件
 * http://www.zhangxinxu.com/
 * 快速入门：http://www.zhangxinxu.com/wordpress/2011/05/jquery-smartmenu%E5%8F%B3%E9%94%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%8A%E4%B8%8B%E6%96%87%E8%8F%9C%E5%8D%95%E6%8F%92%E4%BB%B6/
 * Copyright 2011, zhangxinxu
 *
 * 2011-05-26 v1.0	编写
 * 2011-06-03 v1.1	修复func中this失准问题
 * 2011-10-10 v1.2  修复脚本放在
<head>标签中层无法隐藏的问题
 */
 
(function($) {
    var D = $(document).data("func", {});	
    $.smartMenu = $.noop;
    $.fn.smartMenu = function(data, options) {
        var B = $("body"), defaults = {
            name: "",
            offsetX: 2,
            offsetY: 2,
            textLimit: 6,
            beforeShow: $.noop,
            afterShow: $.noop
        };
        var params = $.extend(defaults, options || {});
		
        var htmlCreateMenu = function(datum) {
            var dataMenu = datum || data, nameMenu = datum? Math.random().toString(): params.name, htmlMenu = "", htmlCorner = "", clKey = "smart_menu_";
            if ($.isArray(dataMenu) && dataMenu.length) {
                htmlMenu = '<div id="smartMenu_'+ nameMenu +'" class="'+ clKey +'box">' +
                '<div class="'+ clKey +'body">' +
                '<ul class="'+ clKey +'ul">';
									
                $.each(dataMenu, function(i, arr) {
                    if (i) {
                        htmlMenu = htmlMenu + '<li class="'+ clKey +'li_separate">&nbsp;</li>';	
                    }
                    if ($.isArray(arr)) {
                        $.each(arr, function(j, obj) {
                            var text = obj.text, htmlMenuLi = "", strTitle = "", rand = Math.random().toString().replace(".", "");
                            if (text) {
                                if (text.length > params.textLimit) {
                                    text = text.slice(0, params.textLimit)	+ "…";
                                    strTitle = ' title="'+ obj.text +'"';
                                }
                                if ($.isArray(obj.data) && obj.data.length) {
                                    htmlMenuLi = '<li class="'+ clKey +'li" data-hover="true">' + htmlCreateMenu(obj.data) +
                                    '<a href="javascript:" class="'+ clKey +'a"'+ strTitle +' data-key="'+ rand +'"><i class="'+ clKey +'triangle"></i>'+ text +'</a>' + 
                                    '</li>';
                                } else {
                                    htmlMenuLi = '<li class="'+ clKey +'li">' +
                                    '<a href="javascript:" class="'+ clKey +'a"'+ strTitle +' data-key="'+ rand +'">'+ text +'</a>' + 
                                    '</li>';
                                }
								
                                htmlMenu += htmlMenuLi;
								
                                var objFunc = D.data("func");
                                objFunc[rand] = obj.func;
                                D.data("func", objFunc);
                            }
                        });	
                    }
                });
				
                htmlMenu = htmlMenu + '</ul>' +
                '</div>' +
                '</div>';
            }
            return htmlMenu;
        }, funSmartMenu = function() {
            var idKey = "#smartMenu_", clKey = "smart_menu_", jqueryMenu = $(idKey + params.name);
            if (!jqueryMenu.size()) {
                $("body").append(htmlCreateMenu());
				
                //事件
                $(idKey + params.name +" a").bind("click", function() {
                    var key = $(this).attr("data-key"),
                    callback = D.data("func")[key];
                    if ($.isFunction(callback)) {
                        callback.call(D.data("trigger"));	
                    }
                    $.smartMenu.hide();
                    return false;
                });
                $(idKey + params.name +" li").each(function() {
                    var isHover = $(this).attr("data-hover"), clHover = clKey + "li_hover";
                    if (isHover) {
                        $(this).hover(function() {							
                            $(this).addClass(clHover).children("."+ clKey +"box").show();
                            $(this).children("."+ clKey +"a").addClass(clKey +"a_hover");
                        }, function() {
                            $(this).removeClass(clHover).children("."+ clKey +"box").hide();
                            $(this).children("."+ clKey +"a").removeClass(clKey +"a_hover");
                        });
                    }
                });
                return $(idKey + params.name);
            } 
            return jqueryMenu;
        };
		
        $(this).each(function() {
            this.oncontextmenu = function(e) {
                //回调
                if ($.isFunction(params.beforeShow)) {
                    params.beforeShow.call(this);	
                }
                e = e || window.event;
                //阻止冒泡
                e.cancelBubble = true;
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                //隐藏当前上下文菜单，确保页面上一次只有一个上下文菜单
                $.smartMenu.hide();
                var st = D.scrollTop();
                var jqueryMenu = funSmartMenu();
                if (jqueryMenu) {
                    if($(window).width() - e.clientX - params.offsetX < 140 && $(window).height() - e.clientY - params.offsetY >= jqueryMenu.height()){
                        jqueryMenu.css({
                            display: "block",                        
                            left: $(window).width() - ($(window).width() - e.clientX - params.offsetX + 140),
                            top: e.clientY + st + params.offsetY
                        });
                    }else if($(window).height() - e.clientY - params.offsetY < jqueryMenu.height() && $(window).width() - e.clientX - params.offsetX >= 140){
                        jqueryMenu.css({
                            display: "block",                        
                            left: e.clientX + params.offsetX,
                            top: $(window).height() - ($(window).height() - e.clientY - params.offsetY + jqueryMenu.height())
                        });
                    }else if(($(window).height() - e.clientY - params.offsetY < jqueryMenu.height()) && ($(window).width() - e.clientX - params.offsetX < 140 )){
                        jqueryMenu.css({
                            display: "block",                        
                            left: $(window).width() - ($(window).width() - e.clientX - params.offsetX + 140),
                            top: $(window).height() - ($(window).height() - e.clientY - params.offsetY + jqueryMenu.height())
                        });
                    }else{
                        jqueryMenu.css({
                            display: "block",
                            left: e.clientX + params.offsetX,
                            top: e.clientY + st + params.offsetY
                        });
                    }
                    D.data("target", jqueryMenu);
                    D.data("trigger", this);
                    //回调
                    if ($.isFunction(params.afterShow)) {
                        params.afterShow.call(this);	
                    }
                    return false;
                }
            };
        });
        if (!B.data("bind")) {
            B.bind("click", $.smartMenu.hide).data("bind", true);
        }
    };
    $.extend($.smartMenu, {
        hide: function() {
            var target = D.data("target");
            if (target && target.css("display") === "block") {
                target.hide();
            }		
        },
        remove: function() {
            var target = D.data("target");
            if (target) {
                target.remove();
            }
        }
    });
})(jQuery);