(function() {
    window.zx = window.zx || {};
    var exports = window.zx;
    exports.tip = function(options, duration) {
        var defaultOption = {
            title: '提示信息'
        }
        options = $.extend(defaultOption, options);
        duration = duration || 2000;
        var _tip = $.ligerDialog.tip(options);
        setTimeout(function() {
            _tip.close();
        }, duration);
    }
})();
