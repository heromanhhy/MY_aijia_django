// 购物车
// 全选
$(function ($) {
    $(".checkall").change(function () {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"))
    });
    
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    });
    // 数量增加对应的总价钱也会增加
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
    
        // 修改商品小计 
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parent().parent().siblings(".p-sum").html("￥" + price);
        getSum();
    })
    // 数量 减
    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        // 修改商品小计 
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parent().parent().siblings(".p-sum").html("￥" + price);
        getSum();
    });
    // 封装结算商品的个数及价钱
    getSum();
    
    function getSum() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
    
        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1))
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };
    // 删除
    // 商品后面的删除
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // 删除选中的商品
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // 清空购物车
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    });
    // 全选
    $(".checkall").change(function () {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"))
        // 给商品添加背景颜色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        // 给商品添加背景颜色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
});
