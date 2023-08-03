var OriginTitle = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 你去哪了? 快回来!!!';
        setTimeout(function () {
            if(document.hidden){
                document.title = OriginTitle;
            }
        }, 4000);
    }else {
        document.title = 'ヾ(❀╹◡╹)ﾉ~ 你终于回来了 ~';
        setTimeout(function () {
             if(!document.hidden){
                document.title = OriginTitle;
             }
        }, 2000);
    }
});