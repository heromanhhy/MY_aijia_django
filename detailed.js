window.addEventListener('load', function () {
    const myScroll = new IScroll("#wrapper", {
        mouseWheel: true, // 开启鼠标滚轮支持
        scrollbars: "custom" // 开启滚动条支持
    });
    // document.querySelector(".btn-default").onclick = () => {
    //     let li = document.createElement("li");
    //     li.innerText = "我是新增的li";
    //     document.querySelector("#wrapper>ul").appendChild(li);
    //     // 动态添加数据后 刷新iscroll
    //     myScroll.refresh();
    // };
    $(function () {
        $('.btn-default').on('click', function () {
            var $li = $("<li>$('.form-control').text()</li>");
            $("#wrapper>ul").append($li);
        })
    })



})