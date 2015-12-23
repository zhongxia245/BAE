$(function () {
    var tableId = "maingrid",
        formId = "form";
    //初始化表格
    window.zx = window.zx || {};
    //获取数据
    var url = '../../admin/getNav.do';
    $("#" + tableId).ligerGrid({
        url: url,
        selectRowButtonOnly: true,
        height: '100%',
        heightDiff: -5,
        method: 'get',
        checkbox: true,
        pageSize: 20,
        rownumbers: true,
        columns: [{
            display: 'ID',
            name: '_id',
            hide: true
        }, {
            display: '导航名称',
            name: 'name',
            align: 'center',
            width: 150
        }, {
            display: '导航分类',
            name: 'category',
            align: 'center',
            width: 80
        }, {
            display: '导航图片',
            name: 'img',
            align: 'left',
            width: 200
        }, {
            display: '导航地址',
            name: 'url',
            align: 'left',
            width: 200
        }, {
            display: '备注',
            name: 'title',
            align: 'left',
            width: 250
        }],
        toolbar: {
            items: [{
                text: '增加',
                click: tableHandler.addClick,
                icon: 'add'
            }, {
                line: true
            }, {
                text: '修改',
                click: tableHandler.updateClick,
                icon: 'modify'
            }, {
                line: true
            }, {
                text: '删除',
                click: tableHandler.deleteRow,
                icon: 'delete'
            }]
        }
    });
    $("#pageloading").hide();

    //初始化表单
    var form = $("#form").ligerForm({
        validate: true
    });
    $('#form').hide();

    //初始化搜索栏事件
    $('#category').on('change', function () {
        var value = $(this).val(),
            table = new liger.get(tableId),
            condition = {
                page: table.options.page,
                pagesize: table.options.pageSize
            };
        if (value != -1) {
            condition.category = value;
        }
        table.loadServerData(condition);
    })
});

var tableHandler = (function () {
    var tableId = "maingrid",
        formId = "form";

    function setData(data) {
        var form = new liger.get(formId);
        form.setData(data);
    }

    //设置表单内容为空【通用】
    function setEmpty() {
        var form = new liger.get(formId);
        var data = form.getData();
        for (var variable in data) {
            if (data.hasOwnProperty(variable)) {
                data[variable] = " "; //内容的长度为0，会被清除掉
            }
        }
        form.setData(data);
    }

    //添加
    function addClick(item) {
        $.ligerDialog.open({
            target: $('#form'),
            height: 300,
            width: 650,
            buttons: [{
                text: '保存',
                onclick: function (item, dialog) {
                    var form = new liger.get(formId);
                    var table = new liger.get(tableId);
                    if (form.valid()) {
                        var data = form.getData();
                        var url = '../../admin/addNav.do';
                        $.post(url, data, function (result, textStatus, xhr) {
                            window.zx.tip({
                                content: "保存成功"
                            });
                            table.reload();
                            dialog.hidden();
                            setEmpty();
                        });
                    }
                }
            }, {
                text: '取消',
                onclick: function (item, dialog) {
                    dialog.hidden();
                    setEmpty();
                }
            }]
        });
    }

    //更新
    function updateClick(item) {
        var table = new liger.get(tableId);
        var selectRows = table.getSelectedRows();
        if (selectRows.length != 1) {
            window.zx.tip({
                title: '提示信息',
                content: '您未选中一行，或者选中多行!'
            });
            return;
        }
        var oldData = selectRows[0];
        setData(oldData);
        $.ligerDialog.open({
            target: $('#form'),
            height: 300,
            width: 650,
            buttons: [{
                text: '保存',
                onclick: function (item, dialog) {
                    var form = new liger.get(formId);
                    if (form.valid()) {
                        var data = form.getData();
                        data._id = oldData._id;
                        var url = '../../admin/updateNav.do';
                        $.post(url, data, function (result) {
                            console.log(result);
                            window.zx.tip({
                                content: "修改" + data.name + "数据成功!"
                            });
                            table.reload();
                            dialog.hidden();
                            setEmpty();
                        });
                    }
                }
            }, {
                text: '取消',
                onclick: function (item, dialog) {
                    dialog.hidden();
                    setEmpty();
                }
            }]
        });
    }

    //删除
    function deleteRow() {
        var table = new liger.get(tableId);
        var selectRows = table.getSelectedRows();
        $.ligerDialog.confirm('确定删除?', function (yes) {
            if (yes) {
                var delIds = "";
                for(var i=0;i<selectRows.length;i++){
                    delIds += selectRows[i]._id+",";
                }
                delIds = delIds.substr(0,delIds.length-1);
                var url = "../../admin/deleteNav.do?id=" + delIds;
                $.get(url, function (result) {
                    window.zx.tip({
                        content: "删除成功!"
                    });
                    table.deleteSelectedRow();
                    table.reload();
                })
            }
        });
    }

    return {
        deleteRow: deleteRow,
        addClick: addClick,
        updateClick: updateClick
    }
})();
