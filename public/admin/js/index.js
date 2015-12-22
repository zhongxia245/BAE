var tab = null;
var accordion = null;
var tabItems = [];

$(function() {
    //布局
    $("#zx_layout").ligerLayout({
        leftWidth: 190,
        height: '100%',
        heightDiff: -34,
        space: 4,
        onHeightChanged: f_heightChanged
    });

    var height = $(".l-layout-center").height();

    //Tab
    $("#framecenter").ligerTab({
        height: height,
        showSwitchInTab: true,
        showSwitch: true,
        onAfterAddTabItem: function(tabdata) {
            tabItems.push(tabdata);
            saveTabStatus();
        },
        onAfterRemoveTabItem: function(tabid) {
            for (var i = 0; i < tabItems.length; i++) {
                var o = tabItems[i];
                if (o.tabid == tabid) {
                    tabItems.splice(i, 1);
                    saveTabStatus();
                    break;
                }
            }
        },
        onReload: function(tabdata) {
            var tabid = tabdata.tabid;
            addFrameSkinLink(tabid);
        }
    });

    //面板
    $("#left_accordion").ligerAccordion({
        height: height-30
    });

    $(".l-link").hover(function() {
        $(this).addClass("l-link-over");
    }, function() {
        $(this).removeClass("l-link-over");
    });

    function openNew(url) {
        var jform = $('#opennew_form');
        if (jform.length == 0) {
            jform = $('<form method="post" />').attr('id', 'opennew_form').hide().appendTo('body');
        } else {
            jform.empty();
        }
        jform.attr('action', url);
        jform.attr('target', '_blank');
        jform.trigger('submit');
    };


    tab = liger.get("framecenter");
    accordion = liger.get("accordion1");
    $("#pageloading").hide();

    pages_init();
});

function f_heightChanged(options) {
    if (tab)
        tab.addHeight(options.diff);
    if (accordion && options.middleHeight - 24 > 0)
        accordion.setHeight(options.middleHeight - 24);
}

function f_addTab(tabid, text, url) {
    tab.addTabItem({
        tabid: tabid,
        text: text,
        url: url,
        callback: function() {
            addFrameSkinLink(tabid);
        }
    });
}

function addFrameSkinLink(tabid) {
    var prevHref = getLinkPrevHref(tabid) || "";
    var skin = getQueryString("skin");
    if (!skin) return;
    skin = skin.toLowerCase();
    attachLinkToFrame(tabid, prevHref + skin_links[skin]);
}
var skin_links = {
    "aqua": "lib/ligerUI/skins/Aqua/css/ligerui-all.css",
    "gray": "lib/ligerUI/skins/Gray/css/all.css",
    "silvery": "lib/ligerUI/skins/Silvery/css/style.css",
    "gray2014": "lib/ligerUI/skins/gray2014/css/all.css"
};

function pages_init() {
    var tabJson = $.cookie('liger-home-tab');
    if (tabJson) {
        var tabitems = JSON2.parse(tabJson);
        for (var i = 0; tabitems && tabitems[i]; i++) {
            f_addTab(tabitems[i].tabid, tabitems[i].text, tabitems[i].url);
        }
    }
}

function saveTabStatus() {
    $.cookie('liger-home-tab', JSON2.stringify(tabItems));
}

function getQueryString(name) {
    var now_url = document.location.search.slice(1),
        q_array = now_url.split('&');
    for (var i = 0; i < q_array.length; i++) {
        var v_array = q_array[i].split('=');
        if (v_array[0] == name) {
            return v_array[1];
        }
    }
    return false;
}

function attachLinkToFrame(iframeId, filename) {
    if (!window.frames[iframeId]) return;
    var head = window.frames[iframeId].document.getElementsByTagName('head').item(0);
    var fileref = window.frames[iframeId].document.createElement("link");
    if (!fileref) return;
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    head.appendChild(fileref);
}

function getLinkPrevHref(iframeId) {
    if (!window.frames[iframeId]) return;
    var head = window.frames[iframeId].document.getElementsByTagName('head').item(0);
    var links = $("link:first", head);
    for (var i = 0; links[i]; i++) {
        var href = $(links[i]).attr("href");
        if (href && href.toLowerCase().indexOf("ligerui") > 0) {
            return href.substring(0, href.toLowerCase().indexOf("lib"));
        }
    }
}
