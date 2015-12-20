var express = require('express');
var router = express.Router();


//类似拦截器，Java的过滤器
router.use(function(req, res, next) {
    console.log('zhongxia' + req.originalUrl);
    //这里设置的值，在layout所有页面共用的模板，数据可以写在这里
    res.locals = {
        motto: '青春是打开了,就合不上的书。人生是踏上了，就回不了头的路，爱情是扔出了，就收不回的赌注。',
        menus: [{
                url: "/index",
                title: "首页"
            }, {
                url: "/about",
                title: "关于我"
            }, {
                url: "/riji",
                title: "个人日记"
            },
            /*
             {
                url: "/shuo",
                title: "碎言碎语"
            },
             {
                url: "/xc",
                title: "相册展示"   //这个又点问题，懒加载的图片高度没办法自适应
            },
            {
                url: "/learn",
                title: "学无止境"
            },
            */
            {
                url: "/guestbook",
                title: "留言板"
            }
        ],
        name: "zhongxia",
        job: "全栈工程师",
        introduce: "熟练掌握后端语言：ASP.NET,Java </br>数据库：SqlServer,Oracle </br>前端技能：NodeJS,Angular,BootStrap",
        goodItems: [{
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }],
        latestItems: [{
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }],
        maxItems: [{
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }, {
            title: "网站项目实战开发（-）",
            url: "/index/new"
        }]
    };
    next();
});

/*
 //登录拦截器
app.use(function(req, res, next) {
    var url = req.originalUrl;
    req.session = req.session || {};
    if (url != "/login" && !req.session.user) {
        return res.redirect("login");
    }
    next();
});
*/

/*
    这边要注意一个问题，那就是
    1. 拦截器需要放在 路由处理之前，否则路由处理之后就结束了。而没有经过过滤器
    2. 因为政策路由处理没有 使用next()
    3. 自己的路由处理要放在错误处理之前，否则错误处理也是没有next() 直接渲染出404页面
 */

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.redirect("/index");
});

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render('blog/index', {
        title: 'blog index',
        articles: [{
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "段亮",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "段亮",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "blog/images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "段亮",
            time: "2015-12-05",
            category: "学无止境"
        }]
    });
});

