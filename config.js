var blog = (function(zx) {
    zx.author = "zhongxia";
    zx.createTime = "2015/12/04 21:30";
    zx.version = "1.0.0";
    zx.basePath = "";
    zx.urlBasePath = "src/data/";
    zx.pluginBasePath = "bower_components/";
    zx.jsBasePath = "src/js/";
    zx.cssBasePath = "src/css/";
    /**
     * 传入路径，跟资源类型，自动添加上资源的基本路径,构成绝对路径
     * @param  {[string]} path [资源路径]
     * @param  {[string]} type [资源类型，plugin/url/js/css]
     * @return {[string]}      [返回绝对路径]
     */
    zx.getAbsPath = function(path, type) {
        switch (type) {
            case "url": //HTTP 地址
                return zx.basePath + zx.urlBasePath + path + "";
                break;
            case "plugin": //插件基本路径
                return zx.basePath + zx.pluginBasePath + path + "";
                break;
            case "js": //自定义脚本路径
                return zx.basePath + zx.jsBasePath + path + "." + type;
                break;
            case "css": //自定义样式路径
                return zx.basePath + zx.cssBasePath + path + "." + type;
                break;
            default:
                break;
        }
        return ""
    }
    zx.loadCSS = function(path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
    zx.loadJS = function(path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }

    /*blog 用到的所有第三方类库插件路径*/
    zx.plugin = {
        handlebars: zx.getAbsPath("handlebars/handlebars.min.js", "plugin"),
        seajs: zx.getAbsPath("seajs/dist/sea.js", "plugin")
    }

    /*blog 用到的所有JS文件路径*/
    zx.js = {
        common: zx.getAbsPath("common", "js"),
        html5: zx.getAbsPath("html5", "js"),
        jquerySuperSlide: zx.getAbsPath("jquery.SuperSlide.2.1.1", "js"),
        jquery: zx.getAbsPath("jquery1.42.min", "js"),
        nav: zx.getAbsPath("nav", "js"),
        waterfall: zx.getAbsPath("waterfall", "js"),
    }

    /*blog 用到的所有CSS文件路径*/
    zx.css = {
        animate: zx.getAbsPath("animate", "css"),
        index: zx.getAbsPath("index", "css"),
        lrtk: zx.getAbsPath("lrtk", "css"),
        photo: zx.getAbsPath("photo", "css"),
        style: zx.getAbsPath("style", "css"),
    }

    /*blog 用到的所有HTTP URL地址*/
    zx.urls = {
        index: zx.getAbsPath("article.json", "url"),
    }

    return zx;
}(blog || {}));
