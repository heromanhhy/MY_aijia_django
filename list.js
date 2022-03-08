window.addEventListener('load', function () {
    $(function () {
        // 回到顶部
        // 播放音效
        // var elementButton = document.querySelector('.back_top');
        // var elevator = new Elevator({
        //     element: elementButton,
        //     mainAudio: 'music/elevator-music.mp3',
        //     endAudio: 'music/ding.mp3'
        // });
        // 定位到第二单元的对应位置
        $("#scroll_items1").click(function () {
            $('.shop_list_style').animatescroll({
                scrollSpeed: 1000,
                padding:70
            });
        });
        $("#scroll_items2").click(function () {
            $('.shop_style').animatescroll({
                scrollSpeed: 1000,
                padding:70
            });
        });
        $("#scroll_items3").click(function () {
            $('.shop_other_style').animatescroll({
                scrollSpeed: 500,
                padding:70
            });
        });
        $("#scroll_items4").click(function () {
            $('.shop_list_scheme').animatescroll({
                scrollSpeed: 500,
                padding:70
            });
        });
        $("#scroll_items5").click(function () {
            $('#current_title5').animatescroll({
                scrollSpeed: 500,
                padding:70
            });
        });
        $("#scroll_items6").click(function () {
            $('#current_title6').animatescroll({
                scrollSpeed: 500,
                padding:70
            });
        });
        // 搜索位置
        $('#scroll_search').click(function () {
            $('#scroll_search_input').slideToggle(500)
        });
        $('.slider_one_big_picture').EasySlides({
            'autoplay': true,
            'stepbystep': false,
            'show': 5,
            'loop': true
        })
        $('.slider_one_big_2').EasySlides({
            'autoplay': false,
            'stepbystep': true,
            'show': 5,
            'loop': true
        })
        $('.slider_circle_10').EasySlides({
            'autoplay': true,
            'show': 13
        })
        $('.slider_four_in_line').EasySlides({
            'autoplay': false,
            'show': 9
        })
        $('.slider_clock').EasySlides({
            'autoplay': true,
            'stepbystep': false,
            'show': 15
        })
    });
    
});
