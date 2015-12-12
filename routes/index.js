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
    res.redirect("/index");
});

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render('blog/index', {
        title: 'blog index',
        articles: [{
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "zhongxia",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "段亮",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
            summary: '最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联 网快速发展的时代，尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。 html5+css3也逐渐的成为新一代web前端技术.....',
            author: "段亮",
            time: "2015-12-05",
            category: "学无止境"
        }, {
            title: "浅谈：html5和html的区别",
            url: "index/new",
            imgPath: "images/s1.jpg",
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
        content: '这几天真的太忙了，白天要上课，晚上还要策划客户的网站方案，经常弄到一两点才睡，也没什么时间去学习了。 不过最近看群里聊天聊得最火热的莫过于手机网站和html5这两个词。可能有人会问，这两者有什么关系呢？随着这移动互联网快速发展的时代， 尤其是4G时代已经来临的时刻，加上微软对"XP系统"不提供更新补丁、维护的情况下。"html5+css3"也逐渐的成为新一代web前端技术， 手机网站也渐渐的成为一种趋势。什么是html5呢？' + '<br/> html5最先由WHATWG(Web 超文本应用技术工作组)命名的一种超文本标记语言，随后和W3C的xhtml2.0(标准)相结合， 产生现在最新一代的超文本标记语言。可以简单点理解成：HTML 5 ≈ HTML+CSS 3+JS+API。hmtl5于html的区别' + '<br/> 我们现在web前端开发的静态网页，一般都是html4.0。同时是符合W3C的xhtml1.0规范来的。那么他们两者又有什么实质性的区别呢？' + '<br/> 1.在文档类型声明上' + '<br/> html:!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"' + '<html xmlns="http://www.w3.org/1999/xhtml">' + 'html5:!doctype html' + '<br/> 由这两者对比可见：在文档声明上，html有很长的一段代码，并且很难记住这段代码，想必很多人都是靠工具直接生成的吧？而html5却是不同， 只有简简单单的声明，这也方便人们的记忆。' + '<br/> 2.在结构语义上' + '<br/> html:没有体现结构语义化的标签，我们通常都是这样来命名的div id="header".这样表示网站的头部。' + '<br/> html5:在语义上却有很大的优势。提供了一些新的标签，比如:header、article、footer' + '<br/> 提供这样的标签有什么样的好处呢？我觉得最主要还是在SEO的优化上，不管是我们自己来对网页模块命名，还是有这样的标签。因为做网站最终的目的只有一个，那就是盈利。 想盈利的话，就只有通过SEO优化的技术，把你网站排名做上来，这样你的网站才有价值，且正是这一点，html5符合了这一点。 为什么这么说呢？因为他定义的这些标签，更加有利于优化，蜘蛛能识别你。' + '<br/> 总结：虽然在前几年html5已经出来了，但是那时候因为不够成熟，时机不对，才没被兴起。在这互联网高速发展的时候，也是来临4G的时代。我们还不学习hml5+css3我们就out了！'
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
            imgPath: "images/photo/1.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/1.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/1.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }],
        lazyItems: [{
            imgPath: "images/photo/8.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/8.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/8.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/8.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/8.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/8.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/7.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/6.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/5.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/4.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/3.jpg",
            alt: "images/photo/8.jpg"
        }, {
            imgPath: "images/photo/2.jpg",
            alt: "images/photo/8.jpg"
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
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
        }, {
            content: "时间好象一把尺子，它能衡量奋斗者前进的进程。时间如同一架天平，它能称量奋斗者成果的重量；时间就像一把皮鞭，它能鞭策我们追赶人生的目标。时间犹如一面战鼓，它能激励我们加快前进的脚步。",
            imgPath: "images/my_1.jpg"
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
