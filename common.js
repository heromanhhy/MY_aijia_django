window.addEventListener('load', function () {
    $(function () {
        // 下拉菜单的效果设计
        $('.shortcut_items li').stop().click(function(){
            var index=$(this).index();
            $('.shortcut_items span').stop().animate({left:(index-1)*80+index*2+'px'});
            $('.shortcut_menu').stop().slideToggle(1000);
            // 控制分类
            $('.shortcut_menu #shortcut_menul').eq(index-1).stop().show().siblings().stop().hide();
            $('.shortcut_menu #shortcut_menur_index').eq(index-1).stop().show().siblings().stop().hide();
            // 下拉菜单选择
            $(".shortcut_menu #shortcut_menul li").click(function () {
                $(this).addClass("current1").siblings('li').removeClass('current1');
                var indexs = $(this).index();
                console.log(indexs);
                $('.shortcut_menu #shortcut_menul_items').eq(indexs).stop().show().siblings('#shortcut_menul_items').stop().hide();
                $('.shortcut_menu #shortcut_menur_index').eq(index-1).find('#shortcut_menul_items').eq(indexs).stop().show().siblings('#shortcut_menul_items').stop().hide();
            });
            // 当鼠标离开shortcut_menu时，下拉菜单消失
            $('.shortcut_menu').mouseleave(function () {
                $(this).slideUp(1000,function(){
                    $(this).stop().hide();
                });
            });
        });
        // 回到顶部
        // 播放音效
        // var elementButton = document.querySelector('.back_top');
        // var elevator = new Elevator({
        //     element: elementButton,
        //     mainAudio: 'music/elevator-music.mp3',
        //     endAudio: 'music/ding.mp3'
        // });
        // 时间
        var elevator = new Elevator({
            element: document.querySelector('.back_top'),
            duration: 1000 // milliseconds
        });
        var elevator = new Elevator({
            element: document.querySelector('.back_top'),
            duration: 1000 // milliseconds
        });
        // 电梯导栏滑动
        $(function () {
            // 设置透明度
            // $('.scroll_nav li').hover(function(){
            //     $(this).siblings().fedeTo(400,0.5);
            // },function(){
            //     $(this).siblings().fedeTo(400,1);
            // });
            // 回到顶部
            $("#scroll_back").click(function () {
                $('body').animatescroll();
            });
            $(".back_top").click(function () {
                $('body').animatescroll();
            })
            // 定位到第二单元的对应位置
            $("#scroll_items1").click(function () {
                $('#current_title2').animatescroll({
                    scrollSpeed: 1000
                });
            })
            $("#scroll_items2").click(function () {
                $('#current_title3').animatescroll({
                    scrollSpeed: 1000
                });
            });
            $("#scroll_items3").click(function () {
                $('#current_title4').animatescroll({
                    scrollSpeed: 500
                });
            });
            // $(".btn5").click(function(){
            //     $('#section2').animatescroll({padding:-250});
            // })
            // $('#scroll_search_input').mou
        });
    $('#scroll_search').click(function () {
        $('#scroll_search_input').show();
    });
    });
    // 点击购物车小方块显示购物车信息
    var cartWrapper = $('.cd-cart-container');
    //product id - you don't need a counter in your real project but you can use your real product id
    var productId = 0;
    if (cartWrapper.length > 0) {
        //store jQuery objects
        var cartBody = cartWrapper.find('.body')
        var cartList = cartBody.find('ul').eq(0);
        var cartTotal = cartWrapper.find('.checkout').find('span');
        var cartTrigger = cartWrapper.children('.cd-cart-trigger');
        var cartCount = cartTrigger.children('.count')
        var addToCartBtn = $('.cd-add-to-cart');
        // var addToCartBtnSm=$('.scroll_cat');
        var undo = cartWrapper.find('.undo');
        var undoTimeoutId;
        var addToCartBtnSm=$('#scroll_cat');

        addToCartBtnSm.on('click', function (event) {
            toggleCart();
        });
        //add product to cart
        addToCartBtn.on('click', function (event) {
            event.preventDefault();
            addToCart($(this));
        });

        //open/close cart
        cartTrigger.on('click', function (event) {
            event.preventDefault();
            toggleCart();
        });

        //close cart when clicking on the .cd-cart-container::before (bg layer)
        cartWrapper.on('click', function (event) {
            if ($(event.target).is($(this))) toggleCart(true);
        });

        //delete an item from the cart
        cartList.on('click', '.delete-item', function (event) {
            event.preventDefault();
            removeProduct($(event.target).parents('.product'));
        });

        //update item quantity
        cartList.on('change', 'select', function (event) {
            quickUpdateCart();
        });

        //reinsert item deleted from the cart
        undo.on('click', 'a', function (event) {
            clearInterval(undoTimeoutId);
            event.preventDefault();
            cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
                quickUpdateCart();
            });
            undo.removeClass('visible');
        });
    }

    function toggleCart(bool) {
        var cartIsOpen = (typeof bool === 'undefined') ? cartWrapper.hasClass('cart-open') : bool;
        if (cartIsOpen) {
            cartWrapper.removeClass('cart-open');
            //reset undo
            clearInterval(undoTimeoutId);
            undo.removeClass('visible');
            cartList.find('.deleted').remove();

            setTimeout(function () {
                cartBody.scrollTop(0);
                //check if cart empty to hide it
                if (Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
            }, 500);
        } else {
            cartWrapper.addClass('cart-open');
        }
    }

    function addToCart(trigger) {
        var cartIsEmpty = cartWrapper.hasClass('empty');
        //update cart product list
        addProduct();
        //update number of items 
        updateCartCount(cartIsEmpty);
        //update total price
        updateCartTotal(trigger.data('price'), true);
        //show cart
        cartWrapper.removeClass('empty');
    }

    function addProduct() {
        //this is just a product placeholder
        //you should insert an item with the selected product info
        //replace productId, productName, price and url with your real product info
        productId = productId + 1;
        var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../upload/img/1.jpg" alt="商品"></a></div><div class="product-details"><h3><a href="#0">商品名称：</a></h3><span class="price">￥30</span><div class="actions"><a href="#0" class="delete-item">删除</a><div class="quantity"><label for="cd-product-' + productId + '">数量：</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
        cartList.prepend(productAdded);
    }

    function removeProduct(product) {
        clearInterval(undoTimeoutId);
        cartList.find('.deleted').remove();

        var topPosition = product.offset().top - cartBody.children('ul').offset().top,
            productQuantity = Number(product.find('.quantity').find('select').val()),
            productTotPrice = Number(product.find('.price').text().replace('￥', '')) * productQuantity;

        product.css('top', topPosition + 'px').addClass('deleted');

        //update items count + total price
        updateCartTotal(productTotPrice, false);
        updateCartCount(true, -productQuantity);
        undo.addClass('visible');

        //wait 8sec before completely remove the item
        undoTimeoutId = setTimeout(function () {
            undo.removeClass('visible');
            cartList.find('.deleted').remove();
        }, 5000);
        // 5秒删除成功
    }

    function quickUpdateCart() {
        var quantity = 0;
        var price = 0;

        cartList.children('li:not(.deleted)').each(function () {
            var singleQuantity = Number($(this).find('select').val());
            quantity = quantity + singleQuantity;
            price = price + singleQuantity * Number($(this).find('.price').text().replace('￥', ''));
        });

        cartTotal.text(price.toFixed(2));
        cartCount.find('li').eq(0).text(quantity);
        cartCount.find('li').eq(1).text(quantity + 1);
    }

    function updateCartCount(emptyCart, quantity) {
        if (typeof quantity === 'undefined') {
            var actual = Number(cartCount.find('li').eq(0).text()) + 1;
            var next = actual + 1;

            if (emptyCart) {
                cartCount.find('li').eq(0).text(actual);
                cartCount.find('li').eq(1).text(next);
            } else {
                cartCount.addClass('update-count');

                setTimeout(function () {
                    cartCount.find('li').eq(0).text(actual);
                }, 150);

                setTimeout(function () {
                    cartCount.removeClass('update-count');
                }, 200);

                setTimeout(function () {
                    cartCount.find('li').eq(1).text(next);
                }, 230);
            }
        } else {
            var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
            var next = actual + 1;

            cartCount.find('li').eq(0).text(actual);
            cartCount.find('li').eq(1).text(next);
        }
    }

    function updateCartTotal(price, bool) {
        bool ? cartTotal.text((Number(cartTotal.text()) + price).toFixed(2)) : cartTotal.text((Number(cartTotal.text()) - price).toFixed(2));
    }
})