/* GET detail article page. */
router.get('/index/:detail', function(req, res, next) {
    res.render('blog/new', {
        notUseRight: true, //不使用右侧的模板
        title: '浅谈：html5和html的区别',
        author: "zhongxia",
        time: "2015-12-05",
        category: "学无止境",
        content: '<div style="line-height: 2.25; text-align: left;"><span style="line-height: 2.25;"><font face="Microsoft Yahei">H5是国人创建的专有名词。</font></span></div><div style="line-height: 2.25; text-align: left;"><font face="Microsoft Yahei">H5是：在<font size="3" color="#c00000"><b>微信</b></font>等<b><font size="3" color="#c00000">移动端</font></b>，看起来<b><font size="3" color="#c00000">酷炫</font></b>，能够提升B格，能被<font size="3" color="#c00000"><b>广泛分享</b></font>的东西【普遍的解释】</font></div><div><hr style="line-height: 2.25; text-align: left;"><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5;"><font face="Microsoft Yahei"><span style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;">著作权归作者所有。</span><br style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;"><span style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;">商业转载请联系作者获得授权，非商业转载请注明出处。</span><br style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;"><span style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;">作者：王德福</span><br style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;"><span style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;">链接：http://www.zhihu.com/question/30363342/answer/53957010</span><br style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;"><span style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;">来源：知乎</span><br style="background-color: rgb(255, 255, 255); color: rgb(127, 127, 127); font-size: 12px; font-style: normal; font-weight: normal; text-align: left;"><br></font></span></div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5;"><font face="Microsoft Yahei">H5不是一个技术，而是一个标准。</font></span></div></div><div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5; font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">（标准的意思就是：学生准则手册。你可以按照准则做，甚至可以超出准则更加严格的要求自己，也可以不按照准则来，但是会被老师训斥小伙伴讨厌，别人都不找你玩，就像IE6一样。）</font></span></div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5; font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei"><br></font></span></div><div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5;"><font face="Microsoft Yahei"><font color="#c00000"><b>但是实际上我们在说到H5的时候，并不是指标准，也不是指标准的应用，而是一个硬生生造出来的奇怪概念合集</b></font>，所以我是旗帜鲜明的反对这个称呼的。</font></span></div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5;"><font face="Microsoft Yahei"><br></font></span></div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5;"><font face="Microsoft Yahei">目前对于非技术人员的认知是：<font color="#c00000" size="3"><b>可以在朋友圈分享，看起来很炫的页面。</b></font></font></span></div><div style="line-height: 2.25; text-align: left;"><span style="line-height: 1.5;"><font face="Microsoft Yahei"><br></font></span></div><div><div><div><div style="line-height: 1.875; text-align: left;"><font color="#7f7f7f" face="Microsoft Yahei"><span style="line-height: 18px;"></span></font></div></div></div></div></div></div><div><div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">他们实际要的东西拆开来看大概包括以下技术点; </font></span></span></div></div></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">1. <span><b>页面素材预加载技术</b></span>，可以使用createJS之中的<b>preloadJS</b>。我没有看preloadJS的源码，不过预加载并不是HTML5标准中更新的方法。 </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">2. <b>音乐加载播放技术</b>，createJS中同样有<b>soundJS</b>可以实现，而且这部分说起来确实是HTML5标准支持的内容，在上个时代并没有audio这样的标签。 </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">3 <b>.<span>可以滑动的页面</span></b>，大多数是用了<b>swiper.js</b>这个Jquery插件，也有一些是手写的swipe，比较拙劣的手写版页面是不会跟手滑动的，其中touchstart等四个touch系列的事件是HTML5标准中的事件 </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">4.&nbsp;<span><b>可以涂抹擦除</b></span>，多半是canvas叠加层，<b>canvas</b>是HTML5标准里面的标签，是代表了先进生产力的标签。 </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">5.&nbsp;<span><b>有动态的文字和图片</b></span>，常见的是使用了css3或者直接使用js动画。很多时候提到HTML5多半还会带上CSS3，而CSS的分级又是另外的一个问题了，在不同的项目标准上，CSS会独立定级，以后应该不会有CSS4这个东西，所以大家也不用担心在H5以后又冒出来了C4（不过真是想用C4炸死那些每天把H5挂在嘴上的人） </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">6.&nbsp;<span><b>可以填表报名</b></span>，这是最基本的表单，是有网页以来就有的东西。 </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">7.&nbsp;<span><b>可以支持分享自定义的文案和图片</b></span>，这个是用到了微信的jssdk，和HTML标准半毛钱关系都没有。 </font></span></span></div><div style="line-height: 1.875;"><span><span style="font-size: 12px;"><font color="#7f7f7f" face="Microsoft Yahei">8.还有其他我想起来再补充的。</font></span></span></div><div style="line-height: 1.875;"><font face="Microsoft Yahei"><br></font></div><div style="line-height: 1.875;"><span><font face="Microsoft Yahei"><div style="font-size: 12px; color: rgb(127, 127, 127);">所以我们在谈论H5的时候，实际上是一个解决方案，一个看起来酷炫的移动端onepage网站的解决方案。而这个解决方案不仅包含了HTML5新增的audio标签，canvas，拖拽特性，本地存储，websocket通信，同时也包括了盒模型，包括绝对定位，包括一切前端的基本知识。</div><div style="font-size: 12px; color: rgb(127, 127, 127);"><br></div><div style="font-size: 12px; color: rgb(127, 127, 127);"><div><div>有学弟来问我说，学长我想学H5，应该从哪里开始？<br>我说<b>HTML5</b>新增特性在<b>W3C</b>上都可以查得到的。<br>学弟说，不，我想学的是H5，想做<b>H5的页面</b>。<br>于是我猜测他所指的就是上面论述的这种<b>酷炫小页面</b>，我就说，那你要先学习<b>HTML</b>，包括HTML5的新标准和之前的全部标准，然后学<b>CSS</b>以及<b>CSS3</b>，了解它们在浏览器的实现情况，<b>原生JS了解一点</b>就可以，大多的操作可以用<b>Jquery</b>，了解常用的几个Jquery插件的用法，应该就差不多了。如果想要做更酷炫的的，学一下egret或者cocos2d更好。如果要优化加载速度，还要学一下<b>grunt</b>一类的<b>自动化工具</b>。<b>微信的sdk</b>有很多坑，至少nodejs或者php一类的后端语言要会一点。<br>学弟说，那这不就是前端了么？我只是想学H5啊。</div></div><br></div><div><hr style="font-size: 12px; color: rgb(127, 127, 127);"><div><font color="#7f7f7f" style="font-size: 12px;">著作权归作者所有。</font><br><font color="#7f7f7f" style="font-size: 12px;">商业转载请联系作者获得授权，非商业转载请注明出处。</font><br><font color="#7f7f7f" style="font-size: 12px;">作者：思扬</font><br><font color="#7f7f7f" style="font-size: 12px;">链接：http://www.zhihu.com/question/30363342/answer/49952957</font><br><font color="#7f7f7f" style="font-size: 12px;">来源：知乎</font><br><br><div><font color="#7f7f7f" style="font-size: 12px;">对于知乎多个相关问题里批判H5的叫法，我只想说：</font><blockquote style="font-size: 12px; color: rgb(127, 127, 127);">图样图森破，上台拿衣服</blockquote><br><font color="#7f7f7f" style="font-size: 12px;">打个比方，如果有个人跟你说：“我要做个网站，H5的”。</font><br><font color="#7f7f7f" style="font-size: 12px;">那TA是想让你用header、footer、nav、section等标签？</font><br><font color="#7f7f7f" style="font-size: 12px;">让你用Geolocation、localStorage、Web Worker等API？</font><br><font color="#7f7f7f" style="font-size: 12px;">都不是，TA们想要的功能你用HTML4就都能做出来了。</font><br><font color="#7f7f7f" style="font-size: 12px;">更别说还得兼容老IE浏览器呢。</font><br><br><font color="#7f7f7f" style="font-size: 12px;">所以年轻人，你们要用心理解客户的需求，不要沉迷于技术。</font><br><font color="#7f7f7f" style="font-size: 12px;">人家一定不是让你去用一种不被所有浏览器兼容的技术。</font><br><br><font color="#7f7f7f" style="font-size: 12px;">所以，H5指的不是HTML5，而是</font><span style="font-size: 12px;">某种在</span><font size="3" color="#c00000"><b>微信等移动端</b></font><span style="font-size: 12px;">看上去</span><font color="#c00000" size="3"><b>酷炫</b></font><span style="font-size: 12px;">能够提升公司格调顺便亮瞎访问者氪金狗眼顿升膜拜之心就算没有内容也能被</span><font color="#c00000" size="3"><b>广泛转发分享</b></font><span style="font-size: 12px;">的一种东西。</span></div></div><div><hr><br></div><div><span style="font-style: normal; text-align: start;"><div><font color="#7f7f7f" style="font-size: 12px;"><font>著作权归作者所有。</font><br><font>商业转载请联系作者获得授权，非商业转载请注明出处。</font><br><font>作者：于江水</font><br><font>链接：http://www.zhihu.com/question/30363342/answer/61695940</font><br><font>来源：知乎</font></font><br><div><font color="#222222" style="font-size: 13px;">去年来淘宝 UED 实习的时候，第一次听到了 H5 这个名词，比较疑惑，还以为是什么内部的无线框架。</font><br><font color="#222222" style="font-size: 13px;">后来才慢慢理解，</font><b><font color="#c00000" size="3">H5 ≈ 无线、手淘 WebView 里面的前端项目。</font></b></div></div></span><hr><div>著作权归作者所有。<br>商业转载请联系作者获得授权，非商业转载请注明出处。<br>作者：于江水<br>链接：http://www.zhihu.com/question/30363342/answer/61695940<br>来源：知乎<br><br><div>去年来淘宝 UED 实习的时候，第一次听到了 H5 这个名词，比较疑惑，还以为是什么内部的无线框架。<br><br>后来才慢慢理解，H5 ≈ 无线、手淘 WebView 里面的前端项目。</div></div><hr><b style="color: rgb(34, 34, 34); font-size: 13px; font-style: normal; text-align: start;"><span style="color: rgb(34, 34, 34); font-size: 13px; font-style: normal; font-weight: normal; text-align: start;">H5 是中国人制造的一个专有名词，是一种用来替代 Adobe Flash，实现与之相同或相似网页特效的产品。</span><br></b></div><div><b style="color: rgb(34, 34, 34); font-size: 13px; font-style: normal; text-align: start;">只要可以让不支持 Flash 的 iPhone 显示类似 Flash 的效果,<b style="color: rgb(34, 34, 34); font-size: 13px; font-style: normal; text-align: start;">我才不管你用什么办法实现的。</b></b><br></div><div><b style="color: rgb(34, 34, 34); font-size: 13px; font-style: normal; text-align: start;"><b style="color: rgb(34, 34, 34); font-size: 13px; font-style: normal; text-align: start;"><span style="color:rgb(34, 34, 34);font-family:\'Helvetica Neue\', Helvetica, Arial, sans-serif;font-size:13px;font-style:normal;font-weight:normal;text-align:start;">所谓 H5 产品可以不要求使用 HTML5 语法（尽管这个词源出于此），只是使用浏览器可以兼容<span style="color:rgb(34, 34, 34);font-family:\'Helvetica Neue\', Helvetica, Arial, sans-serif;font-size:13px;font-style:normal;font-weight:normal;text-align:start;">的 JS 特效或者一部分 CSS3 效果就可以。甚至可以在带宽足够的<span style="color:rgb(34, 34, 34);font-family:\'Helvetica Neue\', Helvetica, Arial, sans-serif;font-size:13px;font-style:normal;font-weight:normal;text-align:start;">情况下直接用占满网页的视频顶上。</span></span></span><br></b></b></div><div><img data-media-type="image" src="http://note.youdao.com/yws/public/resource/aa8cb37deb008683e2908239a0018c26/51E742851E6249F6AA8BAF0EB84C330E" /></div><br></div><br></font></span></div><div><div><div><div style="line-height: 1.875; text-align: left;"><font color="#7f7f7f" face="Microsoft Yahei"><span style="line-height: 18px; font-size: 12px;"></span></font></div><div style="line-height: 1.875; text-align: left;"><font face="Microsoft Yahei"><br></font></div><div style="line-height: 2.25; text-align: left;"><font face="Microsoft Yahei"><br></font></div></div><div style="line-height: 2.25; text-align: left;"><font face="Microsoft Yahei"><br></font></div></div><div style="line-height: 2.25; text-align: left;"><br></div></div>'
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('blog/about', {
        title: 'blog about',
        content: "博主是一个草根全栈开发者，数据库（SqlServer，Oracle），ASP.NET，Java,NodeJS,以及前端技术都比较熟练掌握，有独立开发项目的经验。"
    });
});

/* GET shuo page. */
router.get('/shuo', function(req, res, next) {
    res.render('blog/shuo', {
        title: 'blog shuo',
        items: [{
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }, {
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }, {
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }, {
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }, {
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }, {
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }, {
            content: "那个可以任意挥霍的年纪，人们叫它'青春'。",
            time: "2015-12-06"
        }]
    });
});

/* GET xc page. */
router.get('/xc', function(req, res, next) {
    res.render('blog/xc', {
        title: 'blog xc',
        items: [{
            imgPath: "blog/images/photo/1.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/1.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/1.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }],
        lazyItems: [{
            imgPath: "blog/images/photo/8.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/8.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/8.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/8.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/8.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/8.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/7.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/6.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/5.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/4.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/3.jpg",
            alt: "blog/images/photo/8.jpg"
        }, {
            imgPath: "blog/images/photo/2.jpg",
            alt: "blog/images/photo/8.jpg"
        }]
    });
});

/* GET learn page. */
router.get('/learn', function(req, res, next) {
    res.render('blog/learn', {
        title: 'blog learn'
    });
});

/* GET riji page. */
router.get('/riji', function(req, res, next) {
    res.render('blog/riji', {
        title: 'blog riji',
        items: [{
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "blog/images/my_1.jpg"
        }]
    });
});
/* GET guestbook page. */
router.get('/guestbook', function(req, res, next) {
    res.render('blog/guestbook', {
        title: 'blog guestbook'
    });
});


module.exports = router;
