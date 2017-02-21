var loginUrl = '/login.do';
var toAdmin = '../admin/';
$(function () {
    $('#username').focus(); //刚进来，用户名文本框获取焦点
    initAnimation();
    bindEvent();
});

/**
 * 初始化动画效果
 * @return
 */
function initAnimation() {
    //得到焦点
    $("#password").focus(function () {

        $("#left_hand").animate({
            left: "150",
            top: " -38"
        },
            {
                step: function () {
                    if (parseInt($("#left_hand").css("left")) > 140) {
                        $("#left_hand").attr("class", "left_hand");
                    }
                }
            }, 2000);

        $("#right_hand").animate({
            right: "-64",
            top: "-38px"
        }, {
                step: function () {
                    if (parseInt($("#right_hand").css("right")) > -70) {
                        $("#right_hand").attr("class", "right_hand");
                    }
                }
            }, 2000);
    });
    //失去焦点
    $("#password").blur(function () {
        $("#left_hand").attr("class", "initial_left_hand");
        $("#left_hand").attr("style", "left:100px;top:-12px;");
        $("#right_hand").attr("class", "initial_right_hand");
        $("#right_hand").attr("style", "right:-112px;top:-12px");
    });
}

/**
 * 绑定按钮的事件
 * @return {[type]} [description]
 */
function bindEvent() {
    $('#btn_login').on('click', fn_login);
    $('#username').on('blur', fn_blur);
    $('#password').on('blur', fn_blur);
    //回车登录
    $('#username').on('keydown', fn_enterLogin);
    $('#password').on('keydown', fn_enterLogin);
}
/**
 * 登录事件
 * @return 跳转页面
 */
function fn_login() {
    console.log('login');
    $('body').focus(); //让其他随便一个获取焦点，目的：在文本框回车，如果验证没通过，则显示红色边框
    var flag_validate = true;
    var $username = $('#username');
    var $password = $('#password');
    var user = {
        username: $username.val(),
        password: $password.val()
    }

    if (user.username.length == 0) {
        $username.addClass('login-error');
        flag_validate = false;
    }
    if (user.password.length == 0) {
        $password.addClass('login-error');
        flag_validate = false;
    }
    //验证通过
    if (flag_validate) {
        var url = loginUrl;
        $.post(url, user, function (data, textStatus, xhr) {
            if (data.code == 0) {
                showNotice('btn_login', data.message);
            } else {
                window.location = data.toUrl;
            }
        });
    }
}

/**
 * 控制文本框移入移除是否符合验证的规则
 * 验证的规则：这里使用不能为空，需要则自己修改
 * @return
 */
function fn_blur() {
    var $this = $(this);
    if (!!!$this.val()) {
        $this.addClass('login-error')
    } else {
        $this.removeClass('login-error')
    }
}

/**
 * 回车登录
 * @return
 */
function fn_enterLogin(e) {
    if (e.keyCode == 13) {
        fn_login();
    }
}

/**
 * 显示信息，并且把按钮变成不可选中，直到关闭提示之后
 * @param  {[string]} id [按钮的选择器，id]
 * @return {[string]} msg      [提示信息]
 */
function showNotice(id, msg, duration) {
    duration = duration || 1500;
    var $login = $('#' + id);
    $login.attr('disabled', 'disabled').addClass('login-btn-disabled');
    var notification = new NotificationFx({
        message: msg,
        layout: 'growl',
        effect: 'scale',
        ttl: duration,
        type: 'error', // notice, warning, error or success
        onClose: function () {
            $login.removeAttr('disabled').removeClass('login-btn-disabled');
        }
    });
    // show the notification
    notification.show();
}
